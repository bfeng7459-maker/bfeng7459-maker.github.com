// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    initSearch();
    initInteractions();
    initScrollEffects();
});

// 导航功能
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // 滚动时更新导航状态
    window.addEventListener('scroll', () => {
        const sections = document.querySelectorAll('section[id]');
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - 100;
            const sectionId = section.getAttribute('id');
            const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);

            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (navLink) navLink.classList.add('active');
            }
        });
    });
}

// 搜索功能
function initSearch() {
    const searchInput = document.querySelector('.hero-search input');
    const searchButton = document.querySelector('.hero-search button');

    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    function performSearch() {
        const query = searchInput.value.trim();
        if (query) {
            alert(`搜索功能演示：您搜索了 "${query}"\n在实际应用中，这将跳转到搜索结果页面。`);
        }
    }
}

// 交互功能
function initInteractions() {
    // 标签点击
    const tags = document.querySelectorAll('.hero-tags span');
    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            const searchTerm = tag.textContent;
            const searchInput = document.querySelector('.hero-search input');
            searchInput.value = searchTerm;
            searchInput.focus();
        });
    });

    // 关注按钮
    const followButtons = document.querySelectorAll('.btn-follow');
    followButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            if (this.textContent === '+ 关注') {
                this.textContent = '已关注';
                this.style.background = 'var(--gradient)';
                this.style.borderColor = 'transparent';
            } else {
                this.textContent = '+ 关注';
                this.style.background = 'transparent';
                this.style.borderColor = 'var(--border-color)';
            }
        });
    });

    // 登录/注册按钮
    const loginBtn = document.querySelector('.btn-login');
    const signupBtn = document.querySelector('.btn-signup');

    loginBtn.addEventListener('click', () => {
        alert('登录功能演示\n在实际应用中，这将打开登录对话框或跳转到登录页面。');
    });

    signupBtn.addEventListener('click', () => {
        alert('注册功能演示\n在实际应用中，这将打开注册对话框或跳转到注册页面。');
    });

    // 文章卡片点击
    const postCards = document.querySelectorAll('.post-card');
    postCards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('h3').textContent;
            alert(`文章详情：${title}\n在实际应用中，这将跳转到文章详情页面。`);
        });
        card.style.cursor = 'pointer';
    });

    // 教程卡片点击
    const tutorialCards = document.querySelectorAll('.tutorial-card');
    tutorialCards.forEach(card => {
        card.addEventListener('click', () => {
            const title = card.querySelector('h3').textContent;
            alert(`教程详情：${title}\n在实际应用中，这将跳转到教程学习页面。`);
        });
        card.style.cursor = 'pointer';
    });
}

// 滚动效果
function initScrollEffects() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // 观察所有卡片元素
    const cards = document.querySelectorAll('.post-card, .tutorial-card, .developer-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(card);
    });
}

// 添加平滑滚动
document.documentElement.style.scrollBehavior = 'smooth';

// 控制台欢迎信息
console.log('%c🚀 DevHub - 开发者交流社区', 'font-size: 20px; font-weight: bold; color: #6366f1;');
console.log('%c欢迎来到 DevHub！在这里可以分享技术、交流经验、共同成长。', 'font-size: 14px; color: #94a3b8;');
