




const sliderTrack = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slider-track img');
let currentIndex = 0;

function autoSlide() {
    currentIndex++;
    if (currentIndex >= slides.length) {
        currentIndex = 0;
    }
    sliderTrack.style.transform = `translateX(-${currentIndex * 100}%)`;
}

setInterval(autoSlide, 3000);

// (Optional for now – future dynamic features can be added here)
// The slider works automatically via CSS animation.
console.log("Zaman Medical Store Script Loaded");
