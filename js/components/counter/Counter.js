class Counter {
    constructor(params) {
        this.selector = params.selector;
        this.insertionPosition = params.insertionPosition;
        this.data = params.data;

        this.DOM = null;
        this.counterDOM = null;
        this.countersValueDOM = null;

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return;
        }
        this.render();
        this.addEvents();
        this.countAnimation();
    }

    isValidSelector() {
        const DOM = document.querySelector(this.selector);
        if (DOM) {
            this.DOM = DOM;
            return true;
        }
        return false;
    }

    generateHTML() {
        let HTML = '';
        for (let item of this.data) {
            HTML += `<div class="counterItem col-3 col-md-6 col-sm-12">
                        <i class="${item.icon}"></i>
                        <div class="number">0</div>
                        <p>${item.text}</p>
                    </div>`;
        }

        return HTML;
    }
    
    render() {
        this.DOM.insertAdjacentHTML(this.insertionPosition, this.generateHTML());
        this.counterDOM = this.DOM.querySelectorAll('.counterItem');
        this.countersValueDOM = this.DOM.querySelectorAll('.counterItem > .number');
    }
    
    countAnimation() {
        const screenBottomY = scrollY + innerHeight;
        for (let i = 0; i < this.data.length; i++) {
            const ach = this.counterDOM[i];
            if(ach.dataset.run){
                continue;
            }
            const achBottomY = ach.offsetParent.offsetTop + ach.offsetParent.offsetHeight;
            if (screenBottomY > achBottomY) {
                ach.dataset.run = true;
                
                let currentValue = 0;
                const final = this.data[i].number;
                const timeAmount = 3; //sekundes
                const fps = 24; 
                let step = 0;
                const totalStep = timeAmount * fps;
                
                const timer = setInterval(() => {
                    step++
                    currentValue = Math.ceil(final / totalStep * step);
                    this.countersValueDOM[i].innerText = currentValue;
                   
                    if(currentValue >= final){
                        clearInterval(timer);
                    }
                }, 1000 / fps)
            }  
        }
    }

    addEvents() {
        addEventListener('scroll', () => {
            this.countAnimation();
        })
    }
}

export { Counter }