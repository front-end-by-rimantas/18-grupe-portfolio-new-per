import { Filter } from './Filter.js';
import { PhotoList } from './PhotoList.js';

class Gallery {
    constructor(params) {
        this.selector = params.selector;
        this.data = params.data;
        this.imgPath = params.imgPath;
        this.defaultImg = params.defaultImg;

        this.DOM = null;
        this.filterObj = null;
        this.photoListObj = null;

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return;
        }
        this.render();
    }


    isValidSelector() {
        const DOM = document.querySelector(this.selector);  // false -> DOM = null
        if (DOM) {
            this.DOM = DOM;
            return true;
        }
        return false;
    }

    isValidGallery() {
        return true;
    }

    generateHTML() {
        if (!this.isValidGallery()) {
            return '';
        }

        return `<div class="filter">
                    FILTER
                </div>
                <div class="list">
                    LIST
                </div>`;
    }

    render() {
        this.DOM.innerHTML = this.generateHTML();

        const filterDOM = this.DOM.querySelector('.filter');
        const listDOM = this.DOM.querySelector('.list');

        this.filterObj = new Filter({
            DOM: filterDOM,
            data: this.data,
            PARENT: this
        });

        this.photoListObj = new PhotoList({
            DOM: listDOM,
            data: this.data,
            imgPath: this.imgPath,
            defaultImg: this.defaultImg
        });
    }
}

export { Gallery }