
    document.addEventListener("DOMContentLoaded", function() {
        const prevBtn = document.getElementById("prevBtn");
        const nextBtn = document.getElementById("nextBtn");
        const slides = document.querySelectorAll(".slideshow-item");

        let currentSlide = 0;

        //hides the non selected slides
        function showSlide(index) {

            slides.forEach((slide, idx) => {
                if (idx === index) {
                    slide.style.display = "block";
                } else {
                    slide.style.display = "none";
                }
            });
        }
        // when clicked will set the index for the slide to be shown 
        prevBtn.addEventListener("click", function() {
            currentSlide = (currentSlide - 1 + slides.length) % slides.length;
            showSlide(currentSlide);
        });

        nextBtn.addEventListener("click", function() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        });
    });
