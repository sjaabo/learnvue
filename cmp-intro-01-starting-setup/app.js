const app = Vue.createApp({
    data(){
        return {
            friends: [
                {
                    id: 1,
                    name: 'Manuel Lorenz',
                    phone: '01234 5678 991',
                    email: 'manuel@localhost.com',
                    //display: false
                },
                {
                    id: 2,
                    name: 'Julie Jones',
                    email: 'julie@localhost.com',
                    phone: '09876 543 221',
                    //display: false

                }
            ]
        }
    },
    methods: {
        // displayContact(event, id){
        //     this.friends[id-1].display = !this.friends[id-1].display;
        //     if(this.friends[id-1].display)
        //         event.target.textContent = 'Hide details';
        //     else event.target.textContent = 'Show details';
        // }
    }
});

app.component('friend-contact',  {
    template: `
    <li>
        <h2>{{friend.name}}</h2>
        <button @click="toggleDetails()">{{ displayed ? 'Hide' : 'Show'}} details</button>
        <ul v-show="displayed">
            <li><strong>Phone:</strong> {{friend.phone}}</li>
            <li><strong>Email:</strong> {{friend.email}}</li>
        </ul>
    </li>
    `,
    data(){
        return {
            displayed: false,
            friend: {
                id: 1,
                name: 'Manuel Lorenz',
                phone: '01234 5678 991',
                email: 'manuel@localhost.com',
                //display: false
            },
        }
    },
    methods: {
        toggleDetails(){
            this.displayed = !this.displayed;
        }
    }
    
});
app.mount('#app');