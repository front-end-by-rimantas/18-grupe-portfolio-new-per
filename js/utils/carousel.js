function carousel() {
    const track = document.querySelector('.carousel-list');
    const slides = Array.from(track.children);
    const dotsNav = document.querySelector('.slideButtons');
    const dots = Array.from(dotsNav.children);

    // const slideWidth = slides[0].getBoundingClientRect().width;

    const slideWidth = 100 * 4;
    const setSlidePosition = (slide, index) => {
        slide.style.left = slideWidth * index + '%';
    };

    slides.forEach(setSlidePosition);

    dotsNav.addEventListener('click', e => {
        const targetDot = e.target.closest('button');
        if (!targetDot) return;

        const currentDot = dotsNav.querySelector('.activeBar');

        const targetIndex = dots.findIndex(dot => dot === targetDot);
        const targetSlide = slides[targetIndex];
        const diff = -100 / 4 * targetIndex;

        track.style.transform = `translateX(${diff}%)`;
        currentDot.classList.remove('activeBar');
        targetDot.classList.add('activeBar');

    });
}

export { carousel };
