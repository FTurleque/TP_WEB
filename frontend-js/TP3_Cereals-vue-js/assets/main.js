import { DbCereals } from './DbCereals.js'

const app = {
    data() {
        return {
            cereals: [],
            searchName: ''
        }
    },
    methods: {
        cerealRemove(cerealToRemove) {
            this.cereals = this.cereals.filter(cereal => cereal.id != cerealToRemove.id)
        },
        searchByName() {
            console.log(event.target.value)
            this.searchName = event.target.value
        }
    },
    computed: {
        filteredCereals() {
            let newCereal
            if (this.searchName.length > 0) {
                newCereal = this.cereals.filter((cereal) => cereal.name.toLowerCase().includes(this.searchName.toLowerCase())) 
            } else {
                newCereal = this.cereals
            }
            return newCereal
        }
    },
    async mounted() {
        // Je lance la récupération des données et la stock dans un tableau
        this.cereals = await DbCereals.getCereals()
        console.log(this.cereals)
    },
}

Vue.createApp(app).mount('#app')