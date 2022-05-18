import Employee from "./Employee.js"
class DbEmployees
{
    static async getEmployeesJson() {
        try {
            let response = await fetch('https://arfp.github.io/tp/web/frontend/employees/employees.json')
            if(response.ok) {
                let dbEmployeesData = await response.json()
                dbEmployeesData = dbEmployeesData.data
                return dbEmployeesData
            }
        } catch (error) {
            console.error(error)
        }
    }

    static async getEmployees() {
        let json = await DbEmployees.getEmployeesJson()
        // let result = []
        // for(let element of json) {
        //     result.push(new Employee(element))
        // }
        return json.map(element => new Employee(element))
    }
}

export default DbEmployees