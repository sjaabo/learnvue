function getRandomValue(min,max){
    return Math.floor(Math.random() * (max - min)) + min;
}

Vue.createApp({
    data(){
        return {
            monsterHealth: 100,
            playerHealth: 100,
            rounds: 0,
            winner: '',
            actions: []
        }
    },
    computed:{
        monsterBar(){
            if(this.monsterHealth <= 0)
            return {width: '0%'};
            return {width: this.monsterHealth + '%'};
        },
        playerBar(){
            if(this.playerHealth <= 0)
            return {width: '0%'};
            return {width: this.playerHealth + '%'};
        },
        canUseSpecialAttack(){
            return this.rounds % 3 !== 0;
        }
    },
    watch: {
        monsterHealth(value) {
            if(value <= 0 && this.playerHealth <= 0)
            this.winner = 'Its a draw';
            else if(value <=0) this.winner = 'You have won, weehaa... :)';
        },
        playerHealth(value){
            if(value <= 0 && this.monsterHealth <= 0)
            this.winner = 'Its a draw';
            else if(value <=0) this.winner = 'You have lost :(';
        }
    },
    methods: {
        startGame () {
            this.monsterHealth = 100,
            this.playerHealth = 100,
            this.rounds = 0,
            this.winner = '',
            this.actions = []
        },
        attackMonster(){
            this.rounds += 1;
            const damage = getRandomValue(5,12);
            this.monsterHealth -= damage; 
            //this.actions.push('Round ' + this.rounds +  ': You attacked monster and dealt ' + damage + ' , Monster health is ' + this.monsterHealth);
            this.addBattleLog('player','at',damage);
            this.attackPlayer();
        },
        attackPlayer(){
            const damage = getRandomValue(8,15);
            this.playerHealth -= damage; 
            //this.actions.push('Round ' + this.rounds +  ': Monster attacked you and dealt ' + damage + ' , your health is ' + this.playerHealth);
            this.addBattleLog('monster','at',damage);
        },
        specialAttackMonster(){
            this.rounds += 1;
            const damage = getRandomValue(10,25);
            this.monsterHealth -= damage; 
            //this.actions.push('Round ' + this.rounds +  ': You special-attacked monster and dealt ' + damage + ' , monster health is ' + this.monsterHealth);
            this.addBattleLog('player','sat',damage);
            this.attackPlayer();
        },
        healPlayer() {
            this.rounds +=1;
            const healValue = getRandomValue(8,20);
            if(this.playerHealth + healValue > 100)
                this.playerHealth = 100;
            else this.playerHealth += healValue;
            this.addBattleLog('','',healValue);
            //this.actions.push('Round ' + this.rounds +  ': You have healed yourself and receovered ' + healValue + ' , your health is ' + this.playerHealth);
            this.attackPlayer();
        } ,
        surronder() {
            this.rounds +=1;
            this.addBattleLog('','sr',0);
            // this.actions.push('Round ' + this.rounds +  ': dude, you have surrendored...');
            this.winner = 'Oooh, you have surrondered, the monster won! :(';
        },
        addBattleLog(who, what, value){
            var msg = '';
            if(what === 'sr') msg = 'dude, you have surrendored...';
            else if(what === 'at' && who === 'player') msg = 'You attacked monster and dealt ' + value + ' , Monster health is ' + this.monsterHealth;
            else if(what === 'at' && who === 'monster') msg = 'Monster attacked you and dealt ' + value + ' , your health is ' + this.playerHealth;
            else if(what === 'sat' && who === 'player') msg = 'You special-attacked monster and dealt ' + value + ' , monster health is ' + this.monsterHealth;
            else msg = 'You have healed, yourself and receovered ' + value + ' , your health is ' + this.playerHealth;
            this.actions.push('Round ' + this.rounds +  ': ' + msg);
        },
        addBattleLog2(who, what, value){
            this.actions.unshift({
                actionBy: who,
                actionType: what,
                actionValue: value
            });
        }      
    }
}).mount('#game');