const db_employees = async function(url) {
    try {
        let response = await fetch(url);
        if (response.ok) {
            let employees = await response.json();
            return employees.data;
    } else {
        console.error('Retour du serveur : ', response.status);
    }
    } catch (error) {
        console.log(error);
    }
}


export {db_employees}