import { db_employees } from './modules/employeeApi.js';
import { Employee } from './modules/Employee.js';
import { DisplayRow } from './modules/Display.js';

const employeeURL = 'https://arfp.github.io/tp/web/frontend/employees/employees.json';
let employeeList = [];

// const diplay = new DisplayRow();
const diplay = new DisplayRow(employeeList);
const salaryBtn = diplay.createButtonWithClass('sort', '^');
document.querySelector('.salary').appendChild(salaryBtn);

let employees = await db_employees(employeeURL);
employees.forEach(emp => {
    const employee = new Employee(emp.id, emp.employee_name, emp.employee_salary, emp.employee_age);
    employeeList.push(employee);
});

employeeList.forEach(emp => {
    diplay.getEmployeeInfo(emp);
});
