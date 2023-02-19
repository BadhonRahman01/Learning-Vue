import { createApp } from 'vue';
import App from './App.vue';
import friendApp from './components/FriendContact.vue';
import NewFriend from './components/NewFriend.vue';

const app = createApp(App)

app.component('friend-contact',friendApp);
app.component('new-friend',NewFriend);
app.mount('#app');

