import DbEmployees from './DbEmployees.js'

const myApp = {
    data() {
        return {
            title: 'Liste des employées',
            employees: []
        }
    },
    methods: {
        
    },
    async mounted() {
        this.employees = await DbEmployees.getEmployees()
        console.log(this.employees)
    },
}

Vue.createApp(myApp).mount('#app')