import {generateHeroSocials} from './generateHeroSocials.js';

function generateHero(data, socials) {

    if (!data) {
        return '';
    }

    const HTML = `<div class="info col-12">
                    <h3>${data.hi}</h3>
                    <h2>${data.iam}</h2>
                    <ul>
                        <span class="typed-text"></span><span class="cursor">&nbsp;</span>
                    </ul>
                    ${generateHeroSocials(socials)}
                </div>`;

    return HTML;
}

export { generateHero }