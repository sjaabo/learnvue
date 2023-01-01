<template>
  <header><h1>My friends</h1></header>
  <section id="app">
    <new-friend @add-contact="addNewFriend"></new-friend>
    <ul>
      <friend-contact
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phone"
        :email-address="friend.email"
        :is-favorite="friend.isFavorite"
        @toggle-favorite="toggleFavoriteStatus"
        @delete-friend="deleteContact"
      >
      </friend-contact>
    </ul>
  </section>
</template>


<script>
export default {
  data() {
    return {
      friends: [
        {
          id: 1,
          name: "Manuel Lorenz",
          phone: "01234 5678 991",
          email: "manuel@localhost.com",
          isFavorite: false,
        },
        {
          id: 2,
          name: "Julie Jones",
          email: "julie@localhost.com",
          phone: "09876 543 221",
          isFavorite: false,
        },
        {
          id: 3,
          name: "Suhayeb Jaabo",
          email: "suhayeb@localhost.com",
          phone: "055 5544 303",
          isFavorite: true,
        },
      ],
    };
  },
  methods: {
    toggleFavoriteStatus(friendId){
        // alert('this works ' + friendId);
        const identified = this.friends.find(friend => friend.id === friendId);
        identified.isFavorite = !identified.isFavorite;
        console.log('new value: Id:' + friendId + ' with new value: ' + this.friends.find(friend => friend.id === friendId).isFavorite);
    },
    addNewFriend(name, phone, email){
      const newFriend = {
        id: this.friends.length + 1,
        name: name,
        phone: phone,
        email: email,
        isFavorite: false
      };
      this.friends.push(newFriend);
    },
    deleteContact(id){
      // const identified = this.friends.find(friend => friend.id === id);
      // this.friends.splice(identified,1);
      this.friends = this.friends.filter(friend => friend.id !== id);
    }
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");
</style>

let x = 3;