            const slideshowItems = document.querySelectorAll('.slideshow-item');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            let currentIndex = 0;
    
            function showSlide(index) {
                slideshowItems.forEach(item => item.style.display = 'none');
                slideshowItems[index].style.display = 'block';
            }
    
            function showPrevSlide() {
                currentIndex = (currentIndex - 1 + slideshowItems.length) % slideshowItems.length;
                showSlide(currentIndex);
            }
    
            function showNextSlide() {
                currentIndex = (currentIndex + 1) % slideshowItems.length;
                showSlide(currentIndex);
            }
    
            prevBtn.addEventListener('click', showPrevSlide);
            nextBtn.addEventListener('click', showNextSlide);
    
            // Show the first slide initially
            showSlide(currentIndex);