import blogData from './blogData.js';
import renderSingleBlog from './renderSingleBlog.js';

function renderBlog(blogData) {
    // console.log(blogData);
    const numberBlog = blogData.length;
    // console.log(numberBlog);
    let HTML = '';
    for (let i = 0; i < numberBlog; i++) {
        const singleBlog = blogData[i];
        // console.log(singleBlog.id);
        // console.log(singleBlog)
        HTML += renderSingleBlog(singleBlog);
        // console.log(HTML);
        const selector = '.blog' + singleBlog.id;
        // console.log(selector);

        const blogDOM = document.querySelector(selector);

        // perrasome reikiamo HTML elemento turini
        blogDOM.innerHTML = HTML;

    }

};


export default renderBlog;

