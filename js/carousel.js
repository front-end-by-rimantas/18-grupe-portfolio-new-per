const track = document.querySelector('.review');
const slides = Array.from(track.children);
// console.log(slides[0]);
const dotsNav = document.querySelector('.slideButtons');
const dots = Array.from(dotsNav.children);

const slideWidth = slides[0].getBoundingClientRect().width;

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};

slides.forEach(setSlidePosition);

function udpateSlide() {
    // const targetIndex = slides.findIndex(review => review === slides);
    // const targetSlide = slides[targetIndex];

    // console.log(targetIndex);
    for(let slide of slides) {
        slide.classList.remove('is-visible');
        slide.classList.add('is-hidden');
    // }
    // currentSlide.classList.remove('is-visible');
    // targetSlide.classList.add('is-visible');
};

dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');
    if (!targetDot) return;

    const currentDot = dotsNav.querySelector('.activeBar');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];

    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
    currentDot.classList.remove('activeBar');
    targetDot.classList.add('activeBar');

});
