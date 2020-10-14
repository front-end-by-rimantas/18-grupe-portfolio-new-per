import blogData from './blogData.js';
import renderSingleBlog from './renderSingleBlog.js';

function renderBlog(blogData) {
    // console.log(blogData);
    const numberBlog = blogData.length;
    // console.log(numberBlog);
    let HTML = '';
    for (let i = 1; i <= numberBlog; i++) {
        const singleBlog = blogData[i];
        // console.log(singleBlog);
        HTML += renderSingleBlog(singleBlog);
        const blogDOM = document.querySelector('.content-blog');

        // perrasome reikiamo HTML elemento turini
        blogDOM.innerHTML = HTML;

    }

};


export default renderBlog;

