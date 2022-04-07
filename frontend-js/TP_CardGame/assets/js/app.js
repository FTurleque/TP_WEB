import * as html from './htmlElements.js'
import {db_cardGame} from './fetchCard.js'

const url_cards = './assets/json/cardgame.json';
const columnName = document.getElementById('column_name');
const tbody = document.getElementById('card_info');
let col = true;

let cards = [];
cards = await db_cardGame(url_cards);

const getTheColumnName = (date) => {
    let cardId = html.createThWithClass('col_name', 'id');
    let cardName = html.createThWithClass('col_name', 'name');
    let level = html.createThWithClass('col_name', 'level');
    let description = html.createThWithClass('col_name', 'description');
    let power = html.createThWithClass('col_name', 'power');
    let attack = html.createThWithClass('col_name', 'attack');
    let armor = html.createThWithClass('col_name', 'armor');
    let damage = html.createThWithClass('col_name', 'damage');
    let mitigation = html.createThWithClass('col_name', 'mitigation');
    let played = html.createThWithClass('col_name', 'played');
    let victory = html.createThWithClass('col_name', 'victory');
    let defeat = html.createThWithClass('col_name', 'defeat');
    let draw = html.createThWithClass('col_name', 'draw');
    columnName.appendChild(cardId);
    columnName.appendChild(cardName);
    columnName.appendChild(level);
    columnName.appendChild(description);
    columnName.appendChild(power);
    columnName.appendChild(attack);
    columnName.appendChild(armor);
    columnName.appendChild(damage);
    columnName.appendChild(mitigation);
    columnName.appendChild(played);
    columnName.appendChild(victory);
    columnName.appendChild(defeat);
    columnName.appendChild(draw);
}

const getCardInfo = (data) => {
    let tr = html.createTrWithId(`${data.id}`);
    let cardId = html.createTdWithClass('id', data.id);
    let cardName = html.createTdWithClass('name', data.name);
    let level = html.createTdWithClass('level', data.level);
    let description = html.createTdWithClass('description', data.description);
    let power = html.createTdWithClass('power', data.power);
    let attack = html.createTdWithClass('attack', data.attack);
    let armor = html.createTdWithClass('armor', data.armor);
    let damage = html.createTdWithClass('damage', data.damage);
    let mitigation = html.createTdWithClass('mitigation', data.mitigation);
    let played = html.createTdWithClass('played', data.played);
    let victory = html.createTdWithClass('victory', data.victory);
    let defeat = html.createTdWithClass('defeat', data.defeat);
    let draw = html.createTdWithClass('draw', data.draw);
    tr.appendChild(cardId);
    tr.appendChild(cardName);
    tr.appendChild(level);
    tr.appendChild(description);
    tr.appendChild(power);
    tr.appendChild(attack);
    tr.appendChild(armor);
    tr.appendChild(damage);
    tr.appendChild(mitigation);
    tr.appendChild(played);
    tr.appendChild(victory);
    tr.appendChild(defeat);
    tr.appendChild(draw);
    tbody.appendChild(tr);
}

cards.forEach(card => {
    if (col) {
        getTheColumnName(card);
        col = false
    }
    getCardInfo(card);
});