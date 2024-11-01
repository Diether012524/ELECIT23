
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


let currentIndex = 0;
const images = document.querySelectorAll('.slider-image'); 

document.querySelector('.position-absolute.start-0').addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateSlider();
});

document.querySelector('.position-absolute.end-0').addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateSlider();
});

function updateSlider() {
    images.forEach((img, index) => {
        img.style.display = (index === currentIndex) ? 'block' : 'none';
    });
}


updateSlider();