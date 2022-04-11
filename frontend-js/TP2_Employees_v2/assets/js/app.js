import { db_employees } from './modules/employeeApi.js';
import { Employee } from './modules/Employee.js';
import { DisplayRow } from './modules/Display.js';

const employeeURL = 'https://arfp.github.io/tp/web/frontend/employees/employees.json';
let employeeList = [];

const diplay = new DisplayRow();

let employees = await db_employees(employeeURL);
employees.forEach(emp => {
    console.log(emp);
    const employee = new Employee(emp.id, emp.employee_name, emp.employee_salary, emp.employee_age);
    employeeList.push(employee);
});

employeeList.forEach(emp => {
    diplay.getEmployeeInfo(emp);
});

export function getEvent(e) {
    if (e.currentTarget.outerText == 'Delete') {
        delete employeeList[parseInt(e.path[3].className) - 1];
        document.getElementById('employee_info').innerHTML = '';
        employeeList.forEach(emp => {
            diplay.getEmployeeInfo(emp);
        });
    } else if (e.currentTarget.outerText == 'Duplicate') {
        let duplicateRow = employeeList[parseInt(e.path[3].className) - 1];
        let lastEmployeeList = employeeList.length - 1;
        let lastEmployeeListID = employeeList[lastEmployeeList].id;
        const newEmployee = new Employee(lastEmployeeListID + 1, duplicateRow.fullName, duplicateRow.salary * 12, duplicateRow.age)
        employeeList.push(newEmployee);
        document.getElementById('employee_info').innerHTML = '';
        employeeList.forEach(emp => {
            diplay.getEmployeeInfo(emp);
        });
    }
}