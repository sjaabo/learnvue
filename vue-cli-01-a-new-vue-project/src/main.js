import { createApp } from 'vue';
import App from './App.vue';
const app = createApp(App);

import FriendContact from './components/FriendContact.vue';
app.component('friend-contact', FriendContact);

app.mount('#app');

