import * as html from './createHTMLelement.js'
import {db_employees} from './fetchAPI.js'

const url_employees = './assets/json/employees.json';
const columnName = document.getElementById('column_name');

let employees = await db_employees(url_employees);
console.log(employees);


employees.forEach(employee => {
    if (employee.id === 1) {
        let employeeId = html.createThWithClass('col_name');
        let fullName = html.createThWithClass('col_name');
        let email = html.createThWithClass('col_name');
        let salary = html.createThWithClass('col_name');
        let yearOfBirth = html.createThWithClass('col_name');
        let actions = html.createThWithClass('col_name');
        employeeId.textContent = 'EID';
        fullName.textContent = 'Full Name';
        email.textContent = 'Emain';
        salary.textContent = 'Monthly salary';
        yearOfBirth.textContent = 'Year of birth';
        actions.textContent = 'Actions';
        columnName.appendChild(employeeId);
        columnName.appendChild(fullName);
        columnName.appendChild(email);
        columnName.appendChild(salary);
        columnName.appendChild(yearOfBirth);
        columnName.appendChild(actions);
    }
});