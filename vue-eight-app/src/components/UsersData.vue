<template>
    <ul>
        <li v-for="user in users" :key="user" @click="removeuser(user)">{{ user }}</li>
    </ul>
    <input type="text" ref="username"/>
    <button @click="addUser">Add User</button>
</template>



<script>
export default {
    data(){
        return {
            users: ['Badhon', 'Rahman', 'Shuvo', 'Rihan', 'Rinzo'],
        };
    },
    methods: {
        addUser(){
            // const input = document.querySelector('input');
            // const user = input.value;
            // this.users.push(user);
            // input.value = '';
            const user = this.$refs.username.value;
            this.users.unshift(user);
        },
        removeuser(user){
            const index = this.users.indexOf(user);
            this.users.splice(index, 1);
            // this.users = this.users.filter(usr => usr !== user);
        }
    }
}
</script>


<style scoped>
ul{
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}
li{
    padding: 1rem;
    border: 1px solid #ccc;
    transition: transform 0.3s ease-out;
}
</style>