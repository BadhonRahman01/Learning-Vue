<template>
    <dialog open>
        <slot></slot>
    </dialog>
</template>


<script>
export default {
    data() {
        
    },
    methods:{

    }
}
</script>

<style scoped>
dialog{
    margin: 0;
    position:fixed;
    top: 20vh;
    left: 30%;
    width: 40%;
    background-color: azure;
    box-shadow: 0 2px 8px rgba(red, green, blue);
    padding: 1rem;;
}
</style>