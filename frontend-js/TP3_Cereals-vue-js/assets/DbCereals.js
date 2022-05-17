import { Cereal } from './Cereal.js'
class DbCereals 
{
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
        return json.map(cereal => new Cereal(cereal))
    }
}

export { DbCereals }