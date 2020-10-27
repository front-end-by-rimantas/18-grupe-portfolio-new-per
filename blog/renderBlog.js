import blogData from '../js/blogData.js';
import renderSingleBlog from './renderSingleBlog.js';
function renderBlog(blogData) {
    const numberBlog = blogData.length;
    for (let i = 0; i < numberBlog; i++) {
        const singleBlog = blogData[i];
        const HTML = renderSingleBlog(singleBlog);
        const blogDOM = document.querySelector(`.blog`);
        blogDOM.innerHTML += HTML;
    }
};
export default renderBlog;

