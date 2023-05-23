<template>
  <section class="container">
    <h2>{{ uName }}</h2>
    <h3>{{ uAge }}</h3>
    <button @click="setNewAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName">
      <input type="text" placeholder="Last Name" v-model="lastName">
    </div>
  </section>
</template>

<script>
import { ref, computed,watch } from 'vue';
// import { reactive } from 'vue';//reactive only works with object

export default {
  setup(){
    // const uName = ref('Badhon');
    const uAge = ref(25);
    const firstName = ref('');
    const lastName = ref('');
    // const user = reactive({
    //   name: 'Badhon',
    //   age: 25,
    // });
    // setTimeout(() => {
    //   user.name = 'Badhon Khan';
    //   user.age = 26;
    // }, 2000);

    const uName = computed(function(){
      // console.log('Running again...');
      // return `${firstName.value} ${lastName.value}`
      return firstName.value + ' ' + lastName.value;
    });
    watch([uAge, uName], function(newValues, oldValues){
      console.log('Old Age' + oldValues[0]);
      console.log('New Age' + newValues[0]);  
      console.log('Old name' + oldValues[1]);
      console.log('New name' + newValues[1]);  
    });
    function setNewAge() {
      uName.value = 'Badhon Khan';
      uAge.value = 28;
    }
    function setFirstName(event){
      firstName.value = event.target.value
    }
    function setLastName(event){
      lastName.value = event.target.value
    }
    return { uName, uAge, firstName, lastName,setNewAge ,setLastName,setFirstName };
  }
  // data() {
  //   return {
  //     userName: 'Badhon',
  //   };
  // },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

.container {
  margin: 3rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  text-align: center;
}
</style>