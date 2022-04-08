export class Employee {
    // constructor(_employee) {
    //     ({id: this.id, employee_name: this.fullName, employee_salary: this.salary, employee_age: this.age} = _employee);
    //     this.email = this.makeEmail();
    //     this.salary = this.getMonthlySalary();
    //     this.yearOfBirth = this.getYearOfDay();
    // }

    constructor(id, fullName, salary, age) {
        this.id = id;
        this.fullName = fullName;
        this.salary = salary;
        this.age = age;
        this.email = this.makeEmail();
        this.salary = this.getMonthlySalary();
        this.yearOfBirth = this.getYearOfDay();
    }

    makeEmail() {
        let firstLetter = this.fullName[0].toLowerCase();
        let lastName = this.fullName.split(' ')[1].toLowerCase();
        return `${firstLetter}.${lastName}@email.com`;
    }

    getMonthlySalary() {
        return (this.salary/12).toFixed(2);
    }

    getYearOfDay() {
        let today = new Date().getFullYear();
        return today - this.age
    }
}