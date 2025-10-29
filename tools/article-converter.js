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

    // 配列に追加
    articles.push(newArticle);

    // JSONファイルを保存
    fs.writeFileSync(articlesPath, JSON.stringify(articles, null, 2), 'utf-8');

    console.log(`✓ 記事を追加しました: ${metadata.title} (ID: ${newId})`);
    console.log(`✓ articles/articles.json を更新しました`);
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
