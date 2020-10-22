function renderResume(info) {
    const maxLines = 6;
    let createdLines = 0;
    let HTMLright = '';
    let HTMLleft = '';
    console.log(info);

    for (let i = 0; i < info.length; i++) {
        if (createdLines === maxLines) {
            break;
        }
        const line = info[i];
        if (line.occupation === 'work') {

            HTMLright += `
                        <li class ="liRes">
                        <span>${line.line1}</span>
                        <h5 class="h5Res">${line.line2}</h5>
                        <h6>${line.line3}</h6>
                        </li>`;
        }
        else {
            HTMLleft += `
                        <li class ="liRes">
                        <span>${line.line1}</span>
                        <h5 class="h5Res">${line.line2}</h5>
                        <h6>${line.line3}</h6>
                        </li>`;

        }
        createdLines++;
    }
    document.querySelector('.leftRes').innerHTML = HTMLleft;
    document.querySelector('.rightRes').innerHTML = HTMLright;

}

export { renderResume };