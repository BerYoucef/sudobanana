

let isDarkTheme = true;

function toggleTheme() {
    const body = document.body;
    const bananaIcon = document.getElementById('bananaIcon');
    
    if (isDarkTheme) {
        
        body.classList.add('light-theme');
        bananaIcon.textContent = '🍌';
        isDarkTheme = false;
    } else {
        
        body.classList.remove('light-theme');
        bananaIcon.textContent = '🍌'; 
        isDarkTheme = true;
    }

    
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.style.transform = 'scale(0.8) rotate(180deg)';
    
    setTimeout(() => {
        themeToggle.style.transform = 'scale(1) rotate(0deg)';
    }, 200);
}

function showPage(page) {
    console.log('Navigating to:', page);
    
}


document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-input');
    
    searchInput.addEventListener('focus', function() {
        this.parentElement.style.transform = 'scale(1.02)';
    });
    
    searchInput.addEventListener('blur', function() {
        this.parentElement.style.transform = 'scale(1)';
    });
});
    
