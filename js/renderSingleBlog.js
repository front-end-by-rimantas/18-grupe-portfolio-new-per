import blogAuthor from '../js/blogAuthor.js';

function renderSingleBlog(data) {
    let t = data.text;
    if (t.length > 80) {
        t = t.slice(0, 80);
    }

    return `<a class='blog-link1' href='${data.linksubject}'>${data.subject}</a>
            <img src='${data.image}' alt='Nuotrauka${data.id}'>       
            <h4><a href='${data.linktitle}'>${data.title}</a></h4>
            <p>${t}</p>
            <div class='author'> ${blogAuthor(data.id, data.author)}</div>`;
}

export default renderSingleBlog;

