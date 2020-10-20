// header import
// hero import
import { herotypeanim } from './utils/typeanimation.js';
// about import
// my skills import
// my resume import
import resumeInfo from './data/resumeInfo.js';
import { renderResume } from './components/services/renderResume.js';
// counter import
// my service import
import { servicesData } from './data/services.js';
import { renderServices } from './components/services/renderServices.js';
//my portfolio import 
// testimonial import
import { carousel } from './utils/carousel.js';
// // latest blog import
import renderBlog from './renderBlog.js';
import blogData from './blogData.js';
//contact import

// header logic
// hero logic
herotypeanim();
// about logic
// my skills logic
// my resume logic
renderResume(resumeInfo);
// counter logic
// my service logic
renderServices(servicesData);
//my portfolio logic 
// testimonial logic
carousel();
// latest blog logic
renderBlog(blogData);
// contact logic



