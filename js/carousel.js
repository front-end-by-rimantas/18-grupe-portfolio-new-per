const track = document.querySelector('.review');
const slides = Array.from(track.children);
// console.log(slides);
const dotsNav = document.querySelector('.nav-comments-box');
const dots = Array.from(dotsNav.children);
// console.log(dots);

const slideHeight = slides[0].getBoundingClientRect().width;

// console.log(slideHeight);

const setSlidePosition = (slide, index) => {
    slide.style.left = slideHeight * index + 'px';
};

slides.forEach(setSlidePosition);



// const current = (track, slides) => {
//     const nextSlide = slides.nextElementSibling;
//     track.style.transform = 'translateX(-' + slide.style.left + ')';
//     slides.classList.remove('current-review');
//     nextSlide.classList.add('current-review');
//     console.log(nextSlide);
// }

// nextButton.addEventListener('click', e => {
//     current(track, currentSlide, nextSlide);
// })

dotsNav.addEventListener('click', e => {
    const targetDot = e.target.closest('button');
    // console.log(targetDot);
    if (!targetDot) return;
   
    const currentDot = dotsNav.querySelector('.activeBar');
    const targetIndex = dots.findIndex(dot => dot === targetDot);
    const targetSlide = slides[targetIndex];
    const nextSlide = targetSlide.nextElementSibling;
    targetSlide.classList.remove('is-hidden');
    nextSlide.classList.add('is-hidden');
    // console.log(nextSlide);
    // moveToSlide(track, currentSlide, targetSlide);
    
    // if (targetIndex != 0){
    //     targetSlide.classList.remove('is-hidden');
    // }
    
    track.style.transform = 'translateX(-' + nextSlide.style.left + ')';
    currentDot.classList.remove('activeBar');
    targetDot.classList.add('activeBar');
    
});




