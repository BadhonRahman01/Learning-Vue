<template>
   
        <transition-group tag="ul" name="user-list">
            <li v-for="user in users" :key="user" @click="removeuser(user)">{{ user }}</li>
        </transition-group>

 
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
.user-list-enter-active{
    transition: all 0.5s ease-out;
}
.user-list-leave-active{
    transition: all 0.5s ease-in;
    position: absolute;
}
.user-list-enter-from,
.user-list-leave-from{
    opacity: 0;
    transform: translateX(-30px);
}

.user-list-leave-from{
    opacity: 1;
    transform: translateX(0);
}
.user-list-leave-to{
    opacity: 0;
    transform: translateX(-30px);
}
.user-list-move{
    transition: transform 0.8s ease;
}
</style>