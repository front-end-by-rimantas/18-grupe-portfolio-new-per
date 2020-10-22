import {renderAllContentHero} from './renderAllContentHero.js';

function renderHero(data){
    
    let HTML = '';
    const heroDOM = document.querySelector(data.selector);
        /**
         * renderAllContentHero funkcija gavo data - duomenis, ji poto perduodam duomenis kitoms funkcijoms
         */
        HTML = renderAllContentHero(data);

    if(HTML === ''){
        console.error('Error: nera hero teksto.');
        return;
    }

    return heroDOM.innerHTML = HTML;
}

export {renderHero}