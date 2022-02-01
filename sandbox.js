const sliderList = document.querySelector('.slider-list');
const sliderPhotos = document.querySelectorAll('.slider-list img');

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let PhotoPos = 1;
const size = sliderPhotos[0].clientWidth;

sliderList.style.transform = 'translateX(' + (-size * PhotoPos) + 'px)';

//right and left directions



nextButton.addEventListener('click', () => {
    if(PhotoPos >= sliderPhotos.length - 1) return;
    sliderList.style.transition = "transform 0.4s ease-in-out"
    PhotoPos++
    sliderList.style.transform = 'translateX(' + (-size * PhotoPos) + 'px)';
})

prevButton.addEventListener('click', () => {
    if(PhotoPos <= 0) return;
    sliderList.style.transition = "transform 0.4s ease-in-out"
    PhotoPos--
    sliderList.style.transform = 'translateX(' + (-size * PhotoPos) + 'px)';
})

sliderList.addEventListener('transitionend', () => {
    if(sliderPhotos[PhotoPos].id === "lastOne"){
        sliderList.style.transition = 'none'
        PhotoPos = sliderPhotos.length - 2;
        sliderList.style.transform = 'translateX(' + (-size * PhotoPos) + 'px)';
    }

    if(sliderPhotos[PhotoPos].id === "firstOne"){
        sliderList.style.transition = 'none'
        PhotoPos = sliderPhotos.length - PhotoPos;
        sliderList.style.transform = 'translateX(' + (-size * PhotoPos) + 'px)';
    }
})


setInterval(() =>{
    sliderList.style.transition = "transform 0.4s ease-in-out"
    PhotoPos++
    sliderList.style.transform = 'translateX(' + (-size * PhotoPos) + 'px)';
}, 2400)