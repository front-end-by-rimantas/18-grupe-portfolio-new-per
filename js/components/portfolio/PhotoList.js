class PhotoList {
    constructor(params){
        this.DOM = params.DOM;
        this.data = params.data;
        this.imgPath = params.imgPath;
        this.defaultImg = params.defaultImg;

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
            
            HTML += `<div class="item ${item.size === 2 ? 'cell-2' : ''} ${item.size === 3 ? 'cell-3' : ''}">
                        <img src="${this.imgPath + item.photo}" alt="${item.title}">
                    </div>`;
        }

        return HTML;
    }

    render(){
        this.DOM.innerHTML = this.generateHTML();

        this.photosDOM = this.DOM.querySelectorAll('.item');
    }
}

export {PhotoList}