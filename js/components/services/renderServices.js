import { generateSingleService } from "./generateSingleService.js";

function renderServices(data){

    let HTML = '';
    const servicesDOM = document.querySelector(data.selector);
    const servicesCount = data.services.length;

    for (let i = 0; i < servicesCount; i++){
        const service = data.services[i];
        HTML += generateSingleService(service);
    }

    if (HTML === ''){
        console.error('Error: nera nei vienos veikiancios paslaugos');
        return;
    }

    return servicesDOM.innerHTML = HTML;
}

export {renderServices}