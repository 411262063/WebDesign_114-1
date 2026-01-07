document.addEventListener("DOMContentLoaded", function() {
    
    const logoBtn = document.querySelector('#logoBtn');
    if (logoBtn) {
        logoBtn.addEventListener('click', () => {
            window.location.href = './index.html';
        });
    }
    
    const homeBtn = document.querySelector('#homeBtn');
    if (homeBtn) {
        homeBtn.addEventListener('click', () => {
            window.location.href = './index.html';
        });
    }
    
    const menuBtn = document.querySelector('#menuBtn');
    const fullscreenMenu = document.querySelector('#menuWindow');

    if (menuBtn && fullscreenMenu) {
        menuBtn.addEventListener('click', () => {
            //toggle->有就移除 沒有就加上
            fullscreenMenu.classList.toggle('show');
        });
    }
    
    if (fullscreenMenu) {
        fullscreenMenu.addEventListener('click', (e) => {
            if (e.target === fullscreenMenu) {
                fullscreenMenu.classList.remove('show');
            }
        });
    }
});