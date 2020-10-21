function renderPortfolio (data) {
    let HTML = '';
    let filterHTML = '';
    let galleryHTML = '';

    let uniqueTags = [];
    for ( let i=0; i<data.length; i++ ){
        const tags = data[i].tags;
        for ( let t=0; t<tags.length; t++ ) {
            if ( uniqueTags.indexOf(tags[t].toLowerCase()) === -1 ) {
                uniqueTags.push(tags[t].toLowerCase());
            }
        }
    }

//generuot filtra
filterHTML = `<div class="item active">All</div>`;
for ( let i=0; i<uniqueTags.length; i++ ) {
    filterHTML += `<div class="item">${uniqueTags[i]}</div>`;
}
//generate darbus
for ( let i=0; i<data.length; i++ ) {
    const work = data[i];
    
            galleryHTML += `<div class="item ${work.size === 2 ? 'size-2' : ''}"
            data-tags="${work.tags}">
            <img src="./img/portfolio/${work.photo}"
                alt="${work.title}">
            <div class="hover">
                <a href="${work.link ? work.link : '#'}">${work.title}</a>
            </div>
        </div>`;
        }
                HTML += `<div class="gallery">
                                <div class="filter">
                                    ${filterHTML}
                                </div>
                                <div class="list">
                                    ${galleryHTML}
                                </div>
                            </div>`;
 const DOMgallery = document.querySelector('#portfolio_gallery');
    DOMgallery.innerHTML = HTML;

    // prikabinti event listenerius, kad galeti filtruoti darbus
    const filters = DOMgallery.querySelectorAll('.filter > .item');
    for (let i=0; i<filters.length; i++) {
        const element = filters[i];
        element.addEventListener('click', filterGallery);
    };
    return;
}

function filterGallery( event ) {
    document.querySelector('.filter > .item.active').classList.remove('active');
    event.target.classList.add('active');

    const filterTag = event.target.textContent.toLowerCase();
    const works = document.querySelectorAll('.gallery > .list > .item');
    if ( filterTag === 'all' ) {
        for (let i=0; i<works.length; i++) {
            works[i].classList.remove('hide');
        }
        return;
    }

    for (let i=0; i<works.length; i++) {
        const work = works[i];
        const hasTags = work.dataset.tags.toLowerCase().split(',').indexOf(filterTag);
        if ( hasTags >= 0 ) {
            work.classList.remove('hide');
        } else {
            work.classList.add('hide');
        }
    }
    
}
export {renderPortfolio};