<template>
  <!-- <div class="container">
    <div class="block" :class="{ animate: animatedBlock }"></div>
    <button @click="animateBlock">Animate</button>
  </div>
  <div class="container">
    <transition
      :css="false"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      @before-leave="beforeLeave"
      @leave="leave"
      @after-leave="afterLeave"
      @enter-cancelled="enterCancelled"
      @leave-cancelled="leaveCancelled"
    >
      <p v-if="paraIsVisible">This is sometimes only visible..</p>
    </transition>
    <button @click="toggleParagraph">Toggle Paragraph</button>
  </div>
  <div class="container">
    <transition name="buttons-fade" mode="out-in">
      <button @click="showUsers" v-if="!usersAreVisible">Show Users</button>
      <button @click="hideUsers" v-else>Hide Users</button>
    </transition>
  </div>
  <base-modal @close="hideDialog" :open="dialogIsVisible">
    <p>This is a test dialog!</p>
    <button @click="hideDialog">Close it!</button>
  </base-modal>

  <div class="container">
    <button @click="showDialog">Show Dialog</button>
  </div>
  <div class="container">
    <users-data></users-data>
  </div> -->

  <router-view v-slot="slotProps">
    <transition name="buttons-fade" mode="out-in">
      <component :is="slotProps.Component"></component>
    </transition>
  </router-view>


</template>  

<script>
// import UsersData from "./components/UsersData.vue";
export default {
  // components: {
  //   UsersData,
  // },
  data() {
    return {
      animatedBlock: false,
      dialogIsVisible: false,
      paraIsVisible: false,
      usersAreVisible: false,
      enterInterval: null,
      leaveInterval: null,
    };
  },
  methods: {
    beforeEnter(el) {
      console.log("beforeEnter");
      console.log(el);
      el.style.opacity = 0;
    },
    enter(el, done) {
      console.log("enter");
      let round = 1;
      this.enterInterval = setInterval(() =>{
        el.style.opacity = round* 0.01;
        round++;
        if(round > 100){
          clearInterval(this.enterInterval);
          done();
        }
      }, 20);
    },
    afterEnter() {
      console.log("afterEnter");
    },
    leave(el,done) {
      console.log("leave");
      let round = 1;
      this.leaveInterval = setInterval(() =>{
        el.style.opacity = 1 - round* 0.01;
        round++;
        if(round > 100){
          clearInterval(this.leaveInterval);
          done();
        }
      }, 20);
    },
    afterLeave() {
      console.log("afterLeave");
    },
    beforeLeave() {
      console.log("beforeLeave");
    },
    enterCancelled() {
      console.log("enterCancelled");
      clearInterval(this.enterInterval);
    },
    leaveCancelled() {
      console.log("leaveCancelled");
      clearInterval(this.leaveInterval);
    },
    showUsers() {
      this.usersAreVisible = true;
    },
    hideUsers() {
      this.usersAreVisible = false;
    },
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },
    animateBlock() {
      // const block = document.querySelector('.block');
      // block.style.transform = 'translateX(100px)';
      // block.style.transition = 'transform 0.3s ease-in-out';
      this.animatedBlock = true;
    },
    toggleParagraph() {
      this.paraIsVisible = !this.paraIsVisible;
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
button {
  font: inherit;
  padding: 0.5rem 2rem;
  border: 1px solid #810032;
  border-radius: 30px;
  background-color: #810032;
  color: white;
  cursor: pointer;
}
button:hover,
button:active {
  background-color: #a80b48;
  border-color: #a80b48;
}
.block {
  width: 8rem;
  height: 8rem;
  background-color: #290033;
  margin-bottom: 2rem;
  transition: transform 0.3s ease-out;
}
.container {
  max-width: 40rem;
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  border: 2px solid #ccc;
  border-radius: 12px;
}
.animate {
  /* transform: translateX(-150px); */
  animation: slide-scale 0.5s ease-in-out forwards;
}

.buttons-fade-enter-from,
.buttons-fade-leave-to {
  opacity: 0;
}
.buttons-fade-enter-active {
  transition: opacity 0.5s ease-out;
}
.buttons-fade-leave-active {
  transition: opacity 0.5s ease-in;
}
.buttons-fade-enter-to,
.buttons-fade-leave-from {
  opacity: 1;
}
.route-enter-from{

}
.route-enter-active{
  animation: slide-scale 0.5s ease-out;
}
.route-enter-to{

}
.route-leave-active{
  animation: slide-scale 0.5s ease-in;
}
/* @keyframes modal {
  from{
   opacity: 0;
    transform: translateY(-50px) scale(0.8);; 
  }
  to{
    opacity: 1;
    transform: translateY(0) scale(1);
  }
} */
@keyframes slide-scale {
  0% {
    tramsform: translateX(0) scale(1);
  }
  70% {
    transform: translateX(-120px) scale(1.1);
  }
  100% {
    transform: translateX(-150px) scale(1);
  }
}
</style>

.para-enter-from {
  /* opacity: 0;
transform: translateY(-30px); */
}
.para-enter-active {
  /* transition: all 0.5s ease; */
  animation: slide-scale 0.5s ease-in-out;
}
.para-enter-to {
  /* opacity: 1;
  transform: translateY(0px); */
}
.para-leave-from {
  /* opacity: 1;
  transform: translateY(0px); */
}
.para-leave-active {
  /* transition: all 0.5s ease; */
  animation: slide-scale 0.5s ease-in-out;
}
.para-leave-to {
  /* opacity: 0;
  transform: translateY(-30px); */
}