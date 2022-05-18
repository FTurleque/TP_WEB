import { DbCereals } from './DbCereals.js'

const app = {
    data() {
        return {
            cereals: [],
            searchName: ''
        }
    },
    methods: {
        cerealRemove(cereal) {
            this.cereals = DbCereals.cerealToDeleted(cereal)
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
        await DbCereals.getCereals()
        this.cereals = await DbCereals.dbCerealsJson
    },
}

Vue.createApp(app).mount('#app')