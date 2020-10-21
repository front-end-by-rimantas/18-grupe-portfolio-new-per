import blogData from './blogData.js';
import renderSingleBlog from './renderSingleBlog.js';
function renderBlog(blogData) {
    let numberBlog = blogData.length;

    if (numberBlog > 3) {
        numberBlog = 3;
    }
    console.log(numberBlog);
    for (let i = 0; i < numberBlog; i++) {
        const singleBlog = blogData[i];
        const HTML = renderSingleBlog(singleBlog);
        // const selector = `.blog${singleBlog.id}`;
        // const blogAllDOM = document.querySelector(`.content-blog`)
        const blogDOM = document.querySelector(`.blog${singleBlog.id}`);
        blogDOM.innerHTML = HTML;
        // blogAllDOM.innerHTML = HTML;
    }
};
export default renderBlog;

