document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('main-nav');

    if (toggleButton && navMenu) {
        // 監聽按鈕點擊事件，切換選單開關
        toggleButton.addEventListener('click', function() {
            navMenu.classList.toggle('open');
            
            // 變更按鈕圖示：漢堡線 (☰) 或 關閉 (✕)
            if (navMenu.classList.contains('open')) {
                toggleButton.textContent = '✕'; 
            } else {
                toggleButton.textContent = '☰'; 
            }
        });
        
        // 點擊導航連結後自動關閉選單，提升手機版 UX
        const navLinks = navMenu.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('open');
                toggleButton.textContent = '☰';
            });
        });
    }

    // --- Swiper 簡報與縮圖連動邏輯 ---
    if (document.querySelector('.project-slider')) {
        const swiperThumbs = new Swiper('.project-thumbs', {
            spaceBetween: 10,     // 縮圖之間的間距
            slidesPerView: 'auto', // 【關鍵改動】：設為 auto 才能配合 CSS 寬度擠在一起
            freeMode: true,
            watchSlidesProgress: true,
            centerInsufficientSlides: true, // 如果圖片很少，會自動居中，不會全部靠左
        });

        const swiperMain = new Swiper('.project-slider', {
            loop: true,
            spaceBetween: 10,
            keyboard: { enabled: true },
            thumbs: {
                swiper: swiperThumbs,
            },
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            observer: true,
            observeParents: true,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        });
    }
});