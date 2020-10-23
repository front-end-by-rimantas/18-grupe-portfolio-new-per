// header import
// hero import
import { heroData } from './data/hero.js';
import { renderHero } from './components/hero/renderHero.js';
import { herotypeanim } from './utils/typeanimation.js';
// about import
// my skills import
// my resume import
import { resumeInfo } from './data/resumeInfo.js';
import { renderResume } from './components/resume/renderResume.js';
// counter import
// my service import
import { servicesData } from './data/services.js';
import { renderServices } from './components/services/renderServices.js';
//my portfolio import 
import {dataPortfolio} from '../js/data/dataPortfolio.js';
import {renderPortfolio} from '../js/components/portfolio/renderPortfolio.js';
// testimonial import
import { testimonialsData } from './data/testimonials.js';
import { renderTestimonials } from './components/testimonials/renderTestimonials.js';
import { carousel } from './utils/carousel.js';
// // latest blog import
import renderBlog from './renderBlog.js';
import blogData from './blogData.js';
//contact import

// header logic
// hero logic
renderHero(heroData);
herotypeanim(heroData);
// about logic
// my skills logic
// my resume logic
renderResume(resumeInfo);
// counter logic
// my service logic
renderServices(servicesData);
//my portfolio logic 
renderPortfolio(dataPortfolio);
// testimonial logic
renderTestimonials(testimonialsData);
carousel();
// latest blog logic
renderBlog(blogData);
// contact logic



