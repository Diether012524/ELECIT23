let currentIndex = 0;
const images = document.querySelectorAll('.slider-image'); 


const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');


prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateSlider();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateSlider();
});


function updateSlider() {
    images.forEach((img, index) => {
        img.style.display = (index === currentIndex) ? 'block' : 'none';
    });
}


updateSlider();
