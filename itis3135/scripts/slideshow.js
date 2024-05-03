
    document.addEventListener("DOMContentLoaded", function() {
        const prevBtn = document.getElementById("prevBtn");
        const nextBtn = document.getElementById("nextBtn");
        const slides = document.querySelectorAll(".slideshow-item");

        let currentSlide = 0;

        function showSlide(index) {
            slides.forEach((slide, idx) => {
                if (idx === index) {
                    slide.style.display = "block";
                } else {
                    slide.style.display = "none";
                }
            });
        }

        prevBtn.addEventListener("click", function() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        });

        nextBtn.addEventListener("click", function() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        });
    });
