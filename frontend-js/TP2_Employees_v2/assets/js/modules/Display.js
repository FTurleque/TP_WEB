// import { getEvent } from "../app.js";
import { Employee } from "./Employee.js"

export class DisplayRow {
    constructor(data) {
        this.employeeList = data;
    }

    createTrWithClass = (className) => {
        let tr = document.createElement('tr');
        tr.setAttribute('class', className);
        return tr;
    }
    
    createTdWithClass =  (name, className, txt) => {
        let td = document.createElement('td');
        td.setAttribute('name', name);
        td.setAttribute('class', className);
        td.textContent = txt;
        return td;
    }
    
    createButtonWithClass = (className, txt) => {
        let btn = document.createElement('button');
        btn.setAttribute('class', className);
        btn.setAttribute('type', 'button');
        btn.textContent = txt;
        btn.addEventListener('click', (e) => {
            this.getEvent(e);
        });
        return btn;
    }

    createImgWithClassAndUrl = (className, url) => {
        let img = document.createElement('img');
        img.setAttribute('class', className);
        img.src = url;
        return img;
    }
    
    createDivWithClass =  (className) => {
        let div = document.createElement('div');
        div.setAttribute('class', className);
        return div;
    }

    getEmployeeInfo = (data) => {
        let tr = this.createTrWithClass(`${data.id}`);
        let tdEmployeeId = this.createTdWithClass(`employeeId`, data.id, data.id);
        let tdFullName = this.createTdWithClass(`fullName`, data.id, data.fullName);
        let tdEmail = this.createTdWithClass(`email`, data.id, `${data.email}@email.com`);
        let tdSalary = this.createTdWithClass(`salary`, data.id, `${data.salary} €`);
        let tdYearOfBirth = this.createTdWithClass(`birthdate`, data.id, data.yearOfBirth);
        let tdActions = this.createTdWithClass(`action`, data.id);
        let btns = this.createDivWithClass(`btns ${data.id}`);
        let duplicateEmployee = this.createButtonWithClass('duplicate btn', 'Duplicate');
        let deleteEmployee = this.createButtonWithClass('delete btn', 'Delete');
        let deleteImg = this.createImgWithClassAndUrl('deleteImg', './assets/css/delete.png');
        let duplicateImg = this.createImgWithClassAndUrl('deleteImg', './assets/css/duplicate.png');
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
        document.getElementById('employee_info').appendChild(tr);
    }

    getEvent(e) {
        e.preventDefault();
        if (e.currentTarget.outerText == '^') {
            this.employeeList.sort(function(a,b){
                return a.salary - b.salary;
            })
        } else if (e.currentTarget.outerText == 'Delete') {
            delete this.employeeList[parseInt(e.path[3].className) - 1];
        } else if (e.currentTarget.outerText == 'Duplicate') {
            let duplicateRow = this.employeeList[parseInt(e.path[3].className) - 1];
            let lastEmployeeList = this.employeeList.length - 1;
            let lastEmployeeListID = this.employeeList[lastEmployeeList].id;
            const newEmployee = new Employee(lastEmployeeListID + 1, duplicateRow.fullName, duplicateRow.salary * 12, duplicateRow.age)
            this.employeeList.push(newEmployee);
        }  
        document.getElementById('employee_info').innerHTML = '';
        this.employeeList.forEach(emp => {
            this.getEmployeeInfo(emp);
        });
    }
}