import blogAuthor from '../js/blogAuthor.js';

function renderSingleBlog(data) {
    return `<a class='blog-link1' href='${data.linksubject}'>${data.subject}</a>
            <img src='${data.image}' alt='Nuotrauka${data.id}'>       
            <h4><a href='${data.linktitle}'>${data.title}</a></h4>
            <p>${data.text}</p>
            <div class='author'> ${blogAuthor(data.id, data.author)}</div>`;
}

export default renderSingleBlog;

