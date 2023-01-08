const app = Vue.createApp({
    data() {
        return {
            courseGoalA: "Finish Vue ASAP",
            courseGoalB: "Finish Vue ASAP and continue",
            vueLink: "https://vuejs.org/"
        };
    },
    methods: {
        outputgoal(){
            const randomNumber = Math.random();
            if (randomNumber< 0.5){
                return this.courseGoalA;
            }else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');