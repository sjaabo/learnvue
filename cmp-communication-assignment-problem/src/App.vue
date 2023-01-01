<template>
    <div>
        <active-user :username="user.name" :userage="user.age"></active-user>
        <user-data @set-data="setUserData"></user-data>
    </div>
</template>

<script>
export default {
    data() {
        return {
            user: {
                name: 'Suhayeb Jaabo',
                age: 41
            }
        }
    },
    methods: {
        setUserData(newName, newAge){
            this.user ={
                name: newName,
                age: parseInt(newAge) //+newAge
            }
        }
    }
}
</script>

<style>
html{
    font-family: sans-serif;
}
section {
    margin: 2rem auto;
    max-width: 800px;
    border-radius: 12px;
    border: 1px solid #ccc;
    padding: 1 rem;
}
</style>