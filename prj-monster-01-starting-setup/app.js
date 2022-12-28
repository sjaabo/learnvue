function getRandomValue(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
}

Vue.createApp({
    data(){
        return {
            monsterHealth: 100,
            playerHealth: 100,
            rounds: 0
        }
    },
    computed:{
        monsterBar(){
            return {width: this.monsterHealth + '%'};
        },
        playerBar(){
            return {width: this.playerHealth + '%'};
        },
        canUseSpecialAttack(){
            return this.rounds % 3 !== 0;
        }
    },
    methods: {
        attackMonster(){
            const damage = getRandomValue(5,12);
            this.monsterHealth -= damage; 
            this.attackPlayer();
        },
        attackPlayer(){
            const damage = getRandomValue(8,15);
            this.playerHealth -= damage; 
            this.rounds += 1;
        },
        specialAttackMonster(){
            const damage = getRandomValue(10,25);
            this.monsterHealth -= damage; 
            this.attackPlayer();
        }      

    }
}).mount('#game');