const app = Vue.createApp({
  data() {
    return {

      friends: [
        {
          id: "manuel",
          name: "Manuel Nuer",
          phone: "019564013655",
          email: "manuel@localhost.com",
        },
        {
          id: "badhon",
          name: "Nuer Badhon",
          phone: "019578413655",
          email: "nuer@localhost.com",
        },
      ],
    };
  },
  methods: {
    toggleDetails(){
        this.detailsAreVisible = !this.detailsAreVisible; 
    }
  },
});


app.component('friend-contact', {
    template: `
    <li>
    <h2>{{friend.name}}</h2>
    <button @click="toggleDetails()">{{detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong>{{ friend.phone}}</li>
      <li><strong>Email:</strong>{{ friend.email}}</li>
    </ul>
  </li>
    `,
    data(){
        return {
            detailsAreVisible: false,
            friend:        
             {
                id: "manuel",
                name: "Manuel Nuer",
                phone: "019564013655",
                email: "manuel@localhost.com",
              },
        };
    },
    methods: {
        toggleDetails(){
            this.detailsAreVisible = !this.detailsAreVisible; 
        }
    }
    
    });


app.mount("#app");
