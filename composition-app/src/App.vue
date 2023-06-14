<template>
  <section class="container">
    <user-data 
    :first-name="firstName"
    :last-name="lastName"
    ></user-data>
    <button @click="setNewAge">Change Age</button>
    <div>
      <input type="text" placeholder="First Name" v-model="firstName" />
      <input type="text" placeholder="Last Name" ref="lastNameInput" />
      <button @click="setLastName">Set Last Name</button>
    </div>
  </section>
</template>

<script>
import { ref, computed, watch, provide } from "vue";
import UserData from "./components/UserData.vue";
// import { reactive } from 'vue';//reactive only works with object

export default {
  components: {
    UserData,
  },
  setup() {
    // const uName = ref('Badhon');
    const uAge = ref(25);
    const firstName = ref("");
    const lastName = ref("");
    const lastNameInput = ref(null);
    // const user = reactive({
    //   name: 'Badhon',
    //   age: 25,
    // });
    // setTimeout(() => {
    //   user.name = 'Badhon Khan';
    //   user.age = 26;
    // }, 2000);
      provide('userAge', uAge);
    const uName = computed(function () {
      // console.log('Running again...');
      // return `${firstName.value} ${lastName.value}`
      return firstName.value + " " + lastName.value;
    });
    watch([uAge, uName], function (newValues, oldValues) {
      console.log("Old Age" + oldValues[0]);
      console.log("New Age" + newValues[0]);
      console.log("Old name" + oldValues[1]);
      console.log("New name" + newValues[1]);
    });
    function setNewAge() {
      uName.value = "Badhon Khan";
      uAge.value = 28;
    }
    function setFirstName(event) {
      firstName.value = event.target.value;
    }
    // function setLastName(event){
    //   lastName.value = event.target.value
    // }
    function setLastName() {
      lastName.value = lastNameInput.value.value;
    }
    return {
      userName: uName,
      age: uAge,
      firstName,
      lastName,
      setNewAge,
      lastNameInput,
      setFirstName,
      setLastName,
    };
  },
  // provide() {
  //   return {
  //     age: this.age,
  //   };
  // },
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