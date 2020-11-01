function progressbar() {

    addEventListener('scroll', () => {

        const progressbarDOM = document.querySelectorAll('.barbar');
        const screenBottomY = scrollY + innerHeight;
        for (let i = 0; i < progressbarDOM.length; i++) {
            const ach = progressbarDOM[i];
            if (ach.dataset.run) {
                continue;
            }
            const achBottomY = ach.offsetParent.offsetParent.offsetTop + ach.offsetParent.offsetParent.offsetHeight;
           
            if (screenBottomY > achBottomY) {
                ach.dataset.run = true;
                progressbarDOM[i].classList.add('animate');
            }
        }
    })
}

export { progressbar }