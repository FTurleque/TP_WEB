let createTrWithClass = (className, id) => {
    let tr = document.createElement('tr');
    tr.setAttribute('id', className);
    return tr;
}

let createThWithClass = (className) => {
    let th = document.createElement('th');
    th.setAttribute('class', className);
    return th;
}

let createTdWithClass =  (className) => {
    let td = document.createElement('td');
    td.setAttribute('class', className);
    return td;
}

let createButtonWithClass = (className) => {
    let btn = document.createElement('button');
    btn.setAttribute('class', className);
    btn.setAttribute('type', 'button');
    btn.textContent = `${className}`;
    return btn;
}

let createImgWithClassAndUrl = (className, url) => {
    let img = document.createElement('img');
    img.setAttribute('class', className);
    img.src = url;
    return img;
}

let createDivWithClass =  (className) => {
    let div = document.createElement('div');
    div.setAttribute('class', className);
    return div;
}


export {
    createTrWithClass,
    createThWithClass,
    createTdWithClass,
    createButtonWithClass,
    createImgWithClassAndUrl,
    createDivWithClass
}
