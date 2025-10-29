const BASE_URL = 'https://astaleo301.github.io/leonia/';

const icons = {
    home: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>',
    bookOpen: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>',
    info: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>',
    mail: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>',
    share2: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>',
    externalLink: '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" x2="21" y1="14" y2="3"></line></svg>',
    x: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>',
    twitter: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>',
    link2: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></svg>',
    book: '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path></svg>',
    messageCircle: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>',
    xTwitter: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4l11.733 16h4.267l-11.733 -16z"></path><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"></path></svg>',
    cloud: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"></path></svg>',
    play: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>',
    pause: '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>',
    skipBack: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>',
    skipForward: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>',
    volume2: '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>'
};

let newsArticles = [];
let researchBooks = [];
let audioPlayer = null;
let currentAudioBookId = null;
let currentAudioArticleId = null;
let sortOrder = 'newest';
let selectedCategory = 'all';

let state = {
    currentPage: 'home',
    selectedArticle: null,
    selectedBook: null,
    showPopup: false,
    showBookPopup: false,
    shareMenu: null,
    audioPlaying: false,
    audioCurrentTime: 0,
    audioDuration: 0
};

async function loadArticles() {
    try {
        const response = await fetch('./articles/articles.json');
        newsArticles = await response.json();
        renderContent();
    } catch (error) {
        console.error('記事の読み込みに失敗しました:', error);
        newsArticles = [];
        renderContent();
    }
}

async function loadBooks() {
    try {
        const response = await fetch('./books/books.json');
        researchBooks = await response.json();
    } catch (error) {
        console.error('本の読み込みに失敗しました:', error);
        researchBooks = [];
    }
}

const navItems = [
    { id: 'home', label: 'ホーム', icon: 'home' },
    { id: 'bookshelf', label: '本棚', icon: 'bookOpen' },
    { id: 'about', label: 'About', icon: 'info' },
    { id: 'contact', label: 'Contact', icon: 'mail' }
];

function renderNav() {
    const nav = document.getElementById('nav-buttons');
    nav.innerHTML = navItems.map(item => `
        <button
            onclick="changePage('${item.id}')"
            class="flex items-center gap-2 px-3 md:px-4 py-2.5 rounded-xl transition-all text-sm duration-300 font-light ${
                state.currentPage === item.id 
                    ? 'bg-gradient-to-r from-orange-400/70 to-amber-400/70 text-white shadow-lg shadow-orange-500/20' 
                    : 'text-slate-400 hover:bg-white/5 hover:text-slate-300'
            }"
        >
            ${icons[item.icon]}
            <span class="hidden md:inline">${item.label}</span>
        </button>
    `).join('');
}

function changePage(page) {
    state.currentPage = page;
    state.selectedArticle = null;
    sortOrder = 'newest';
    selectedCategory = 'all';
    window.scrollTo({ top: 0, behavior: 'smooth' });
    renderNav();
    renderContent();
}

function showArticlePopup(articleId) {
    state.selectedArticle = newsArticles.find(a => a.id === articleId);
    state.showPopup = true;
    renderPopup();
}

function closePopup() {
    state.showPopup = false;
    if (audioPlayer && currentAudioArticleId) {
        audioPlayer.pause();
        audioPlayer = null;
        currentAudioArticleId = null;
    }
    renderPopup();
}

function showBookModal(bookId) {
    state.selectedBook = researchBooks.find(b => b.id === bookId);
    state.showBookPopup = true;
    renderBookPopup();
}

function closeBookPopup() {
    state.showBookPopup = false;
    if (audioPlayer) {
        audioPlayer.pause();
        audioPlayer = null;
        currentAudioBookId = null;
    }
    renderBookPopup();
}

function toggleShareMenu(id) {
    event.stopPropagation();
    state.shareMenu = state.shareMenu === id ? null : id;
    if (state.showPopup) {
        renderPopup();
    } else if (state.showBookPopup) {
        renderBookPopup();
    } else {
        renderContent();
    }
}

function shareArticle(articleId, platform) {
    event.stopPropagation();
    const article = newsArticles.find(a => a.id === articleId);
    const url = `${BASE_URL}?article=${article.id}`;
    const text = article.title;
    
    switch(platform) {
        case 'twitter':
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
            break;
        case 'copy':
            navigator.clipboard.writeText(url);
            break;
    }
    state.shareMenu = null;
    if (state.showPopup) {
        renderPopup();
    } else {
        renderContent();
    }
}

function shareBook(bookId, platform) {
    event.stopPropagation();
    const book = researchBooks.find(b => b.id === bookId);
    const url = `${BASE_URL}?book=${book.id}`;
    const text = book.title;
    
    switch(platform) {
        case 'twitter':
            window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
            break;
        case 'copy':
            navigator.clipboard.writeText(url);
            break;
    }
    state.shareMenu = null;
    renderBookPopup();
}

function initAudioPlayer(bookId) {
    if (currentAudioBookId === bookId && audioPlayer) {
        return;
    }

    if (audioPlayer) {
        audioPlayer.pause();
    }

    const book = researchBooks.find(b => b.id === bookId);
    if (!book || !book.audioUrl) return;

    audioPlayer = new Audio(book.audioUrl);
    currentAudioBookId = bookId;
    currentAudioArticleId = null;

    audioPlayer.addEventListener('loadedmetadata', () => {
        state.audioDuration = audioPlayer.duration;
        updateAudioUI();
    });

    audioPlayer.addEventListener('timeupdate', () => {
        state.audioCurrentTime = audioPlayer.currentTime;
        updateAudioUI();
    });

    audioPlayer.addEventListener('ended', () => {
        state.audioPlaying = false;
        updateAudioUI();
    });

    audioPlayer.addEventListener('play', () => {
        state.audioPlaying = true;
        updateAudioUI();
    });

    audioPlayer.addEventListener('pause', () => {
        state.audioPlaying = false;
        updateAudioUI();
    });
}

function initArticleAudioPlayer(articleId) {
    if (currentAudioArticleId === articleId && audioPlayer) {
        return;
    }

    if (audioPlayer) {
        audioPlayer.pause();
    }

    const article = newsArticles.find(a => a.id === articleId);
    if (!article || !article.audioUrl) return;

    audioPlayer = new Audio(article.audioUrl);
    currentAudioArticleId = articleId;
    currentAudioBookId = null;

    audioPlayer.addEventListener('loadedmetadata', () => {
        state.audioDuration = audioPlayer.duration;
        updateAudioUI();
    });

    audioPlayer.addEventListener('timeupdate', () => {
        state.audioCurrentTime = audioPlayer.currentTime;
        updateAudioUI();
    });

    audioPlayer.addEventListener('ended', () => {
        state.audioPlaying = false;
        updateAudioUI();
    });

    audioPlayer.addEventListener('play', () => {
        state.audioPlaying = true;
        updateAudioUI();
    });

    audioPlayer.addEventListener('pause', () => {
        state.audioPlaying = false;
        updateAudioUI();
    });
}

function toggleAudioPlayPause() {
    if (!audioPlayer) return;
    
    if (state.audioPlaying) {
        audioPlayer.pause();
    } else {
        audioPlayer.play();
    }
}

function seekAudio(seconds) {
    if (!audioPlayer) return;
    audioPlayer.currentTime = Math.max(0, Math.min(audioPlayer.currentTime + seconds, audioPlayer.duration));
}

function setAudioProgress(value) {
    if (!audioPlayer) return;
    audioPlayer.currentTime = value;
}

function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
}

function updateAudioUI() {
    const playButton = document.getElementById('audio-play-button');
    const currentTimeEl = document.getElementById('audio-current-time');
    const durationEl = document.getElementById('audio-duration');
    const progressBar = document.getElementById('audio-progress');

    if (playButton) {
        playButton.innerHTML = state.audioPlaying ? icons.pause : icons.play;
    }

    if (currentTimeEl) {
        currentTimeEl.textContent = formatTime(state.audioCurrentTime);
    }

    if (durationEl) {
        durationEl.textContent = formatTime(state.audioDuration);
    }

    if (progressBar) {
        progressBar.value = state.audioCurrentTime;
        progressBar.max = state.audioDuration || 100;
        const percent = (state.audioCurrentTime / state.audioDuration) * 100 || 0;
        progressBar.style.background = `linear-gradient(to right, rgba(251, 146, 60, 0.3) 0%, rgba(251, 191, 36, 0.3) ${percent}%, rgba(255, 255, 255, 0.1) ${percent}%, rgba(255, 255, 255, 0.1) 100%)`;
    }
}

function renderPopup() {
    const container = document.getElementById('popup-container');
    if (!state.showPopup || !state.selectedArticle) {
        if (!state.showBookPopup) {
            container.innerHTML = '';
        }
        return;
    }

    const article = state.selectedArticle;
    container.innerHTML = `
        <div class="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn" onclick="closePopup()">
            <div class="absolute inset-0 bg-slate-950/80 backdrop-blur-md"></div>
            <div class="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-2xl rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-white/5 animate-slideUp" onclick="event.stopPropagation()">
                <button onclick="closePopup()" class="sticky top-6 right-6 float-right p-2.5 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 backdrop-blur-sm z-10">
                    ${icons.x}
                </button>
                
                <div class="p-10 space-y-6">
                    <img src="${article.image}" alt="${article.title}" class="w-full h-56 object-cover rounded-2xl shadow-xl">
                    
                    <div class="space-y-4">
                        <div class="flex items-center gap-3">
                            <span class="px-3 py-1.5 ${article.categoryColor} backdrop-blur-sm rounded-full text-xs ${article.categoryText} font-medium border border-white/5">
                                ${article.category}
                            </span>
                            <span class="text-slate-500 text-xs">${article.date}</span>
                        </div>
                        
                        <h2 class="text-3xl font-light text-slate-100 leading-snug">${article.title}</h2>
                        
                        <p class="text-slate-300 leading-relaxed text-base">${article.excerpt || ''}</p>
                    </div>
                    
                    <div class="pt-6 border-t border-white/5 space-y-4">
                        <p class="text-slate-400 text-sm leading-relaxed">
                            この記事は、複数の信頼できる情報源から収集されたデータをもとに、AIによって中立的な視点で作成されています。
                        </p>
                        
                        <div class="flex gap-3 flex-wrap">
                            <button onclick="toggleShareMenu(${article.id})" class="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 text-slate-300 rounded-xl transition-all text-sm backdrop-blur-sm">
                                ${icons.share2}
                                共有
                            </button>
                            
                            <button onclick="viewArticleDetail(${article.id})" class="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-400/80 to-amber-400/80 hover:from-orange-500/80 hover:to-amber-500/80 text-white rounded-xl transition-all text-sm shadow-lg shadow-orange-500/20">
                                ${icons.externalLink}
                                詳細を読む
                            </button>
                            
                            ${state.shareMenu === article.id ? `
                                <div class="flex gap-2 items-center animate-fadeIn">
                                    <button onclick="shareArticle(${article.id}, 'twitter')" class="p-2.5 bg-white/5 hover:bg-white/10 rounded-xl transition-all backdrop-blur-sm">
                                        ${icons.twitter}
                                    </button>
                                    <button onclick="shareArticle(${article.id}, 'copy')" class="p-2.5 bg-white/5 hover:bg-white/10 rounded-xl transition-all backdrop-blur-sm">
                                        ${icons.link2}
                                    </button>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderBookPopup() {
    const container = document.getElementById('popup-container');
    if (!state.showBookPopup || !state.selectedBook) {
        if (!state.showPopup) {
            container.innerHTML = '';
        }
        return;
    }

    const book = state.selectedBook;
    const existingContent = state.showPopup ? container.innerHTML : '';
    
    const hasChapters = book.chapters && book.chapters.length > 0;
    const hasCover = book.cover;
    const hasAudio = book.audioUrl;
    
    if (hasAudio && currentAudioBookId !== book.id) {
        initAudioPlayer(book.id);
    }

    const audioPlayerHTML = hasAudio ? `
        <div class="pt-6 border-t border-white/5 space-y-4">
            <div class="flex items-center justify-between mb-2">
                <h3 class="text-sm font-medium text-slate-300 flex items-center gap-2">
                    ${icons.volume2}
                    音声版
                </h3>
            </div>
            
            <div class="bg-white/5 rounded-2xl p-5 space-y-4 backdrop-blur-sm border border-white/5">
                <div class="flex items-center gap-3">
                    <div class="text-xs text-slate-500" id="audio-current-time">0:00</div>
                    <input 
                        type="range" 
                        id="audio-progress"
                        class="flex-1"
                        value="0"
                        max="100"
                        oninput="setAudioProgress(this.value)"
                    >
                    <div class="text-xs text-slate-500" id="audio-duration">0:00</div>
                </div>
                
                <div class="flex items-center justify-center gap-3">
                    <button onclick="seekAudio(-10)" class="p-2.5 bg-white/5 hover:bg-white/10 rounded-xl transition-all">
                        ${icons.skipBack}
                    </button>
                    
                    <button onclick="toggleAudioPlayPause()" id="audio-play-button" class="p-4 bg-gradient-to-r from-orange-400/80 to-amber-400/80 hover:from-orange-500/80 hover:to-amber-500/80 rounded-full transition-all shadow-lg shadow-orange-500/20">
                        ${icons.play}
                    </button>
                    
                    <button onclick="seekAudio(10)" class="p-2.5 bg-white/5 hover:bg-white/10 rounded-xl transition-all">
                        ${icons.skipForward}
                    </button>
                </div>
            </div>
        </div>
    ` : '';
    
    const tableOfContents = hasChapters ? `
        <div class="space-y-3">
            <h3 class="text-lg font-medium text-slate-200">目次</h3>
            <div class="space-y-2">
                ${book.chapters.map(chapter => `
                    <button onclick="readBookChapter(${book.id}, ${chapter.number})" 
                        class="w-full text-left px-4 py-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all group">
                        <div class="flex items-center justify-between">
                            <div>
                                <div class="text-xs text-slate-500">第${chapter.number}章</div>
                                <div class="text-sm text-slate-300 group-hover:text-orange-300 transition-colors">${chapter.title}</div>
                            </div>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </div>
                    </button>
                `).join('')}
            </div>
        </div>
    ` : '';
    
    container.innerHTML = existingContent + `
        <div class="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn" onclick="closeBookPopup()">
            <div class="absolute inset-0 bg-slate-950/80 backdrop-blur-md"></div>
            <div class="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-2xl rounded-3xl max-w-3xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-white/5 animate-slideUp" onclick="event.stopPropagation()">
                <button onclick="closeBookPopup()" class="sticky top-6 right-6 float-right p-2.5 bg-white/5 hover:bg-white/10 rounded-full transition-all duration-300 backdrop-blur-sm z-10">
                    ${icons.x}
                </button>
                
                <div class="p-6 sm:p-10 space-y-6">
                    <div class="flex flex-col sm:flex-row items-start gap-6">
                        ${hasCover ? `
                            <img src="./images/covers/${book.id}.jpg" alt="${book.title}" class="w-32 h-44 rounded-2xl shadow-2xl flex-shrink-0 object-cover mx-auto sm:mx-0" onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='flex';">
                        ` : ''}
                        <div class="w-32 h-44 rounded-2xl bg-gradient-to-br ${book.coverColor} shadow-2xl flex items-center justify-center flex-shrink-0 mx-auto sm:mx-0" style="${hasCover ? 'display:none;' : ''}">
                            ${icons.book}
                        </div>
                        <div class="flex-1 space-y-3 text-center sm:text-left w-full">
                            <h2 class="text-xl sm:text-2xl font-light text-slate-100 leading-snug">${book.title}</h2>
                            <p class="text-slate-400 text-sm">${book.subtitle}</p>
                            <div class="flex items-center justify-center sm:justify-start gap-4 text-xs text-slate-500 flex-wrap">
                                <span>${book.pages}ページ</span>
                                <span>•</span>
                                <span>${book.date}</span>
                                ${hasChapters ? `<span>•</span><span>${book.chapters.length}章</span>` : ''}
                            </div>
                        </div>
                    </div>
                    
                    <p class="text-slate-300 leading-relaxed">${book.summary}</p>
                    
                    ${audioPlayerHTML}
                    
                    <div class="pt-6 border-t border-white/5 space-y-4">
                        <div class="flex gap-3 flex-wrap">
                            <button onclick="toggleShareMenu('book-${book.id}')" class="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 text-slate-300 rounded-xl transition-all text-sm backdrop-blur-sm">
                                ${icons.share2}
                                共有
                            </button>
                            
                            ${state.shareMenu === `book-${book.id}` ? `
                                <div class="flex gap-2 items-center animate-fadeIn">
                                    <button onclick="shareBook(${book.id}, 'twitter')" class="p-2.5 bg-white/5 hover:bg-white/10 rounded-xl transition-all backdrop-blur-sm">
                                        ${icons.twitter}
                                    </button>
                                    <button onclick="shareBook(${book.id}, 'copy')" class="p-2.5 bg-white/5 hover:bg-white/10 rounded-xl transition-all backdrop-blur-sm">
                                        ${icons.link2}
                                    </button>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                    
                    ${hasChapters ? `
                        <div class="pt-6 border-t border-white/5">
                            ${tableOfContents}
                        </div>
                    ` : `
                        <div class="pt-6 border-t border-white/5">
                            <button onclick="alert('この本の内容は準備中です')" class="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-gradient-to-r from-orange-400/80 to-amber-400/80 hover:from-orange-500/80 hover:to-amber-500/80 text-white rounded-xl transition-all font-medium shadow-lg shadow-orange-500/20">
                                ${icons.book}
                                本を読む
                            </button>
                        </div>
                    `}
                </div>
            </div>
        </div>
    `;
    
    setTimeout(updateAudioUI, 100);
}

function readBookChapter(bookId, chapterNumber) {
    const book = researchBooks.find(b => b.id === bookId);
    if (!book || !book.chapters) return;
    
    const chapter = book.chapters.find(c => c.number === chapterNumber);
    if (!chapter) return;
    
    state.selectedBook = book;
    state.selectedChapter = chapter;
    renderChapterReader();
}

function renderChapterReader() {
    const container = document.getElementById('popup-container');
    const book = state.selectedBook;
    const chapter = state.selectedChapter;
    
    const currentIndex = book.chapters.findIndex(c => c.number === chapter.number);
    const hasPrev = currentIndex > 0;
    const hasNext = currentIndex < book.chapters.length - 1;
    
    container.innerHTML = `
        <div class="fixed inset-0 z-50 flex items-center justify-center p-4 animate-fadeIn" onclick="closeBookPopup()">
            <div class="absolute inset-0 bg-slate-950/80 backdrop-blur-md"></div>
            <div class="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-2xl rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-hidden shadow-2xl border border-white/5 animate-slideUp flex flex-col" onclick="event.stopPropagation()">
                
                <div class="flex items-center justify-between px-10 py-6 border-b border-white/5 flex-shrink-0">
                    <button onclick="showBookModal(${book.id})" class="flex items-center gap-2 text-slate-400 hover:text-slate-300 transition-colors text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        目次に戻る
                    </button>
                    <div class="text-center flex-1">
                        <div class="text-xs text-slate-500">第${chapter.number}章</div>
                        <div class="text-sm text-slate-300 font-light">${chapter.title}</div>
                    </div>
                    <button onclick="closeBookPopup()" class="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-all">
                        ${icons.x}
                    </button>
                </div>
                
                <div class="flex-1 overflow-y-auto px-10 py-8">
                    <div class="max-w-3xl mx-auto space-y-6">
                        <h1 class="text-3xl font-light text-slate-100 leading-snug mb-8">
                            第${chapter.number}章: ${chapter.title}
                        </h1>
                        ${chapter.content.split('\n\n').map(paragraph => 
                            `<p class="text-slate-300 leading-relaxed text-base font-light">${paragraph.trim()}</p>`
                        ).join('')}
                    </div>
                </div>
                
                <div class="flex items-center justify-between px-10 py-6 border-t border-white/5 flex-shrink-0">
                    ${hasPrev ? `
                        <button onclick="readBookChapter(${book.id}, ${book.chapters[currentIndex - 1].number})" 
                            class="flex items-center gap-2 px-5 py-2.5 bg-white/5 hover:bg-white/10 text-slate-300 rounded-xl transition-all text-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                            前の章
                        </button>
                    ` : '<div></div>'}
                    
                    <div class="text-xs text-slate-500">
                        ${chapter.number} / ${book.chapters.length}
                    </div>
                    
                    ${hasNext ? `
                        <button onclick="readBookChapter(${book.id}, ${book.chapters[currentIndex + 1].number})" 
                            class="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-orange-400/80 to-amber-400/80 hover:from-orange-500/80 hover:to-amber-500/80 text-white rounded-xl transition-all text-sm shadow-lg shadow-orange-500/20">
                            次の章
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
                        </button>
                    ` : '<div></div>'}
                </div>
            </div>
        </div>
    `;
}

function viewArticleDetail(articleId) {
    state.selectedArticle = newsArticles.find(a => a.id === articleId);
    state.currentPage = 'article';
    state.showPopup = false;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    renderNav();
    renderContent();
    renderPopup();
}

function getRandomArticles(excludeId, count = 3) {
    const otherArticles = newsArticles.filter(a => a.id !== excludeId);
    const shuffled = otherArticles.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
}

function getSortedArticles() {
    let filtered = selectedCategory === 'all' 
        ? [...newsArticles] 
        : newsArticles.filter(a => a.category === selectedCategory);
    
    switch(sortOrder) {
        case 'newest':
            return filtered.sort((a, b) => new Date(b.date) - new Date(a.date));
        case 'oldest':
            return filtered.sort((a, b) => new Date(a.date) - new Date(b.date));
        default:
            return filtered;
    }
}

function changeSortOrder(order) {
    sortOrder = order;
    renderContent();
}

function changeCategory(category) {
    selectedCategory = category;
    renderContent();
}

function getCategories() {
    const categories = [...new Set(newsArticles.map(a => a.category))];
    return categories;
}

function checkURLParams() {
    const urlParams = new URLSearchParams(window.location.search);
    const articleId = urlParams.get('article');
    const bookId = urlParams.get('book');
    
    if (articleId) {
        const article = newsArticles.find(a => a.id === parseInt(articleId));
        if (article) {
            viewArticleDetail(parseInt(articleId));
        }
    } else if (bookId) {
        const book = researchBooks.find(b => b.id === parseInt(bookId));
        if (book) {
            showBookModal(parseInt(bookId));
        }
    }
}

function renderContent() {
    const main = document.getElementById('main-content');
    
    switch(state.currentPage) {
        case 'home':
            const sortedArticles = getSortedArticles();
            const categories = getCategories();
            main.innerHTML = `
                <div class="space-y-12 animate-fadeIn">
                    <div class="text-center space-y-4 py-12">
                        <h1 class="text-5xl font-extralight bg-gradient-to-r from-slate-300 via-orange-200 to-amber-300 bg-clip-text text-transparent leading-tight">
                            Neutral Eyes
                        </h1>
                        <p class="text-slate-500 text-sm font-light">中立的な視点で世界を見つめる</p>
                    </div>
                    
                    <div class="max-w-4xl mx-auto space-y-6">
                        <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                            <p class="text-slate-500 text-sm font-light">${sortedArticles.length}件の記事</p>
                            <div class="flex gap-2 flex-wrap">
                                <button onclick="changeSortOrder('newest')" class="px-4 py-2 rounded-xl text-xs transition-all font-light ${sortOrder === 'newest' ? 'bg-white/10 text-orange-300' : 'text-slate-500 hover:text-slate-400 hover:bg-white/5'}">
                                    新しい順
                                </button>
                                <button onclick="changeSortOrder('oldest')" class="px-4 py-2 rounded-xl text-xs transition-all font-light ${sortOrder === 'oldest' ? 'bg-white/10 text-orange-300' : 'text-slate-500 hover:text-slate-400 hover:bg-white/5'}">
                                    古い順
                                </button>
                            </div>
                        </div>
                        
                        <div class="flex gap-2 flex-wrap">
                            <button onclick="changeCategory('all')" class="px-4 py-2 rounded-xl text-xs transition-all font-light ${selectedCategory === 'all' ? 'bg-gradient-to-r from-orange-400/20 to-amber-400/20 text-orange-300 border border-orange-400/30' : 'bg-white/5 text-slate-500 hover:text-slate-400 hover:bg-white/10'}">
                                すべて
                            </button>
                            ${categories.map(cat => {
                                const article = newsArticles.find(a => a.category === cat);
                                return `
                                    <button onclick="changeCategory('${cat}')" class="px-4 py-2 rounded-xl text-xs transition-all font-light ${selectedCategory === cat ? `bg-gradient-to-r from-orange-400/20 to-amber-400/20 ${article.categoryText} border border-orange-400/30` : `${article.categoryColor} ${article.categoryText} hover:opacity-80`}">
                                        ${cat}
                                    </button>
                                `;
                            }).join('')}
                        </div>
                        
                        <div class="space-y-4">
                            ${sortedArticles.map(article => `
                                <div onclick="showArticlePopup(${article.id})" class="group cursor-pointer bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.04] rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden relative">
                                    ${article.audioUrl ? `
                                        <div class="absolute top-3 left-3 z-10 w-7 h-7 rounded-full bg-orange-400/20 backdrop-blur-sm border border-orange-400/30 flex items-center justify-center">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-400"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
                                        </div>
                                    ` : ''}
                                    <div class="p-5 flex gap-4">
                                        <img src="${article.image}" alt="${article.title}" class="w-28 h-28 object-cover rounded-xl flex-shrink-0 transition-transform duration-500 group-hover:scale-105">
                                        
                                        <div class="flex-1 flex flex-col justify-between min-w-0">
                                            <div class="space-y-2">
                                                <div class="flex items-center gap-2 flex-wrap">
                                                    <span class="px-2.5 py-1 ${article.categoryColor} backdrop-blur-sm rounded-lg text-xs ${article.categoryText} font-medium">
                                                        ${article.category}
                                                    </span>
                                                    <span class="text-xs text-slate-600">${article.date}</span>
                                                </div>
                                                
                                                <h3 class="font-medium text-slate-200 text-base leading-snug group-hover:text-orange-300 transition-colors duration-300 line-clamp-2">
                                                    ${article.title}
                                                </h3>
                                                
                                                <p class="text-slate-500 text-sm leading-relaxed line-clamp-2">
                                                    ${article.excerpt}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                </div>
            `;
            break;
        
        case 'bookshelf':
            main.innerHTML = `
                <div class="space-y-12 animate-fadeIn">
                    <div class="text-center space-y-3">
                        <h2 class="text-4xl font-extralight text-slate-200">調査本棚</h2>
                        <p class="text-slate-500 text-sm font-light">AIによる詳細な調査・分析レポート</p>
                    </div>
                    
                    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
                        ${researchBooks.map(book => {
                            const hasCover = book.cover;
                            return `
                            <div onclick="showBookModal(${book.id})" class="group cursor-pointer transition-all duration-500 hover:-translate-y-2">
                                <div class="w-full aspect-[3/4] rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 overflow-hidden relative">
                                    ${hasCover ? `
                                        <img src="./images/covers/${book.id}.jpg" alt="${book.title}" class="w-full h-full object-cover" onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='flex';">
                                    ` : ''}
                                    <div class="w-full h-full bg-gradient-to-br ${book.coverColor} flex flex-col items-center justify-center p-6 relative" style="${hasCover ? 'display:none;' : ''}">
                                        <div class="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                                        ${icons.book}
                                        <div class="text-center relative z-10">
                                            <h3 class="text-white font-medium text-base mb-1 leading-snug">${book.title}</h3>
                                            <p class="text-white/80 text-xs">${book.subtitle}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="mt-3 space-y-1 px-1">
                                    <p class="text-slate-300 text-sm font-light">${book.title}</p>
                                    <div class="flex items-center gap-3 text-xs text-slate-600">
                                        <span>${book.pages}文字</span>
                                        <span>•</span>
                                        <span>${book.date}</span>
                                    </div>
                                </div>
                            </div>
                        `}).join('')}
                    </div>
                </div>
            `;
            break;
            case 'about':
            main.innerHTML = `
                <div class="max-w-4xl mx-auto space-y-16 animate-fadeIn py-8">
                    <div class="text-center space-y-6">
                        <h2 class="text-5xl font-extralight text-slate-200 tracking-wide">About Leonia</h2>
                        <div class="w-20 h-px bg-gradient-to-r from-transparent via-orange-400/30 to-transparent mx-auto"></div>
                        <p class="text-slate-400 text-sm font-light">中立的な視点で、あなたの思考をサポートします</p>
                    </div>
                    
                    <div class="space-y-12">
                        <div class="bg-gradient-to-br from-white/[0.03] to-white/[0.01] backdrop-blur-sm rounded-3xl p-10 border border-white/5 space-y-6">
                            <div class="flex items-start gap-4">
                                <div class="flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400/20 to-amber-400/20 flex items-center justify-center border border-orange-400/10">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-400/60"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>
                                </div>
                                <div class="flex-1 space-y-4">
                                    <h3 class="text-2xl font-light text-slate-200">Leoniaとは</h3>
                                    <p class="text-slate-300 leading-relaxed font-light">
                                        Leoniaは、AIを活用した中立的な情報プラットフォームです。私たちは、あらゆる利権や圧力から独立した立場で、偏りのない情報をお届けすることを約束します。
                                    </p>
                                    <p class="text-slate-300 leading-relaxed font-light">
                                        ここでの目標はシンプルです。あなたが自分自身で考え、検証し、議論するための十分な知識と手法を提供すること。それだけです。
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="grid md:grid-cols-2 gap-6">
                            <div class="bg-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/5 hover:border-orange-400/20 transition-all duration-500 group space-y-4">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400/20 to-cyan-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400/60"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                                    </div>
                                    <h3 class="text-lg font-medium text-slate-200">独立性の保証</h3>
                                </div>
                                <p class="text-slate-400 leading-relaxed text-sm font-light">
                                    広告は一切導入しません。スポンサーの影響を受けることなく、純粋に中立的な情報提供に専念します。あなたに届く情報は、誰の利益でもなく、ただ事実だけを基にしています。
                                </p>
                            </div>

                            <div class="bg-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/5 hover:border-orange-400/20 transition-all duration-500 group space-y-4">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-400/20 to-pink-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-purple-400/60"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                                    </div>
                                    <h3 class="text-lg font-medium text-slate-200">広告ゼロの理由</h3>
                                </div>
                                <p class="text-slate-400 leading-relaxed text-sm font-light">
                                    広告収入に頼ると、どうしてもその影響を受けてしまいます。私たちは、完全に独立した情報提供を実現するため、広告に頼らないモデルを選択しました。
                                </p>
                            </div>

                            <div class="bg-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/5 hover:border-orange-400/20 transition-all duration-500 group space-y-4">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-green-400/20 to-emerald-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-green-400/60"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                    </div>
                                    <h3 class="text-lg font-medium text-slate-200">もう一つの選択肢</h3>
                                </div>
                                <p class="text-slate-400 leading-relaxed text-sm font-light">
                                    感情や私見のこもった人間的なメディアを否定するわけではありません。それらにも大切な価値があります。Leoniaは、あくまで「もう一つの選択肢」として、中立的な視点を提供します。
                                </p>
                            </div>

                            <div class="bg-white/[0.02] backdrop-blur-sm rounded-2xl p-8 border border-white/5 hover:border-orange-400/20 transition-all duration-500 group space-y-4">
                                <div class="flex items-center gap-3">
                                    <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400/20 to-amber-400/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-400/60"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                                    </div>
                                    <h3 class="text-lg font-medium text-slate-200">思考のパートナー</h3>
                                </div>
                                <p class="text-slate-400 leading-relaxed text-sm font-light">
                                    私たちの役割は、あなたに代わって考えることではありません。あなた自身が思考し、検証し、議論するための土台となる、正確で十分な情報を提供することです。
                                </p>
                            </div>
                        </div>

                        <div class="relative">
                            <div class="absolute inset-0 bg-gradient-to-r from-orange-950/10 via-transparent to-orange-950/10 rounded-3xl blur-xl"></div>
                            <div class="relative bg-gradient-to-br from-white/[0.04] to-white/[0.01] backdrop-blur-sm rounded-3xl p-10 border border-white/10 space-y-6">
                                <div class="text-center space-y-4">
                                    <div class="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-400/20 to-amber-400/20 border border-orange-400/20">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-orange-400/60"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
                                    </div>
                                    <h3 class="text-2xl font-light text-slate-200">Neutral Eyes</h3>
                                    <p class="text-slate-400 leading-relaxed font-light max-w-2xl mx-auto">
                                        中立的な視点で世界を見つめること。それは、あらゆる角度から物事を捉え、あなた自身の判断を支えるための基盤を提供することです。情報の向こう側にある真実に、少しでも近づけるように。
                                    </p>
                                </div>
                                
                                <div class="flex items-center justify-center gap-8 pt-6 flex-wrap">
                                    <div class="text-center space-y-1">
                                        <div class="text-3xl font-extralight text-orange-400/40">0</div>
                                        <p class="text-xs text-slate-500 font-light">広告</p>
                                    </div>
                                    <div class="w-px h-12 bg-white/5"></div>
                                    <div class="text-center space-y-1">
                                        <div class="text-3xl font-extralight text-orange-400/40">100%</div>
                                        <p class="text-xs text-slate-500 font-light">中立性</p>
                                    </div>
                                    <div class="w-px h-12 bg-white/5"></div>
                                    <div class="text-center space-y-1">
                                        <div class="text-3xl font-extralight text-orange-400/40">∞</div>
                                        <p class="text-xs text-slate-500 font-light">可能性</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="text-center space-y-4 pt-8">
                            <p class="text-slate-500 text-sm font-light leading-relaxed">
                                あなたの思考と判断を、Leoniaがサポートします。
                            </p>
                        </div>
                    </div>
                </div>
            `;
            break;
        
        case 'contact':
            main.innerHTML = `
                <div class="max-w-4xl mx-auto space-y-10 animate-fadeIn">
                    <h2 class="text-4xl font-extralight text-slate-200 text-center">Contact</h2>
                    
                    <div class="bg-white/[0.02] backdrop-blur-sm rounded-3xl p-10 border border-white/5 space-y-8">
                        <div class="text-center space-y-3">
                            <p class="text-slate-300 leading-relaxed font-light">
                                お問い合わせは以下のチャンネルからお気軽にどうぞ
                            </p>
                        </div>
                        
                        <div class="grid md:grid-cols-2 gap-8">
                            <div class="space-y-6">
                                <a href="https://smp15.simplex.im/a#qNivkZ9U791ACZXyEgmZ2y78iaRfPlf5ZWVr7A1BHUA" target="_blank" class="flex items-start gap-4 p-6 bg-white/[0.02] hover:bg-white/[0.04] rounded-2xl border border-white/5 hover:border-white/10 transition-all group">
                                    <div class="p-3 bg-gradient-to-br from-orange-400/20 to-amber-400/20 rounded-xl group-hover:from-orange-400/30 group-hover:to-amber-400/30 transition-all">
                                        ${icons.messageCircle}
                                    </div>
                                    <div class="flex-1">
                                        <h3 class="text-lg font-medium text-slate-200 mb-1">SimpleX Chat</h3>
                                        <p class="text-slate-400 text-sm font-light">メッセージ</p>
                                    </div>
                                </a>
                                
                                <a href="https://x.com/leonia301" target="_blank" class="flex items-start gap-4 p-6 bg-white/[0.02] hover:bg-white/[0.04] rounded-2xl border border-white/5 hover:border-white/10 transition-all group">
                                    <div class="p-3 bg-gradient-to-br from-slate-400/20 to-slate-500/20 rounded-xl group-hover:from-slate-400/30 group-hover:to-slate-500/30 transition-all">
                                        ${icons.xTwitter}
                                    </div>
                                    <div class="flex-1">
                                        <h3 class="text-lg font-medium text-slate-200 mb-1">X (Twitter)</h3>
                                        <p class="text-slate-400 text-sm font-light">@leonia301</p>
                                    </div>
                                </a>
                                
                                <a href="https://bsky.app/profile/leonia301.bsky.social" target="_blank" class="flex items-start gap-4 p-6 bg-white/[0.02] hover:bg-white/[0.04] rounded-2xl border border-white/5 hover:border-white/10 transition-all group">
                                    <div class="p-3 bg-gradient-to-br from-blue-400/20 to-cyan-400/20 rounded-xl group-hover:from-blue-400/30 group-hover:to-cyan-400/30 transition-all">
                                        ${icons.cloud}
                                    </div>
                                    <div class="flex-1">
                                        <h3 class="text-lg font-medium text-slate-200 mb-1">Bluesky</h3>
                                        <p class="text-slate-400 text-sm font-light">@leonia301.bsky.social</p>
                                    </div>
                                </a>
                            </div>
                            
                            <div class="flex flex-col items-center justify-center space-y-4 p-6 bg-white/[0.02] rounded-2xl border border-white/5">
                                <div class="text-center space-y-2">
                                    <h3 class="text-lg font-medium text-slate-200">SimpleX QRコード</h3>
                                    <p class="text-slate-400 text-xs font-light">スキャンして接続</p>
                                </div>
                                <img src="./images/simplex.jpg" alt="SimpleX QR Code" class="w-48 h-48 rounded-xl bg-white p-2" onerror="this.onerror=null; this.style.display='none'; this.nextElementSibling.style.display='flex';">
                                <div class="w-48 h-48 rounded-xl bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center" style="display:none;">
                                    <p class="text-slate-400 text-sm text-center px-4">QRコード画像を<br>準備中です</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            break;
        
        case 'article':
            if (!state.selectedArticle) {
                changePage('home');
                return;
            }
            const article = state.selectedArticle;
            const recommendedArticles = getRandomArticles(article.id);
            const hasAudio = article.audioUrl;
            
            if (hasAudio && currentAudioArticleId !== article.id) {
                initArticleAudioPlayer(article.id);
            }
            
            main.innerHTML = `
                <div class="max-w-4xl mx-auto space-y-8 animate-fadeIn">
                    <button onclick="changePage('home')" class="text-orange-400 hover:text-orange-300 flex items-center gap-2 text-sm transition-colors font-light">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
                        ホームに戻る
                    </button>
                    
                    <article class="bg-white/[0.02] backdrop-blur-sm rounded-3xl overflow-hidden border border-white/5">
                        <img src="${article.image}" alt="${article.title}" class="w-full h-64 sm:h-96 object-cover">
                        
                        <div class="p-6 sm:p-12 space-y-8">
                            <div class="space-y-4">
                                <div class="flex items-center gap-3">
                                    <span class="px-4 py-2 ${article.categoryColor} backdrop-blur-sm rounded-xl text-sm ${article.categoryText} font-medium border border-white/5">
                                        ${article.category}
                                    </span>
                                    <span class="text-slate-500 text-sm">${article.date}</span>
                                </div>
                                
                                <h1 class="text-2xl sm:text-4xl md:text-5xl font-light text-slate-100 leading-tight">${article.title}</h1>
                            </div>
                            
                            ${hasAudio ? `
                                <div class="bg-white/[0.02] rounded-xl p-4 space-y-3 border border-white/5">
                                    <div class="flex items-center gap-3">
                                        <div class="text-xs text-slate-500" id="audio-current-time">0:00</div>
                                        <input 
                                            type="range" 
                                            id="audio-progress"
                                            class="flex-1"
                                            value="0"
                                            max="100"
                                            oninput="setAudioProgress(this.value)"
                                        >
                                        <div class="text-xs text-slate-500" id="audio-duration">0:00</div>
                                    </div>
                                    
                                    <div class="flex items-center justify-center gap-2">
                                        <button onclick="seekAudio(-10)" class="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-all text-slate-400 hover:text-slate-300">
                                            ${icons.skipBack}
                                        </button>
                                        
                                        <button onclick="toggleAudioPlayPause()" id="audio-play-button" class="p-3 bg-gradient-to-r from-orange-400/70 to-amber-400/70 hover:from-orange-500/70 hover:to-amber-500/70 rounded-lg transition-all">
                                            ${icons.play}
                                        </button>
                                        
                                        <button onclick="seekAudio(10)" class="p-2 bg-white/5 hover:bg-white/10 rounded-lg transition-all text-slate-400 hover:text-slate-300">
                                            ${icons.skipForward}
                                        </button>
                                    </div>
                                </div>
                            ` : ''}
                            
                            <div id="article-summary" class="text-slate-200 text-lg leading-relaxed space-y-4">
                            </div>
                            
                            <div class="pt-8 border-t border-white/5 space-y-4">
                                <p class="text-slate-400 leading-relaxed text-sm font-light">
                                    この記事は、複数の信頼できる情報源から収集されたデータをもとに、AIによって中立的な視点で作成されています。
                                </p>
                                
                                <div class="flex gap-3 flex-wrap">
                                    <button onclick="toggleShareMenu('article')" class="flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-slate-300 rounded-xl transition-all backdrop-blur-sm">
                                        ${icons.share2}
                                        共有
                                    </button>
                                    ${state.shareMenu === 'article' ? `
                                        <div class="flex gap-2 items-center animate-fadeIn">
                                            <button onclick="shareArticle(${article.id}, 'twitter')" class="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all backdrop-blur-sm">
                                                ${icons.twitter}
                                            </button>
                                            <button onclick="shareArticle(${article.id}, 'copy')" class="p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all backdrop-blur-sm">
                                                ${icons.link2}
                                            </button>
                                        </div>
                                    ` : ''}
                                </div>
                            </div>
                        </div>
                    </article>
                    
                    ${recommendedArticles.length > 0 ? `
                        <div class="space-y-6 pt-8">
                            <h2 class="text-2xl font-light text-slate-200">おすすめの記事</h2>
                            <div class="grid md:grid-cols-3 gap-6">
                                ${recommendedArticles.map(rec => `
                                    <div onclick="viewArticleDetail(${rec.id})" class="group cursor-pointer bg-white/[0.02] backdrop-blur-sm hover:bg-white/[0.04] rounded-2xl border border-white/5 hover:border-white/10 transition-all duration-500 overflow-hidden">
                                        <img src="${rec.image}" alt="${rec.title}" class="w-full h-40 object-cover transition-transform duration-500 group-hover:scale-105">
                                        <div class="p-4 space-y-2">
                                            <span class="px-2.5 py-1 ${rec.categoryColor} backdrop-blur-sm rounded-lg text-xs ${rec.categoryText} font-medium inline-block">
                                                ${rec.category}
                                            </span>
                                            <h3 class="font-medium text-slate-200 text-sm leading-snug group-hover:text-orange-300 transition-colors duration-300 line-clamp-2">
                                                ${rec.title}
                                            </h3>
                                            <p class="text-slate-500 text-xs leading-relaxed line-clamp-2">
                                                ${rec.excerpt}
                                            </p>
                                        </div>
                                    </div>
                                `).join('')}
                            </div>
                        </div>
                    ` : ''}
                </div>
            `;
            
            setTimeout(() => {
                const summaryElement = document.getElementById('article-summary');
                if (summaryElement && article.summary) {
                    const formattedSummary = article.summary.replace(/\n/g, '<br>');
                    summaryElement.innerHTML = `<p class="text-slate-200 text-lg leading-relaxed font-light">${formattedSummary}</p>`;
                }
                if (hasAudio) {
                    updateAudioUI();
                }
            }, 0);
            break;
    }
}

renderNav();
Promise.all([loadArticles(), loadBooks()]).then(() => {
    checkURLParams();
});
