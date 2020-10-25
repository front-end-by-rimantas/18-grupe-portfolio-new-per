class Filter {
    constructor(params) {
        this.DOM = params.DOM;
        this.data = params.data;
        this.PARENT = params.PARENT;

        this.init();
    }

    init() {
        this.render();
        this.addEvents();
    }

    generateHTML() {
        let HTML = '';

        const tags = [];
        for (let item of this.data) {
            tags.push(item.tags);
        }

        const uniqTags = [];
        for (let i = 0; i < tags.length; i++) {
            if (!uniqTags.includes(tags[i])) {
                uniqTags.push(tags[i]);
            }
        }

        uniqTags.sort();

        HTML += `<div class="tag active">All</div>`;
        for (let tag of uniqTags) {
            HTML += `<div class="tag">${tag}</div>`;
        }

        return HTML;
    }

    render() {
        this.DOM.innerHTML = this.generateHTML();
    }

    addEvents() {
        const tagsDOM = this.DOM.querySelectorAll('.tag');

        const tag = document.querySelector('.filter');
    
        tag.addEventListener('click', (e) => {
            const targetTag = e.target.closest('.tag');
            if (!targetTag) return;
        
            const currentTag = tag.querySelector('.active');

            currentTag.classList.remove('active');
            targetTag.classList.add('active');

        })

        for (let tag of tagsDOM) {
            tag.addEventListener('click', (e) => {
                this.PARENT.contentUpdate(tag.innerText);

            })
        }
    }
}

export { Filter }