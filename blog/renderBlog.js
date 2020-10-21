import blogData from '../js/blogData.js';
import renderSingleBlog from './renderSingleBlog.js';
function renderBlog(blogData) {
    const numberBlog = blogData.length;
    for (let i = 0; i < numberBlog; i++) {
        const singleBlog = blogData[i];
        const HTML = renderSingleBlog(singleBlog);
        // const selector = `.blog${singleBlog.id}`;
        // const blogAllDOM = document.querySelector(`.content-blog`)
        const blogDOM = document.querySelector(`.blog`);
        blogDOM.innerHTML = HTML;
        // blogAllDOM.innerHTML = HTML;
    }
};
export default renderBlog;

