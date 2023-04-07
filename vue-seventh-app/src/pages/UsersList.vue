<template>
  <ul>
    <button @click="confirmInput">Confirm</button>
    <button @click="saveChanges">Save Changes</button>
    <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>

  </ul>
</template>

<script>
import UserItem from '../components/users/UserItem.vue';

export default {
  components: {
    UserItem,
  },
  inject: ['users'],
  data(){
    return {
      changesSaved: false,
    }
  },
  methods: {
    confirmInput(){
     this.$router.push('/teams');
    },
    saveChanges(){
      this.changesSaved = true;
    }
  },
  beforeRouteEnter(to, from, next){
    console.log('Users list beforeRouteEnter');
    console.log(to, from);
    next();
  },
  beforeRouteLeave(to, from, next){
    console.log('Users list beforeRouteLeave');
    console.log(to, from);
    if (this.changesSaved){
      next();
    } else {
      const UserWantsToLeave = confirm('You have unsaved changes. Are you sure you want to leave?');
      next(UserWantsToLeave);
    }
  },
  unmounted(){
    console.log('Users list unmounted');
  }
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 2rem auto;
  max-width: 20rem;
  padding: 0;
}
</style>