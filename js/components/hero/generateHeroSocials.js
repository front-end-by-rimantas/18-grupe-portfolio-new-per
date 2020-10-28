/**
 * 
 * cia generateHeroSocials perduoda gautus duomenys is data->socials[array->{objektai}], reikia i socials arreju ilist kad issitraukt objektu parametrus(icon) naudojam for loop
 */
function generateHeroSocials(socials) {

    if (!socials) {
        return '';
    }

    let HTML = '';

    for (let i = 0; i < socials.length; i++) {

        HTML += `<a href="#"><i class="${socials[i].icon}"></i></a>`;
    }

    return `<div class="socials">
                ${HTML}
            </div>`;
}

export { generateHeroSocials }