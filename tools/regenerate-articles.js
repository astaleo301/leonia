#!/usr/bin/env node

/**
 * 既存の全記事ページを再生成するツール
 */

const fs = require('fs');
const path = require('path');

// 記事ページ生成関数（article-converter.jsから抽出）
function generateArticlePage(article) {
    // 執筆者情報（統一）
    const author = {
        name: 'Ἄνθρωπον ζητῶ',
        icon: '🏮',
        description: '真実を照らす者',
        color: 'from-amber-500 to-orange-500'
    };

    const badgeInfo = {
        investigation: { label: 'Original Investigation', icon: '🔍' }
    };

    const badges = (article.badges || [])
        .filter(badgeId => badgeId === 'investigation')
        .map(badgeId => badgeInfo[badgeId])
        .filter(Boolean);

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
                <nav class="flex items-center gap-2">
                    <a href="../../index.html" class="flex items-center gap-2 px-3 md:px-4 py-2.5 rounded-xl transition-all text-sm duration-300 font-light text-slate-400 hover:bg-white/5 hover:text-slate-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
                        <span class="hidden md:inline">ホーム</span>
                    </a>
                    <a href="../../index.html#content" class="flex items-center gap-2 px-3 md:px-4 py-2.5 rounded-xl transition-all text-sm duration-300 font-light text-slate-400 hover:bg-white/5 hover:text-slate-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2"></rect><path d="M7 3v18"></path><path d="M3 7.5h4"></path><path d="M3 12h18"></path><path d="M3 16.5h4"></path><path d="M17 3v18"></path><path d="M17 7.5h4"></path><path d="M17 16.5h4"></path></svg>
                        <span class="hidden md:inline">コンテンツ</span>
                    </a>
                    <a href="../../index.html#info" class="flex items-center gap-2 px-3 md:px-4 py-2.5 rounded-xl transition-all text-sm duration-300 font-light text-slate-400 hover:bg-white/5 hover:text-slate-300">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                        <span class="hidden md:inline">Info</span>
                    </a>
                </nav>
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
                <a href="../../authors/diogenes.html" class="flex items-center gap-3 group hover:bg-white/5 px-4 py-2 rounded-xl transition-all">
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

    console.log(`✓ 記事ページを再生成しました: ${filename}`);
}

// メイン処理
const articlesPath = path.join(__dirname, '../articles/articles.json');
const articles = JSON.parse(fs.readFileSync(articlesPath, 'utf-8'));

console.log(`${articles.length}件の記事ページを再生成します...\n`);

articles.forEach(article => {
    generateArticlePage(article);
});

console.log(`\n✓ すべての記事ページを再生成しました！`);
