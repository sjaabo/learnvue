<template>
  <li>
    <h2>{{ name }} {{ isFavorite  ? "♥" : "" }}</h2>
    <button @click="toggleDetails()">
      {{ displayed ? "Hide" : "Show" }} details
    </button>
    &nbsp;
    <button @click="toggleFavorite()">
      {{ isFavorite ? "Cancel" : "Set" }} favorite
    </button>
    &nbsp;
    <button @click="deleteFriend()">
      Delete
    </button>
    <ul v-show="displayed">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  // props: ["name", "phoneNumber", "emailAddress", "isFavorite"],
  props: {
    id: {
      type: Number,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    phoneNumber: {
      type: String,
      required: true
    },
    emailAddress: {
      type: String,
      required: true,
      validator: function(value){
        return value.includes("@");
      }
    },
    isFavorite: {
      type: Boolean,
      required: true
    },
  },
  emits: ['toggle-favorite','delete-friend'],
  // emits : {
  //   'toggle-favorite': function(id){
  //     if(id) return true;
  //     return false;
  //   }
  // },
  data() {
    return {
      displayed: false,
      favorite: this.isFavorite,
    };
  },
  methods: {
    toggleDetails() {
      this.displayed = !this.displayed;
    },
    toggleFavorite() {
      this.$emit('toggle-favorite', this.id);
    },
    deleteFriend(){
      this.$emit('delete-friend', this.id);
    }
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: "Jost", sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>