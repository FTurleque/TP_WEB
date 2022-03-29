let createUlWithClass = function(className) {
    let ul = document.createElement('ul');
    ul.setAttribute('class', className);
    return ul;
}

let createLiWithClass = function(className) {
    let li = document.createElement('li');
    li.setAttribute('class', className);
    return li;
}

let createOptionWithValue = function(value, className) {
    let option = document.createElement('option');
    option.setAttribute('value', value);
    option.setAttribute('class', className);
    return option;
}

export {
    createUlWithClass, 
    createLiWithClass, 
    createOptionWithValue}