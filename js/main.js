// header import
import { nav } from './data/header.js';
import { header, navLink, headerImg } from './components/header/headerscroll.js';
import { renderHeader, renderNav } from './components/header/header.js';
// hero import
import { heroData } from './data/hero.js';
import { renderHero } from './components/hero/renderHero.js';
import { herotypeanim } from './utils/typeanimation.js';
// about import
// my skills import
import { progressbar } from './components/progressbar/progressbar.js';
// my resume import
import { resumeInfo } from './data/resumeInfo.js';
import { renderResume } from './components/resume/renderResume.js';
// counter import
import { dataCounter } from './data/counter.js';
import { Counter } from './components/counter/Counter.js';
// my service import
import { servicesData } from './data/services.js';
import { renderServices } from './components/services/renderServices.js';
//my portfolio import 
import { dataPortfolio } from '../js/data/portfolio.js';
import { Gallery } from './components/portfolio/Gallery.js';
// testimonial import
import { testimonialsData } from './data/testimonials.js';
import { renderTestimonials } from './components/testimonials/renderTestimonials.js';
import { carousel } from './utils/carousel.js';
// // latest blog import
import renderBlog from './renderBlog.js';
import blogData from './blogData.js';
//contact import

// header logic
// renderHeader();
// renderNav(nav);
// hero logic
renderHero(heroData);
herotypeanim(heroData);
// about logic
// my skills logic
progressbar();
// my resume logic
renderResume(resumeInfo);
// counter logic
new Counter(dataCounter);
// my service logic
renderServices(servicesData);
//my portfolio logic 
// renderPortfolio(dataPortfolio);
new Gallery(dataPortfolio);
// testimonial logic
renderTestimonials(testimonialsData);
carousel();
// latest blog logic
renderBlog(blogData);
// contact logic



