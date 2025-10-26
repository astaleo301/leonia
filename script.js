const newsArticles = [
  {
    id: 1,
    title: "量子コンピューティングの新たな突破口",
    category: "テクノロジー",
    icon: "💻",
    excerpt: "研究チームが室温での量子もつれ状態の維持に成功。",
    summary: "国際研究チームが、室温環境下で量子もつれ状態を安定的に維持することに成功しました。",
    date: "2025-10-27"
  },
  // ... 他の記事（元のReactコードからコピー、スペース節約のため省略）
];

const researchBooks = [
  {
    id: 1,
    title: "量子コンピューティング革命",
    subtitle: "次世代計算技術の全貌",
    pages: 67,
    date: "2025-10-20",
    summary: "本書は、量子コンピューティング技術の最新動向から将来展望までをまとめたレポートです。"
  },
  // ... 他の本（省略）
];

let currentPage = 'home';
let selectedArticle = null;
let selectedBook = null;

document.addEventListener('DOMContentLoaded', () => {
  const redirectPath = sessionStorage.getItem('redirect');
  if (redirectPath && redirectPath !== '/') {
    const pageMap = {
      '/article': 'article',
      '/bookshelf': 'bookshelf',
      '/about': 'about',
      '/contact': 'contact'
    };
    showPage(pageMap[redirectPath] || 'home');
    sessionStorage.removeItem('redirect');
  } else {
    showPage('home');
  }
});

function showPage(page) {
  currentPage = page;
  const content = document.getElementById('content');
  content.classList.remove('animate-fadeIn');
  setTimeout(() => content.classList.add('animate-fadeIn'), 10);

  if (page === 'home') {
    content.innerHTML = `
      <div class="text-center">
        <h2 class="animate-fadeIn">Neutral Eyes</h2>
        <p>中立的な視点で世界を見つめる</p>
      </div>
      <div class="grid">
        ${newsArticles.map(article => `
          <div class="article-card" onclick="showArticlePopup(${article.id})">
            <span class="category">${article.category}</span>
            <span class="date">${article.date}</span>
            <h3>${article.title}</h3>
            <p>${article.excerpt}</p>
          </div>
        `).join('')}
      </div>
    `;
  } else if (page === 'bookshelf') {
    content.innerHTML = `
      <div class="text-center">
        <h2>調査本棚</h2>
        <p>AIによる詳細な調査・分析レポート</p>
      </div>
      <div class="grid">
        ${researchBooks.map(book => `
          <div class="book-card" onclick="showBookPopup(${book.id})">
            <h3>${book.title}</h3>
            <p>${book.subtitle}</p>
            <span class="date">${book.pages}ページ • ${book.date}</span>
          </div>
        `).join('')}
      </div>
    `;
  } else if (page === 'about') {
    content.innerHTML = `
      <h2>Leoniaについて</h2>
      <p>Leoniaは、AIによる中立的な情報収集と分析を通じて、偏りのないニュースをお届けします。</p>
      <p>「Neutral Eyes」は、あらゆる視点から物事を見つめ、読者自身が判断できる情報を提供します。</p>
    `;
  } else if (page === 'contact') {
    content.innerHTML = `
      <h2>お問い合わせ</h2>
      <form onsubmit="handleSubmit(event)">
        <label>お名前</label>
        <input type="text" id="name" required>
        <label>メールアドレス</label>
        <input type="email" id="email" required>
        <label>メッセージ</label>
        <textarea id="message" rows="5" required></textarea>
        <button type="submit">送信</button>
      </form>
    `;
  } else if (page === 'article' && selectedArticle) {
    content.innerHTML = `
      <button onclick="showPage('home')">← 戻る</button>
      <div class="article-card">
        <span class="category">${selectedArticle.category}</span>
        <span class="date">${selectedArticle.date}</span>
        <h1>${selectedArticle.title}</h1>
        <p>${selectedArticle.summary}</p>
        <button onclick="showShareMenu(${selectedArticle.id})">共有</button>
        <div id="share-menu" style="display: none;">
          <button onclick="share('twitter', ${selectedArticle.id})"><i data-lucide="twitter"></i></button>
          <button onclick="share('facebook', ${selectedArticle.id})"><i data-lucide="facebook"></i></button>
          <button onclick="share('copy', ${selectedArticle.id})"><i data-lucide="link-2"></i></button>
        </div>
      </div>
    `;
    lucide.createIcons();
  }
}

function showArticlePopup(id) {
  selectedArticle = newsArticles.find(a => a.id === id);
  const popup = document.getElementById('article-popup');
  popup.innerHTML = `
    <div class="popup-content">
      <button class="close" onclick="closePopup('article-popup')"><i data-lucide="x"></i></button>
      <h2>${selectedArticle.title}</h2>
      <span class="category">${selectedArticle.category}</span>
      <span class="date">${selectedArticle.date}</span>
      <p>${selectedArticle.summary}</p>
      <button onclick="showShareMenu(${selectedArticle.id})">共有</button>
      <button onclick="showPage('article')">詳細を見る</button>
      <div id="share-menu" style="display: none;">
        <button onclick="share('twitter', ${selectedArticle.id})"><i data-lucide="twitter"></i></button>
        <button onclick="share('facebook', ${selectedArticle.id})"><i data-lucide="facebook"></i></button>
        <button onclick="share('copy', ${selectedArticle.id})"><i data-lucide="link-2"></i></button>
      </div>
    </div>
  `;
  popup.style.display = 'flex';
  lucide.createIcons();
}

function showBookPopup(id) {
  selectedBook = researchBooks.find(b => b.id === id);
  const popup = document.getElementById('book-popup');
  popup.innerHTML = `
    <div class="popup-content">
      <button class="close" onclick="closePopup('book-popup')"><i data-lucide="x"></i></button>
      <h2>${selectedBook.title}</h2>
      <p>${selectedBook.subtitle}</p>
      <span class="date">${selectedBook.pages}ページ • ${selectedBook.date}</span>
      <p>${selectedBook.summary}</p>
      <button onclick="alert('本の閲覧は開発中です')">本を読む</button>
    </div>
  `;
  popup.style.display = 'flex';
  lucide.createIcons();
}

function closePopup(id) {
  document.getElementById(id).style.display = 'none';
}

function showShareMenu(id) {
  const shareMenu = document.getElementById('share-menu');
  shareMenu.style.display = shareMenu.style.display === 'none' ? 'flex' : 'none';
}

function share(platform, id) {
  const article = newsArticles.find(a => a.id === id);
  const url = `https://username.github.io/leonia-news/article/${article.id}`;
  if (platform === 'twitter') {
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(url)}`, '_blank');
  } else if (platform === 'facebook') {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
  } else if (platform === 'copy') {
    navigator.clipboard.writeText(url);
    alert('リンクをコピーしました');
  }
  document.getElementById('share-menu').style.display = 'none';
}

function handleSubmit(event) {
  event.preventDefault();
  alert('メッセージを送信しました(デモ)');
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('message').value = '';
}
