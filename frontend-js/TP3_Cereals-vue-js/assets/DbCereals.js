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
    }

    static async cerealToDeleted(cerealToRemove) {
        let tmp = await this.getCereals()
        tmp.filter(cereal => cereal.id != cerealToRemove.id)
        console.log(tmp)
    }
}

export { DbCereals }