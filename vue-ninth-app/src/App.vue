<template>
  <base-container title="Vuex">
  <the-counter></the-counter>
  <favourite-value></favourite-value>
  <button @click="addOne">Add 1</button>
  <change-counter></change-counter>
  </base-container>

</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavouriteValue from './components/FavouriteValue.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavouriteValue,
  },
  
  methods: {
    addOne() {
      // this.$store.state.counter = this.$store.state.counter + 1;
      this.$store.dispatch('increase', {
        value: 10,
      }); // 'increment' is the name of the mutation';');
    },
  },
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
</style>