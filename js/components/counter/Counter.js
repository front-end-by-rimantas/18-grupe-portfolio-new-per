class Counter {
    constructor(params) {
        this.selector = params.selector;
        this.data = params.data;
        
        this.DOM = null;
        
        this.init();
    }

    init(){
        if(!this.isValidSelector()){
            return;
        }
        this.render();
    }

    isValidSelector(){
        const DOM = document.querySelector(this.selector);
        if(DOM){
            this.DOM = DOM;
            return true;
        }
        return false;
    }

    generateHTML(){
        let HTML = '';
        for(let item of this.data){
            HTML += `<div class="item col-3 col-md-6 col-sm-12">
                    <i class="${item.icon}"></i>
                    <div class="numbers">${item.number}</div>
                    <p>${item.text}</p>
                </div>`;
        }
        
        return HTML;
    }
    
    render(){
        this.DOM.innerHTML = this.generateHTML();
        
    }

}

export { Counter }