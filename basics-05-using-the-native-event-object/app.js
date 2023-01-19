const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      fullname: '',
    };
  },
  watch: {
    name(value){
      if(value === ''){
        this.fullname = '';
      }else{
        this.fullname = value + ' ' + 'Rahman';
      }
      
    }
  },
  computed: {
    // fullname(){
    //   console.log('Running Again..');
    //   if (this.name === ''){
    //     return '';
    //   }
    //   return this.name + ' ' + 'Rahman';
    // }
  },
  methods: {
    outputFullname() {
      if (this.name === '') {
        return ' ';
      }
      return this.name + ' ' + 'Rahman';
    },
    resetInput() {
      this.name = '';
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    }
  }
});

app.mount('#events');
