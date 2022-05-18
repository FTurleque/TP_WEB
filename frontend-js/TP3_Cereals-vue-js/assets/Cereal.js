class Cereal
{
    constructor(_cereal) {
        // On fait une copie du céréal
        Object.assign(this, _cereal)
        // On ajoute le nutriscore
        this.nutriscore = this.addNutriscore(_cereal)
    }

    addNutriscore(cereal) {
        if(cereal.rating > 80) {
            return 'A'
        }
        if(cereal.rating > 70) {
            return 'B'
        }
        if(cereal.rating > 55) {
            return 'C'
        }
        if(cereal.rating > 35) {
            return 'D'
        } else {
            return 'E'
        }
    }
}

export { Cereal }