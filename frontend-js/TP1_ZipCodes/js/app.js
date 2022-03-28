const CITIES_URL = 'https://raw.githubusercontent.com/ARFP/TP_WEB/serie_1/frontend-js/TP1_ZipCodes/zipcodes.json';
const form = document.getElementById('#form');
// const inputPostal = document.getElementById('#city_name');
const responsePostal = document.getElementById('#result_search');
// const postalCode = new RegExp('^[1-9]$');
const dataPostalCodes = document.getElementById('#postal_code');

function getCityInfo(url) {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let responseList = createUlWithClass('container_data');
        for (let city of data) {
            console.log(city.nomCommune);
            let optionResults = createOptionWithValue('results');
        }
    })
}

// form.addEventListener('submit', (e) => {
//     e.preventDefault();

//     getCityInfo(CITIES_URL)
// })
getCityInfo(CITIES_URL);

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

let createOptionWithValue = function(value) {
    let option = document.createElement('option');
    option.setAttribute('value=', value);
    return option;
}
