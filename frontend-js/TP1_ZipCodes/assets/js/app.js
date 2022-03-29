import {
    createUlWithClass, 
    createLiWithClass, 
    createOptionWithValue
} from './constructorHTML.js'

const CITIES_URL = './zipcodes.json';
const searchResult = document.getElementById('result_search');
const optionDatalist = document.getElementById('postal_code');
const btn = document.getElementById('btn');

function getCityInfo(tmp = null) {
    fetch(CITIES_URL)
    .then(response => response.json())
    .then(data => {
        let responseList = createUlWithClass('container_data');
        for (let city of data) {
            if (tmp === city.nomCommune) {
                let cityData = createUlWithClass(city.nomCommune);
                searchResult.appendChild(cityData);
                let postalCode = createLiWithClass(city.codePostal);
                postalCode.innerHTML = `<strong>Postal code :</strong> ${city.codePostal}`;
                searchResult.appendChild(postalCode);
                let codeCommune = createLiWithClass(city.codeCommune);
                codeCommune.innerHTML = `<strong>Commune code :</strong> ${city.codeCommune}`;
                searchResult.appendChild(codeCommune);
                let libelleAcheminement = createLiWithClass(city.libelleAcheminement);
                libelleAcheminement.innerHTML = `<strong>Libelle acheminement :</strong> ${city.libelleAcheminement}`;
                searchResult.appendChild(libelleAcheminement);
            } else if (tmp == null) {
                let optionResults = createOptionWithValue(city.nomCommune, 'option');
                optionDatalist.appendChild(optionResults);
            }
            
        }})}

getCityInfo();

function onInput(e) {
    searchResult.innerHTML = '';
    let inputValue = document.getElementById('city_name').value;
    getCityInfo(inputValue);
}

document.getElementById('city_name').addEventListener('input', onInput);


