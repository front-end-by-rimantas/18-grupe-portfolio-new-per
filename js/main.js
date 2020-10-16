// header import
// hero import
// about import
import { servicesData } from './data/services.js';
import { renderServices } from './components/services/renderServices.js'
// // latest blog import
import renderBlog from './renderBlog.js';
import blogData from './blogData.js';

// header logic
// hero logic
// about logic
// latest blog logic
renderBlog(blogData);

renderServices(servicesData);
