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

    static cerealToDeleted(_cerealToRemove) {
        this.db = this.db.filter(cereal => cereal.id != _cerealToRemove.id)
        return this.db
    }

    static filteredByName(_searchName) {
        if (_searchName.length > 0) {
            return this.db.filter((cereal) => cereal.name.toLowerCase().includes(_searchName.toLowerCase())) 
        } else {
            return this.db
        }
        
    }

    static filteredByNutriscore(_nutriscores) {
        if(_nutriscores.length > 0){
            let newCerealsArray = []
            _nutriscores.forEach(nutriscore => {
                console.log(nutriscore)
                this.db.filter(cereal => {
                    if(cereal.nutriscore.toLowerCase().includes(nutriscore)) {
                        newCerealsArray.push(cereal)
                    }
                })
            });
            console.log(newCerealsArray.length)
            return newCerealsArray
        } else {
            return this.db
        }
    }

    static filteredByCategorie(_categorie) {
        if(_categorie === 'sans-sucre') {
            return this.db.filter(cereal => cereal.sugars < 1)
        }

        if(_categorie === 'pauvre-en-sel') {
            return this.db.filter(cereal => cereal.sodium < 50)
        }

        if(_categorie === 'boost') {
            return this.db.filter(cereal => cereal.vitamins >= 25 && cereal.fiber >= 10)
        } else {
            return this.db
        }
    }
}

export { DbCereals }