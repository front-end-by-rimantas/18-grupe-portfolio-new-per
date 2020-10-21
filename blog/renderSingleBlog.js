import blogAuthor from './blogAuthor.js';

function renderSingleBlog(data) {
    return `<div class='col-12'>
            <h2>${data.subject}</h2>
            <img src='.${data.image}' alt='Nuotrauka${data.id}'>       
            <h4>${data.title}</h4>
            <p>${data.text}</p>
            <div class='author'> ${blogAuthor(data.id, data.author)}</div>
            </div>`;
}

export default renderSingleBlog;

