<template>
  <button @click="inc">Add 1.</button>
  <button @click="increase({value:10})">Add 1..</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    methods: {
        // addOne() {
        // this.$store.dispatch('increment'); // 'increment' is the name of the mutation';
        // },
        // ...mapActions(['increment', 'increase']),
        ...mapActions('numbers',{ 
            inc: 'increment',
            increase: 'increase',
        }),
    },
}
</script>

<style>

</style>