import { renderSingleTestimonial } from "./renderSingleTestimonial.js";

function renderTestimonials(data) {
    let HTML = '';
    const testimonialDOM = document.querySelector(data.selector);

    for(let review of data.reviews){
        HTML += renderSingleTestimonial(review, data);
    }
    
    let dotHTML = '';
    const total = data.reviews.length;
    const listWidth = 100 * total;    

        dotHTML = `<button class="dot activeBar"></button>`
        dotHTML += `<button class="dot"></button>`.repeat(total - 1);
        
    return testimonialDOM.innerHTML = `<div class="carousel">
                                            <div class="content">
                                                <div class="list" style="width: ${listWidth}%;">
                                                    ${HTML}
                                                </div>
                                            </div>
                                            <div class="slideButtons col-12">
                                                ${dotHTML}
                                            </div>
                                        </div>`;
}

export { renderTestimonials }