import { DbCereals } from './DbCereals.js'

const app = {
    data() {
        return {
            title: 'Cereals',
            cereals: [],
            searchName: '',
            nutriscores: [],
            categorie: '',
            averageCalorie: 0
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
            this.cereals = DbCereals.filteredByCategorie(this.categorie)
        }
    },
    computed: {
        averageCalorieCalculate() {
            let caloriesAvg = 0
            this.cereals.forEach(cereal => {
                caloriesAvg += cereal.calories
            });
            this.averageCalorie = caloriesAvg
        }
    },
    async mounted() {
        // Je lance la récupération des données et la stock dans un tableau
        this.cereals = await DbCereals.getCereals()
    },
}

Vue.createApp(app).mount('#app')