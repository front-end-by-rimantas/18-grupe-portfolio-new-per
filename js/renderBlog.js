import blogData from './blogData.js';
import renderSingleBlog from './renderSingleBlog.js';

function renderBlog(blogData) {
    const numberBlog = blogData.length;
    for (let i = 0; i < numberBlog; i++) {
        const singleBlog = blogData[i];
        const HTML = renderSingleBlog(singleBlog);
        const selector = `.blog${singleBlog.id}`;
        console.log(selector);
        const blogDOM = document.querySelector(`.blog${singleBlog.id}`);
        blogDOM.innerHTML = HTML;
    }
};
export default renderBlog;

