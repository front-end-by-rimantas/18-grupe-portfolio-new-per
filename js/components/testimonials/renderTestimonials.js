import { renderSingleTestimonial } from "./renderSingleTestimonial.js";

function renderTestimonials(data) {
    let HTML = '';
    const testimonialDOM = document.querySelector(data.selector);

    for(let review of data.reviews){
        HTML += renderSingleTestimonial(review);
    }
    
    let dotHTML = '';
 
    const total = data.reviews.length;

        dotHTML = `<button class="dot activeBar"></button>`
        dotHTML += `<button class="dot"></button>`.repeat(total - 1);
        
    return testimonialDOM.innerHTML = `<div class="review-track">
                                        ${HTML}
                                    </div>
                                    <div class="slideButtons col-12">
                                    ${dotHTML}
                                    </div>`;
                                    
    
}

export { renderTestimonials }