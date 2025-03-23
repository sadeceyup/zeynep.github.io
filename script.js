document.addEventListener('DOMContentLoaded', () => {
    const heartContainer = document.querySelector('.heart-container');
    
    function createHeart() {
        const heart = document.createElement('div');
        heart.className = 'heart';
        
        // Rastgele yatay pozisyon
        heart.style.left = Math.random() * 100 + 'vw';
        // Başlangıçta ekranın altında
        heart.style.bottom = '-20px';
        
        // Rastgele animasyon süresi (4-8 saniye arası)
        const animationDuration = Math.random() * 4 + 4;
        heart.style.animationDuration = animationDuration + 's';
        
        heartContainer.appendChild(heart);
        
        // Kalp animasyonu bittiğinde temizle
        setTimeout(() => {
            heart.remove();
        }, animationDuration * 1000);
    }

    // Her 200ms'de bir yeni kalp oluştur
    setInterval(createHeart, 200);
});