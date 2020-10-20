function generateHeroSocials(socials) {
    
    let socialsHTML = '';
    const totalSoc = socials.length;

    for(let i = 0; i < totalSoc; i++){
        const socGenerate = socials[i];
        console.log(socGenerate);
        socialsHTML += `<a href="#"><i class="${socGenerate.icon}"></i></a>`;
    }
 
    return `<div class="socials">
                ${socialsHTML}
            </div>`;
}

export { generateHeroSocials }