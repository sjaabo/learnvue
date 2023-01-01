<template>
    <form @submit.prevent="addContact">
        <div>
            <label>Name</label>
            <input type="text" v-model="name"/>
        </div>
        <div>
            <label>Mobile</label>
            <input type="tel" v-model="phone" />
        </div>
        <div>
            <label>Email</label>
            <input type="email" v-model="email" />
        </div>
        <div>
            <button >Add friend</button>
        </div>
    </form>
</template>


<script>
export default {
    emits: ['add-contact'],
    data() {
        return {
            name: '',
            phone: '',
            email: ''
        }
    },
    methods: {
        addContact(){
            this.$emit('add-contact', this.name, this.phone, this.email);
        }
    }
}
</script>

<style>

</style>