import renderSingleBlog from './renderSingleBlog.js';
function blogAuthor(nr, data) {
    return `<img class='foto' src='${data.portrait}' alt='Nuotraukele${nr}'>
            <div class='author-name'>
            BY: ${data.name}</div>
            <div class='blog-date'> ${data.date}</div>`

}
export default blogAuthor;
