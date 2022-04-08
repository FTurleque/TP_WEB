import * as html from './createHTMLelement.js'
import {db_employees} from './fetchAPI.js'
import { Employee } from './Employee.js';

const url_employees = './assets/json/employees.json';
const btn = document.getElementsByTagName('button');

const employees = await db_employees(url_employees);
let newEmployees = []


employees.forEach(emp => {
    const employee = new Employee(emp.id, emp.employee_name, emp.employee_salary, emp.employee_age);
    newEmployees.push(employee);
    html.getEmployeeInfo(employee);
});

const onclick = (e) => {
    if (document.querySelector('.duplicate')) {
        let emp = employees[e.path[3].id - 1];
        emp.id = employees.length + 1;
        const employee = new Employee(emp.id, emp.employee_name, emp.employee_salary, emp.employee_age);
        newEmployees.push(employee);
        document.getElementById('employee_info').innerHTML = '';
        newEmployees.forEach(emp => {
            html.getEmployeeInfo(emp);
        });

    } else if (document.querySelector('.delete')) {
        document.getElementById(e.path[3].id).remove();
    }
}

btn.addEventListener('submit', onclick)

// document.querySelectorAll('.duplicate').forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         e.preventDefault();
//         let emp = employees[e.path[3].id - 1];
//         emp.id = employees.length + 1;
//         const employee = new Employee(emp.id, emp.employee_name, emp.employee_salary, emp.employee_age);
//         newEmployees.push(employee);
//         document.getElementById('employee_info').innerHTML = '';
//         newEmployees.forEach(emp => {
//             html.getEmployeeInfo(emp);
//         });
//     })
// });

// document.querySelectorAll('.delete').forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         e.preventDefault();
//         document.getElementById(e.path[3].id).remove();
//         console.log('Tatatata');
//     })
// });