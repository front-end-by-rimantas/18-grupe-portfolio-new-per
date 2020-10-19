// header import
// hero import
// about import
import { servicesData } from './data/services.js';
import {renderServices} from './components/services/renderServices.js';
// testimonial import
import {carousel} from './utils/carousel.js';
// // latest blog import
// import renderBlog from './renderBlog.js';
// import blogData from './blogData.js';

// header logic
// hero logic
// about logic
// testimonial logic
// latest blog logic
// renderBlog(blogData);
renderServices(servicesData);
carousel();
