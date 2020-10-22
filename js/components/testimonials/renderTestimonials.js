import { renderSingleTestimonial } from "./renderSingleTestimonial.js";

function renderTestimonials(data) {
    let HTML = '';
    const testimonialDOM = document.querySelector(data.selector);

    for(let review of data.reviews){
        HTML += renderSingleTestimonial(review);
    }
    
    return testimonialDOM.innerHTML = HTML;
    
}

export { renderTestimonials }