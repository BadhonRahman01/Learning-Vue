<template>
    <h3>{{ counter }}</h3>
    <button>We do More</button>
</template>

<script>
export default {
    computed: {
    counter() {
        return this.$store.getters.normalizedCounter;
    },
  },
}
</script>

<style>

</style>