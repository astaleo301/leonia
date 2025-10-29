# 記事作成支援ツール

JSONファイルに直接HTMLを書くのは大変なので、マークダウン形式で記事を書いて自動的に変換できるツールを作成しました。

## 使い方

### 1. 記事の下書きを作成

`articles/drafts/` ディレクトリに `.md` ファイルを作成します。

```bash
# 例: my-article.md
touch articles/drafts/my-article.md
```

### 2. マークダウン形式で記事を書く

ファイルの先頭にメタデータを記述し、その後に本文を書きます。

```markdown
---
title: 記事のタイトル
category: テクノロジー
categoryColor: bg-blue-500/10
categoryText: text-blue-400
excerpt: 記事の要約（2-3行程度）
date: 2025-10-29
image: https://images.unsplash.com/photo-xxx?w=800&q=80
audioUrl: ./audio/art.mp3
---

記事の本文をここに書きます。普通のマークダウン形式で書けます。

## 見出し

段落は改行2つで分けます。

**太字** や *イタリック* も使えます。

- リスト項目1
- リスト項目2
- リスト項目3

1. 番号付きリスト
2. 番号付きリスト
3. 番号付きリスト
```

### 3. 変換ツールを実行

```bash
node tools/article-converter.js my-article.md
```

これで `articles/articles.json` に記事が自動的に追加されます！

## カテゴリの色設定

### テクノロジー
```yaml
category: テクノロジー
categoryColor: bg-blue-500/10
categoryText: text-blue-400
```

### サイエンス
```yaml
category: サイエンス
categoryColor: bg-emerald-500/10
categoryText: text-emerald-400
```

### 社会
```yaml
category: 社会
categoryColor: bg-purple-500/10
categoryText: text-purple-400
```

### 経済
```yaml
category: 経済
categoryColor: bg-amber-500/10
categoryText: text-amber-400
```

## マークダウン記法のサポート

- `## 見出し` → h3タグに変換（シンプルなスタイル）
- `**太字**` → 強調
- `*イタリック*` → 注釈風
- `- リスト` → 箇条書き
- `1. 番号` → 番号付きリスト

全て落ち着いた色合いで自動的にスタイリングされます。

## サンプルファイル

`articles/drafts/example.md` にサンプルがあります。参考にしてください。

## 注意事項

- メタデータは必ず `---` で囲む
- `audioUrl` はオプション（音声版がある場合のみ）
- 画像URLはUnsplashなどの外部URLを使用
- 日付は YYYY-MM-DD 形式
