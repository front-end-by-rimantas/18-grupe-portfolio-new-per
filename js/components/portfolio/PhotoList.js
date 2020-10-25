class PhotoList {
    constructor(params){
        this.DOM = params.DOM;
        this.data = params.data;
        this.imgPath = params.imgPath;
        this.defaultImg = params.defaultImg;
        this.tags = params.data.tags;

        this.photosDOM = null;

        this.init();
        
    }

    init(){
        this.render();
    }

    generateHTML(){
        let HTML = '';
        const defaultImg = this.imgPath + this.defaultImg;
        
        for(let item of this.data){
            HTML += `<div class="item ${item.size === 2 ? 'cell-2' : ''}${item.size === 3 ? 'cell-3' : ''}">
                        <img src="${this.imgPath + item.photo}" alt="${item.title}">
                        <div class="portfolio-hover">
                            <div class="cap">
                                <h6>${item.title}</h6>
                                <span class="icon">
                                    <a href="#">
                                        <span class="zmdi zmdi-link"></span>
                                    </a>
                                </span>
                                <span class="icon link">
                                    <a href="#">
                                        <span class="zmdi zmdi-gps-dot"></span>
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>`;
        }

        return HTML;
    }

    update(tag) {
        tag = tag.toLowerCase();

        for(let i = 0; i < this.data.length ; i++ ){
            if(tag === 'all') {
                this.photosDOM[i].classList.remove('hidden');
                continue;
            }

            if(this.data[i].tags.includes(tag)){
                this.photosDOM[i].classList.remove('hidden');
            } else {
                this.photosDOM[i].classList.add('hidden');
            }
        }
    }

    render(){
        this.DOM.innerHTML = this.generateHTML();

        this.photosDOM = this.DOM.querySelectorAll('.item');
    }
}

export {PhotoList}