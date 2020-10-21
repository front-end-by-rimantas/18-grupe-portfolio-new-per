/**
 * 
 * cia generateHero perduoda duomenis is data->hero, hero hi ir hero iam
 */
function generateHero(data) {

    if (!data) {
        return '';
    }

    const HTML = `<h3>${data.hi}</h3>
                    <h2>${data.iam}</h2>`;

    return HTML;
}

export { generateHero }