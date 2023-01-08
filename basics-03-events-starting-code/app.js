const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      confirmedName: '',
    };
  },
  methods: {
    confirmInput(){
      this.confirmedName = this.name;
    },
    submitForm() {
      // event.preventDefault();
      alert('Form submitted');
    },
    setName(event, lname){
      this.name = event.target.value + ' ' + lname;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    remove(num) {
      this.counter = this.counter - num;;
    }
  }
});

app.mount('#events');
