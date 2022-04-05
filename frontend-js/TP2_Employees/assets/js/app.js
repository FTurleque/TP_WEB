import * as html from './createHTMLelement.js'
import {db_employees} from './fetchAPI.js'

const url_employees = './assets/json/employees.json';
const columnName = document.getElementById('column_name');
const tbody = document.getElementById('employee_info');

let employees = [];
employees = await db_employees(url_employees);
console.log(employees);


const getEmployeeInfo = (data) => {
    let today = new Date().getFullYear();
    let tr = html.createTrWithClass(`${data.id}`);
    let tdEmployeeId = html.createTdWithClass('employeeId', data.id);
    let tdFullName = html.createTdWithClass('fullName', data.employee_name);
    let tdEmail = html.createTdWithClass('email', emailCreation(data.employee_name) + '@email.com');
    let tdSalary = html.createTdWithClass('salary', `${(data.employee_salary/12).toFixed(2)} €`);
    let tdYearOfBirth = html.createTdWithClass('birthdate', (today - data.employee_age));
    let tdActions = html.createTdWithClass('action');
    let btns = html.createDivWithClass('btns');
    let duplicateEmployee = html.createButtonWithClass('duplicate btn', 'Duplicate');
    let deleteEmployee = html.createButtonWithClass('delete btn', 'Delete');
    let deleteImg = html.createImgWithClassAndUrl('deleteImg', './assets/css/delete.png');
    let duplicateImg = html.createImgWithClassAndUrl('deleteImg', './assets/css/duplicate.png');
    tdActions.appendChild(btns)
    btns.appendChild(duplicateEmployee);
    btns.appendChild(deleteEmployee);
    deleteEmployee.appendChild(deleteImg);
    duplicateEmployee.appendChild(duplicateImg);
    tr.appendChild(tdEmployeeId);
    tr.appendChild(tdFullName);
    tr.appendChild(tdEmail);
    tr.appendChild(tdSalary);
    tr.appendChild(tdYearOfBirth);
    tr.appendChild(tdActions);
    tbody.appendChild(tr);
}

const emailCreation = (fullName) => {
    let names = fullName.split(' ');
    let fistName = names[0].toLowerCase();
    let lastName = names[1].toLowerCase();
    return fistName[0] + '.' + lastName;
}

const getTheColumnName = () => {
    let employeeId = html.createThWithClass('col_name', 'EID');
    let fullName = html.createThWithClass('col_name', 'Full Name');
    let email = html.createThWithClass('col_name', 'Email');
    let salary = html.createThWithClass('col_name', 'Monthly salary');
    let yearOfBirth = html.createThWithClass('col_name', 'Year of birth');
    let actions = html.createThWithClass('col_name', 'Actions');
    let btn = html.createButtonWithClass('sort btn', );
    salary.appendChild(btn);
    columnName.appendChild(employeeId);
    columnName.appendChild(fullName);
    columnName.appendChild(email);
    columnName.appendChild(salary);
    columnName.appendChild(yearOfBirth);
    columnName.appendChild(actions);
}

employees.forEach(employee => {
    if (employee.id === 1) {
        getTheColumnName();
        getEmployeeInfo(employee);
    } else {
        getEmployeeInfo(employee);
    }
});

document.querySelectorAll('.duplicate').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        let newRow = employees[e.path[3].id - 1];
        newRow.id = employees.length + 1;
        employees.push(newRow);
        
        getEmployeeInfo(newRow);
    })
});

document.querySelectorAll('.delete').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        document.getElementById(e.path[3].id).remove();
        console.log('Tatatata');
    })
});