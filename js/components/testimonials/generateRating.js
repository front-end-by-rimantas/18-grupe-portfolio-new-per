function generateRating(data) {

    let HTML = '';

    for(let stars of data.rating){
        HTML += `<i class="${stars}"></i>`
    }

    return HTML;
}

export { generateRating }