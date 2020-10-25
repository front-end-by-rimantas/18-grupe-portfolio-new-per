class Filter {
    constructor(params) {
        this.DOM = params.DOM;
        this.data = params.data;
        this.PARENT = params.PARENT;

        this.init();
    }

    init() {
        this.render();
    }

    generateHTML(){
        let HTML ='';
        
        const tags = [];
        for(let item of this.data){
            tags.push(item.tags);
        }
        
        const uniqTags = [];

        for(let i = 0; i < tags.length; i++){
            console.log(tags[i]);
            if (!uniqTags.includes(tags[i])) {
                uniqTags.push(tags[i]);
            }
        }

        console.log(uniqTags);

        HTML += `<div class="tag">All</div>`;
        for (let tag of uniqTags){
            HTML += `<div class="tag">${tag}</div>`;
        }

        return HTML;
    }

    render(){
        this.DOM.innerHTML = this.generateHTML();
    }

}

export { Filter }