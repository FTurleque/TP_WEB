import { DbCereals } from './DbCereals.js'

const app = {
    data() {
        return {
            cereals: [],
            searchName: '',
            nutriscores: [],
            categorie: ''
        }
    },
    methods: {
        cerealRemove(cereal) {
            this.cereals = DbCereals.cerealToDeleted(cereal)
        },
        searchByName() {
            this.cereals = DbCereals.filteredByName(this.searchName)
        },
        searchByNutriscore() {
            this.cereals = DbCereals.filteredByNutriscore(this.nutriscores)
        },
        searchByCategorie() {
            console.log(this.categorie)
        }
    },
    computed: {

    },
    async mounted() {
        // Je lance la récupération des données et la stock dans un tableau
        this.cereals = await DbCereals.getCereals()
        // this.cereals = await DbCereals.dbCerealsJson
    },
}

Vue.createApp(app).mount('#app')