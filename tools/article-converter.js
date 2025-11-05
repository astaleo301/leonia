#!/usr/bin/env node

/**
 * 記事作成支援ツール
 * マークダウン形式で書いた記事をHTMLに変換してarticles.jsonに追加します
 *
 * 使い方:
 * 1. articles/drafts/ に .md ファイルを作成
 * 2. node tools/article-converter.js [filename.md] を実行
 *
 * マークダウンファイルの形式:
 * ---
 * title: 記事タイトル
 * category: カテゴリ
 * categoryColor: bg-blue-500/10
 * categoryText: text-blue-400
 * excerpt: 記事の要約
 * date: 2025-10-29
 * image: https://...
 * audioUrl: ./audio/art.mp3 (オプション)
 * ---
 *
 * ## 見出し1
 *
 * 本文...
 */

const fs = require('fs');
const path = require('path');

// マークダウンを簡易的にHTMLに変換する関数
function markdownToHTML(markdown) {
    let html = markdown;

    // 見出し (h3)
    html = html.replace(/^### (.+)$/gm, "<h3 class='text-lg font-light text-slate-300 mt-8 mb-3 border-l-2 border-slate-700 pl-3'>$1</h3>");

    // 見出し (h2)
    html = html.replace(/^## (.+)$/gm, "<h3 class='text-lg font-light text-slate-300 mt-8 mb-3 border-l-2 border-slate-700 pl-3'>$1</h3>");

    // 太字
    html = html.replace(/\*\*(.+?)\*\*/g, "<span class='text-slate-300'>$1</span>");

    // イタリック
    html = html.replace(/\*(.+?)\*/g, "<span class='text-slate-500 italic'>$1</span>");

    // リスト
    html = html.replace(/^- (.+)$/gm, "<div class='text-slate-400 text-sm'><span class='text-slate-500'>•</span> $1</div>");

    // 番号付きリスト
    html = html.replace(/^(\d+)\. (.+)$/gm, "<div class='text-slate-400 text-sm'><span class='text-slate-500'>$1.</span> $2</div>");

    // 段落に分割
    const paragraphs = html.split('\n\n').filter(p => p.trim());
    html = paragraphs.map(p => {
        if (p.startsWith('<h3') || p.startsWith('<div')) {
            return p;
        }
        return `<p class='text-slate-400 text-sm leading-relaxed'>${p.trim()}</p>`;
    }).join('');

    return `<div class='space-y-5'>${html}</div>`;
}

// メタデータとコンテンツを分離
function parseMarkdown(content) {
    const metaRegex = /^---\n([\s\S]+?)\n---\n([\s\S]+)$/;
    const match = content.match(metaRegex);

    if (!match) {
        throw new Error('メタデータが見つかりません。ファイルの先頭に ---\\n...\\n--- 形式でメタデータを記述してください。');
    }

    const metaString = match[1];
    const markdownContent = match[2];

    const metadata = {};
    metaString.split('\n').forEach(line => {
        const [key, ...valueParts] = line.split(':');
        if (key && valueParts.length > 0) {
            metadata[key.trim()] = valueParts.join(':').trim();
        }
    });

    return { metadata, markdownContent };
}

// メイン処理
function convertArticle(filename) {
    const draftPath = path.join(__dirname, '../articles/drafts', filename);
    const articlesPath = path.join(__dirname, '../articles/articles.json');

    // ファイルが存在するか確認
    if (!fs.existsSync(draftPath)) {
        console.error(`エラー: ${draftPath} が見つかりません`);
        process.exit(1);
    }

    // マークダウンファイルを読み込み
    const content = fs.readFileSync(draftPath, 'utf-8');
    const { metadata, markdownContent } = parseMarkdown(content);

    // HTMLに変換
    const htmlContent = markdownToHTML(markdownContent);

    // articles.jsonを読み込み
    const articles = JSON.parse(fs.readFileSync(articlesPath, 'utf-8'));

    // 新しいIDを生成
    const newId = Math.max(...articles.map(a => a.id)) + 1;

    // 新しい記事オブジェクトを作成
    const newArticle = {
        id: newId,
        title: metadata.title,
        category: metadata.category,
        categoryColor: metadata.categoryColor,
        categoryText: metadata.categoryText,
        excerpt: metadata.excerpt,
        summary: htmlContent,
        date: metadata.date,
        image: metadata.image
    };

    // audioUrlがあれば追加
    if (metadata.audioUrl) {
        newArticle.audioUrl = metadata.audioUrl;
    }

    // authorTypeとbadgesを追加
    if (metadata.authorType) {
        newArticle.authorType = metadata.authorType;
    }
    if (metadata.badges) {
        try {
            newArticle.badges = JSON.parse(metadata.badges);
        } catch (e) {
            console.warn('警告: badgesのパースに失敗しました');
        }
    }

    // 配列に追加
    articles.push(newArticle);

    // JSONファイルを保存
    fs.writeFileSync(articlesPath, JSON.stringify(articles, null, 2), 'utf-8');

    console.log(`✓ 記事を追加しました: ${metadata.title} (ID: ${newId})`);
    console.log(`✓ articles/articles.json を更新しました`);

    // 個別HTMLページも自動生成
    generateArticlePage(newArticle);
}

// 個別HTMLページ生成関数
function generateArticlePage(article) {
    const authorInfo = {
        ai: {
            name: 'Leonia AI',
            icon: '🤖',
            description: 'AI記者。複数の信頼できる情報源から収集されたデータをもとに、中立的な視点で記事を作成します。',
            color: 'from-blue-500 to-cyan-500'
        },
        human: {
            name: 'Leonia編集部',
            icon: '✍️',
            description: '人間のライターによる執筆。独自の視点と専門知識に基づいて記事を作成しています。',
            color: 'from-emerald-500 to-teal-500'
        },
        collaborative: {
            name: 'Leonia 共同制作',
            icon: '🤝',
            description: 'AIと人間が協力して作成。AIによるデータ収集と人間による編集・検証を組み合わせています。',
            color: 'from-purple-500 to-pink-500'
        }
    };

    const badgeInfo = {
        investigation: { label: 'Original Investigation', icon: '🔍' },
        verified: { label: 'Verified by Leonia OSINT Team', icon: '✓' }
    };

    const author = authorInfo[article.authorType] || authorInfo.collaborative;
    const badges = (article.badges || []).map(badgeId => badgeInfo[badgeId]).filter(Boolean);

    const html = `<!DOCTYPE html>
<html lang="ja">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${article.title} - Leonia</title>
    <meta name="description" content="${article.excerpt}">
    <meta property="og:title" content="${article.title}">
    <meta property="og:description" content="${article.excerpt}">
    <meta property="og:image" content="${article.image}">
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="../../styles.css">
</head>
<body class="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
    <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-orange-950/20 via-transparent to-transparent pointer-events-none"></div>

    <header class="sticky top-0 z-40 backdrop-blur-2xl bg-slate-950/80 border-b border-white/5">
        <div class="container mx-auto px-6 py-5">
            <div class="flex items-center justify-between">
                <a href="../../index.html" class="flex items-center gap-3 hover:opacity-80 transition-opacity">
                    <img src="../../images/logo.jpg" alt="Leonia Logo" class="w-11 h-11 rounded-2xl shadow-lg shadow-orange-500/20">
                    <div>
                        <h1 class="text-xl font-extralight bg-gradient-to-r from-slate-200 via-orange-200 to-amber-300 bg-clip-text text-transparent">Leonia</h1>
                        <p class="text-[10px] text-slate-600 font-light">Neutral Eyes</p>
                    </div>
                </a>
                <button onclick="shareArticle()" class="p-2.5 text-slate-400 hover:text-slate-300 hover:bg-white/5 rounded-xl transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
                </button>
            </div>
        </div>
    </header>

    <main class="container mx-auto px-6 py-12">
        <article class="max-w-3xl mx-auto">
            <div class="mb-8 rounded-2xl overflow-hidden">
                <img src="${article.image}" alt="${article.title}" class="w-full h-72 object-cover">
            </div>

            <div class="flex items-center gap-3 mb-6">
                <span class="${article.categoryColor} ${article.categoryText} px-3 py-1 rounded-lg text-sm font-light">${article.category}</span>
                <span class="text-slate-500 text-sm">${article.date}</span>
            </div>

            <h1 class="text-3xl md:text-4xl font-light text-slate-100 mb-6 leading-relaxed">
                ${article.title}
            </h1>

            <p class="text-lg text-slate-400 mb-8 leading-relaxed">
                ${article.excerpt}
            </p>

            <div class="flex flex-wrap items-center gap-4 mb-10 pb-8 border-b border-white/5">
                <a href="../../authors/${article.authorType}.html" class="flex items-center gap-3 group hover:bg-white/5 px-4 py-2 rounded-xl transition-all">
                    <div class="w-10 h-10 rounded-full bg-gradient-to-br ${author.color} flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                        ${author.icon}
                    </div>
                    <div>
                        <p class="text-sm text-slate-300 group-hover:text-slate-200 transition-colors">${author.name}</p>
                        <p class="text-xs text-slate-500">執筆者を見る →</p>
                    </div>
                </a>
                ${badges.map(badge => `
                <div class="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
                    <span class="text-sm">${badge.icon}</span>
                    <span class="text-xs text-slate-400">${badge.label}</span>
                </div>
                `).join('')}
            </div>

            <div class="prose prose-invert prose-slate max-w-none">
                ${article.summary}
            </div>

            <div class="mt-12 pt-8 border-t border-white/5">
                <div class="flex items-center justify-center gap-4">
                    <button onclick="shareArticle('twitter')" class="flex items-center gap-2 px-4 py-2 bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 rounded-xl transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                        <span class="text-sm">シェア</span>
                    </button>
                    <button onclick="shareArticle('copy')" class="flex items-center gap-2 px-4 py-2 bg-slate-700/50 hover:bg-slate-700/70 text-slate-300 rounded-xl transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                        <span class="text-sm">URLコピー</span>
                    </button>
                </div>
            </div>

            <div class="mt-12 text-center">
                <a href="../../index.html" class="inline-flex items-center gap-2 text-slate-400 hover:text-slate-300 transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="m15 18-6-6 6-6"/></svg>
                    <span>記事一覧に戻る</span>
                </a>
            </div>
        </article>
    </main>

    <footer class="relative border-t border-white/5 bg-slate-950/50 backdrop-blur-sm mt-24">
        <div class="container mx-auto px-6 py-10">
            <div class="text-center space-y-2">
                <p class="text-slate-500 text-sm font-light">© 2025 Leonia. All rights reserved.</p>
                <p class="text-slate-600 text-xs font-light">Powered by NoctAI</p>
            </div>
        </div>
    </footer>

    <script>
        function shareArticle(platform) {
            const url = window.location.href;
            const text = "${article.title.replace(/"/g, '\\"')}";
            switch(platform) {
                case 'twitter':
                    window.open(\`https://twitter.com/intent/tweet?text=\${encodeURIComponent(text)}&url=\${encodeURIComponent(url)}\`, '_blank');
                    break;
                case 'copy':
                    navigator.clipboard.writeText(url).then(() => alert('URLをコピーしました！'));
                    break;
                default:
                    navigator.share({ title: text, url: url });
            }
        }
    </script>
</body>
</html>`;

    const outputDir = path.join(__dirname, '../articles/pages');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const filename = `${article.id}.html`;
    const filepath = path.join(outputDir, filename);
    fs.writeFileSync(filepath, html, 'utf-8');

    console.log(`✓ 記事ページを生成しました: ${filename}`);
}

// コマンドライン引数を処理
const args = process.argv.slice(2);

if (args.length === 0) {
    console.log('使い方: node tools/article-converter.js <filename.md>');
    console.log('');
    console.log('例: node tools/article-converter.js my-article.md');
    console.log('');
    console.log('ファイルは articles/drafts/ に配置してください。');
    process.exit(0);
}

convertArticle(args[0]);
