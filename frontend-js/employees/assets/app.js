import { Employee } from "./modules/Employee.js";
import { EmployeeApi } from "./modules/EmployeeApi.js";

const employeeApiURL = "https://arfp.github.io/tp/web/frontend/employees/employees.json"

let objectTest =  {
    id: 24,
    employee_name: "Fabienne Bouilloire",
    employee_salary: 27,
    employee_age: 61,
    profile_image: "",
    gender: "unknown",
    eyes: "none"
}

let employee = new Employee(objectTest);
console.log(employee);

// On initialise la classe qui gére l'API
let employeeApi = new EmployeeApi(employeeApiURL);

// On execute le fetch (qui est une promesse)
// et on récupére les employés qui seront stockés
// dans employeeApi.
employeeApi.fetchData();

// On utilise la methode fetchDone pour récupérer le
// Résultat de la promesse du fetch réalisé dans
// l'instance employeeApi.
employeeApi.fetchDone()
    .then(() => {
    // Dans ce block on est sûr d'avoir récupéré tous
    // les employé depuis l'API
    console.log(employeeApi.jsonEmployees);
    console.log(employeeApi.listEmployees);
    // addToHTML(employeeApi.listEmployees);
});

// // Exemple de création d'employé de zero
// // en utilisant la class Employee()
// let employeeTest = new Employee(100, "Rhona Davidson", 40, 327900);

// console.log(employeeTest);