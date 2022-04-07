export class Employee {
    constructor(id, fullName, yearSalary, age) {
        this.id = id;
        this.fullName = fullName;
        this.email = emailCreation(fullName);
        this.salary = getMonthlySalary(yearSalary);
        this.yearOfBirth = getYearOfBirth(age);
    }
}

function emailCreation(fullName) {
    let names = fullName.split(' ');
    let fistName = names[0].toLowerCase();
    let lastName = names[1].toLowerCase();
    return fistName[0] + '.' + lastName;
}

function getYearOfBirth(age) {
    let today = new Date().getFullYear();
    return today - age;
}

function getMonthlySalary(salary) {
    return (salary/12).toFixed(2)
}