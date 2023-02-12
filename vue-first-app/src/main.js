import { createApp } from 'vue';
import App from './App.vue';
import friendApp from './components/FriendContact.vue';

const app = createApp(App)

app.component('friend-contact',friendApp);
app.mount('#app');

