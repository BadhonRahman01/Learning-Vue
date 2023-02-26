
<template>
    <div>
      <header v-if="$slots.header">
        <slot name="header">
          <!-- <h2>The Defaul</h2> -->
        </slot>
      </header>
        <slot></slot>
        </div>
</template>

<style scoped>
header{
  display: flex;
  justify-content: space-between;
  align-items: center;
}
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

</style>


<script>
export default {
mounted(){
  console.log(this.$slots.header);
}
}


</script>