<template>
    <section>
        <form @submit.prevent="addUser">
        <input type="text" placeholder="Your name" v-model="newName" />
        <input type="number" placeholder="Your age" v-model="newAge" />
        <button>Set User Data</button>
        </form>
    </section>
</template>
    

<script>
export default {
    emits: ['set-data'],
    data() {
        return {
            newName: "",
            newAge: ""
        }
    },
    methods: {
        addUser() {
            // if(!this.name && !this.age)
            this.$emit('set-data', this.newName, this.newAge);
            //validate
            //submit to main
        }
    }
}
</script>