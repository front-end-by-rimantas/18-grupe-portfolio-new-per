class Counter {
    constructor(params) {
        this.selector = params.selector;
        this.data = params.data;

        this.DOM = null;

        this.init();
    }

    init() {
        if (!this.isValidSelector()) {
            return;
        }
        this.render();
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
            HTML += `<div class="box col-3 col-md-6 col-sm-12">
                        <div class="item">
                            <i class="${item.icon}"></i>
                            <div class="numbers">${item.number}</div>
                            <p>${item.text}</p>
                        </div>
                    </div>`;
        }

        return HTML;
    }

    render() {
        this.DOM.innerHTML = this.generateHTML();

        // $('.number').each(function () {
        //     $(this).prop('Counter', 0).animate({
        //         Counter: $(this).text()
        //     }, {
        //         duration: 4000,
        //         easing: 'swing',
        //         step: function (now) {
        //             $(this).text(Math.ceil(now));
        //         }
        //     });
        // });
    }
}

export { Counter }