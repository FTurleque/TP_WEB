import * as html from './createHTMLelement.js'
import {db_employees} from './fetchAPI.js'

const url_employees = './assets/json/employees.json';
const columnName = document.getElementById('column_name');
const tbody = document.getElementById('employee_info');

let employees = await db_employees(url_employees);
console.log(employees);

const getEmployeeInfo = (data) => {
    let tr = html.createTrWithClass(`${data.id}`);
    let tdEmployeeId = html.createTdWithClass('employeeId');
    let tdFullName = html.createTdWithClass('fullName');
    let tdEmail = html.createTdWithClass('email');
    let tdSalary = html.createTdWithClass('salary');
    let tdYearOfBirth = html.createTdWithClass('birthdate');
    let tdActions = html.createTdWithClass('action');
    
    let buttons = html.createDivWithClass('buttons');
    let duplicateEmployee = html.createButtonWithClass('duplicate btn');
    let deleteEmployee = html.createButtonWithClass('delete btn');
    let deleteImg = html.createImgWithClassAndUrl('deleteImg', './assets/css/delete.png');
    let duplicateImg = html.createImgWithClassAndUrl('deleteImg', './assets/css/duplicate.png');
    duplicateEmployee.textContent = 'Duplicate';
    deleteEmployee.textContent = 'Delete';
    tdActions.appendChild(duplicateEmployee);
    tdActions.appendChild(deleteEmployee);
    deleteEmployee.appendChild(deleteImg);
    duplicateEmployee.appendChild(duplicateImg);

    tdEmployeeId.textContent = data.id;
    tdFullName.textContent = data.employee_name;
    tdEmail.textContent = 'Email';
    tdSalary.textContent = `${data.employee_salary} €`;
    tdYearOfBirth.textContent = 'Year of birth';
    tr.appendChild(tdEmployeeId);
    tr.appendChild(tdFullName);
    tr.appendChild(tdEmail);
    tr.appendChild(tdSalary);
    tr.appendChild(tdYearOfBirth);
    tr.appendChild(tdActions);
    tbody.appendChild(tr);
}

const getTheColumnName = () => {
    let employeeId = html.createThWithClass('col_name',);
    let fullName = html.createThWithClass('col_name');
    let email = html.createThWithClass('col_name');
    let salary = html.createThWithClass('col_name');
    let yearOfBirth = html.createThWithClass('col_name');
    let actions = html.createThWithClass('col_name');
    employeeId.textContent = 'EID';
    fullName.textContent = 'Full Name';
    email.textContent = 'Email';
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

employees.forEach(employee => {
    if (employee.id === 1) {
        getTheColumnName();
        getEmployeeInfo(employee);
    } else {
        getEmployeeInfo(employee);
    }
});

