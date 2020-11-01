function navBarScroll() {

    const header = document.querySelector('header');
    const navLink = document.querySelectorAll('.nav-a');

    if(scrollY === 0){
        navLink[0].classList.add('navLinkActive');
    }

    addEventListener("scroll", () => {

        let top = scrollY;
        for (let i = 0; i < navLink.length; i++) {
            if (top >= 100) {
                header.classList.add('hidde');
            } else {
                header.classList.remove('hidde');
            }

            if (top > 500) {
                header.classList.add('active');
                navLink[i].classList.add('nav-b')
            } else {
                header.classList.remove('active');
                navLink[i].classList.remove('nav-b')
            }
        };
    });
}

export {navBarScroll}
