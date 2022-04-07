let createTrWithId = (className) => {
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

export {
    createTrWithId,
    createThWithClass,
    createTdWithClass
}