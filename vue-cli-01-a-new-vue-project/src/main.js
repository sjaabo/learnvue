import { createApp } from 'vue';
import App from './App.vue';
const app = createApp(App);

import FriendContact from './components/FriendContact.vue';
import NewFriendVue from './components/NewFriend.vue';

app.component('friend-contact', FriendContact);
app.component('new-friend', NewFriendVue);

app.mount('#app');

