import {
    createUlWithClass, 
    createLiWithClass, 
    createOptionWithValue
} from './constructorHTML.js'

const CITIES_URL = './zipcodes.json';
const searchResult = document.getElementById('result_search');
const optionDatalist = document.getElementById('postal_code');
// const btn = document.getElementById('btn');

let getCityInfo = (tmp = null) => {
    fetch(CITIES_URL)
    .then(response => response.json())
    .then(data => {
        for (let city of data) {
            if (tmp === city.nomCommune || tmp === city.codePostal) {
                displayCityData(city);
            } else if (tmp == null) {
                let optionResultsCityName = createOptionWithValue(city.nomCommune, 'option');
                let optionResultsPostalCode = createOptionWithValue(city.codePostal, 'option');
                optionDatalist.appendChild(optionResultsCityName);
                optionDatalist.appendChild(optionResultsPostalCode);
            }
            
        }})}

getCityInfo();

let displayCityData = (city) => {
    let cityData = createUlWithClass(`${city.nomCommune}UL`);
    searchResult.appendChild(cityData);
    let cityName = createLiWithClass(city.nomCommune);
    cityName.innerHTML = `<strong>City name :</strong> ${city.nomCommune}`;
    searchResult.appendChild(cityName);
    let postalCode = createLiWithClass(city.codePostal);
    postalCode.innerHTML = `<strong>Postal code :</strong> ${city.codePostal}`;
    searchResult.appendChild(postalCode);
    let codeCommune = createLiWithClass(city.codeCommune);
    codeCommune.innerHTML = `<strong>Commune code :</strong> ${city.codeCommune}`;
    searchResult.appendChild(codeCommune);
    let libelleAcheminement = createLiWithClass(city.libelleAcheminement);
    libelleAcheminement.innerHTML = `<strong>Libelle acheminement :</strong> ${city.libelleAcheminement}`;
    searchResult.appendChild(libelleAcheminement);
}

function onInput(e) {
    searchResult.innerHTML = '';
    let inputValue = document.getElementById('city_name').value;
    getCityInfo(inputValue);
}

document.getElementById('city_name').addEventListener('input', onInput);


