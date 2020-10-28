function generateSingleService(data){

    if(!data) {
        return '';
    }

    const HTML = `<div class="services-items mb-50 col-4 col-lg-6 col-sm-12">
                    <span class="${data.icon}"></span>
                    <h3>${data.title}</h3>
                    <p>${data.description}</p>
                    </div>`;
    
    return HTML;
}

export {generateSingleService}