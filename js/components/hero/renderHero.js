import {generateHero} from './generateHero.js';

function renderHero(data){
    
    let HTML = '';
    const heroDOM = document.querySelector(data.selector);
    const heroCount = data.hero.length;

    for(let i = 0; i < heroCount; i++){
        const hero = data.hero[i];
        HTML += generateHero(hero, data.socials);
    }

    if(HTML === ''){
        console.error('Error: nera hero teksto.');
        return;
    }

    return heroDOM.innerHTML = HTML;

}

export {renderHero}