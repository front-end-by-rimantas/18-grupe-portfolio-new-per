import {generateRating} from './generateRating.js';

function renderSingleTestimonial(data, reviews) {

    if(!data) {
        return '';
    }

    const itemWidth = 100 / reviews.reviews.length;

    return `<div class="client-review" style="width: ${itemWidth}%;">
                <div class="space">
                    <h4>${data.title}</h4>
                    <div class="rating">
                        ${generateRating(data)}
                    </div>
                    <p>${data.text}</p>
                    <h3>${data.fullName}</h3>
                    <h2>${data.role}</h2>
                    </div>
                </div>`;
}

export { renderSingleTestimonial }