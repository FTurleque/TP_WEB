import { Cereal } from './Cereal.js'
class DbCereals 
{
    static db = []
    
    // Je récupère les données de l'api en privé
    static async #getCerealJson() {
        try {
            let response = await fetch('https://arfp.github.io/tp/web/frontend/cereals/cereals.json')
            if(response.ok) {
                let cerealJson = await response.json()
                return cerealJson.data
            }
        } catch (error) {
            console.log(`Error : ${error}`)
        }
    }

    // J'initie l'import des données par l'api
    static async getCereals() {
        let json = await DbCereals.#getCerealJson()
        this.db = json.map(cereal => new Cereal(cereal))
        return this.db
    }

    static cerealToDeleted(cerealToRemove) {
        this.db = this.db.filter(cereal => cereal.id != cerealToRemove.id)
        return this.db
    }

    static filteredByName(searchName) {
        if (searchName.length > 0) {
            return this.db.filter((cereal) => cereal.name.toLowerCase().includes(searchName.toLowerCase())) 
        } else {
            return this.db
        }
        
    }

    static filteredByNutriscore() {
        
    }
}

export { DbCereals }