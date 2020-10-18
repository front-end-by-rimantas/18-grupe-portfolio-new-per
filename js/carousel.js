const track = document.querySelector('.review');
const track1 = document.querySelector('.client-review');
const slides = Array.from(track.children);
// console.log(slides[2]);
const dotsNav = document.querySelector('.slideButtons');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

// const move = (track, currentSlide, nextSlide) => {
    
// };

// move();

dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');
    if (!targetDot) return;

    const currentDot = dotsNav.querySelector('.activeBar');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];
    
    const currentSlide = track.querySelector('.is-visible');
    const nextSlide = currentSlide.nextElementSibling;
    currentSlide.classList.remove('is-visible');
    nextSlide.classList.add('is-visible');

    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentDot.classList.remove('activeBar');
    targetDot.classList.add('activeBar');

});
