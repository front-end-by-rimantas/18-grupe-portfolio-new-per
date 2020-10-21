import { generateHero } from './generateHero.js';
import { generateHeroSocials } from './generateHeroSocials.js';
        /**
         * 
         * renderAllContentHero perduodam duomenis generateHero ir generateHeroSocials. 
         * generateHero paima is data - hero duomenys kuris turi objekta ir jame yra hi ir iam.
         * generateHeroSocials paima is data - socials arreju kuriame yra objektai
         */
function renderAllContentHero(data) {

    return `<div class="info col-12">
                ${generateHero(data.hero)}
                <ul>
                    <span class="typed-text"></span><span class="cursor">&nbsp;</span>
                </ul>
                ${generateHeroSocials(data.socials)}
            </div> `
}

export { renderAllContentHero }