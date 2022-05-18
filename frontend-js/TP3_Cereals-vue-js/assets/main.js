import { DbCereals } from './DbCereals.js'

const app = {
    data() {
        return {
            cereals: [],
            searchName: '',
            nutriscore: ''
        }
    },
    methods: {
        cerealRemove(cereal) {
            this.cereals = DbCereals.cerealToDeleted(cereal)
        },
        searchByName() {
            this.cereals = DbCereals.filteredByName(this.searchName)
        },
        searchNutriscore(value) {
            console.log(value)
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