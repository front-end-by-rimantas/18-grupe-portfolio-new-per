function carousel(){
    const track = document.querySelector('.review-track');
    const slides = Array.from(track.children);
    const dotsNav = document.querySelector('.slideButtons');
    const dots = Array.from(dotsNav.children);
    
    const slideWidth = slides[0].getBoundingClientRect().width;
    
    const setSlidePosition = (slide, index) => {
        slide.style.left = slideWidth * index + 'px';
    };
    
    slides.forEach(setSlidePosition);
    
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
}

export {carousel};
