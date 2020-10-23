import {generateRating} from './generateRating.js';

function renderSingleTestimonial(data) {

    if(!data) {
        return '';
    }
    
    return `<div class="client-review">
                    <h4>${data.title}</h4>
                    <div class="rating">
                        ${generateRating(data)}
                    </div>
                    <p>${data.text}</p>
                    <h3>${data.fullName}</h3>
                    <h2>${data.role}</h2>
                </div>`;
}

export { renderSingleTestimonial }