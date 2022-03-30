let createTrWithClass = (className) => {
    let tr = document.createElement('tr');
    tr.setAttribute('class', className);
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


export {
    createTrWithClass,
    createThWithClass,
    createTdWithClass,
    createButtonWithClass
}
