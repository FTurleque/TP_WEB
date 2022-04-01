let createTrWithClass = (className) => {
    let tr = document.createElement('tr');
    tr.setAttribute('id', className);
    return tr;
}

let createThWithClass = (className, txt) => {
    let th = document.createElement('th');
    th.setAttribute('class', className);
    th.textContent = txt;
    return th;
}

let createTdWithClass =  (className, txt) => {
    let td = document.createElement('td');
    td.setAttribute('class', className);
    td.textContent = txt;
    return td;
}

let createButtonWithClass = (className, txt) => {
    let btn = document.createElement('button');
    btn.setAttribute('class', className);
    btn.setAttribute('type', 'button');
    btn.textContent = txt;
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
