const tbody = document.getElementById('employee_info');

const createTrWithClass = (className) => {
    let tr = document.createElement('tr');
    tr.setAttribute('id', className);
    return tr;
}

const createThWithClass = (className, txt) => {
    let th = document.createElement('th');
    th.setAttribute('class', className);
    th.textContent = txt;
    return th;
}

const createTdWithClass =  (className, txt) => {
    let td = document.createElement('td');
    td.setAttribute('class', className);
    td.textContent = txt;
    return td;
}

const createButtonWithClass = (className, txt) => {
    let btn = document.createElement('button');
    btn.setAttribute('class', className);
    btn.setAttribute('type', 'button');
    btn.textContent = txt;
    return btn;
}

const createImgWithClassAndUrl = (className, url) => {
    let img = document.createElement('img');
    img.setAttribute('class', className);
    img.src = url;
    return img;
}

const createDivWithClass =  (className) => {
    let div = document.createElement('div');
    div.setAttribute('class', className);
    return div;
}

const getEmployeeInfo = (data) => {
    let tr = createTrWithClass(`${data.id}`);
    let tdEmployeeId = createTdWithClass('employeeId', data.id);
    let tdFullName = createTdWithClass('fullName', data.fullName);
    let tdEmail = createTdWithClass('email', `${data.email}@email.com`);
    let tdSalary = createTdWithClass('salary', `${data.salary} €`);
    let tdYearOfBirth = createTdWithClass('birthdate', data.yearOfBirth);
    let tdActions = createTdWithClass('action');
    let btns = createDivWithClass('btns');
    let duplicateEmployee = createButtonWithClass('duplicate btn', 'Duplicate');
    let deleteEmployee = createButtonWithClass('delete btn', 'Delete');
    let deleteImg = createImgWithClassAndUrl('deleteImg', './assets/css/delete.png');
    let duplicateImg = createImgWithClassAndUrl('deleteImg', './assets/css/duplicate.png');
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


export {
    createTrWithClass,
    createThWithClass,
    createTdWithClass,
    createButtonWithClass,
    createImgWithClassAndUrl,
    createDivWithClass,
    getEmployeeInfo
}
