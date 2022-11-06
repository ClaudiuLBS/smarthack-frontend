<template>
    <div class="add-feature">
        <h1 class="add-feature-title">Mute:</h1>
        <h2 class="add-feature-subtitle">Bot will mute the user for a certain time if he uses a specific word</h2>

        <h1 class="description-text">Select a word:</h1>
        <input 
            type="text" name="type-to-send"
            v-model="forbiddenWord"
            :class="{ isError: isCompleted}"
        >

        <div class="feature-moment">
            <div>
                <h1 class="description-text">Days:</h1>
                <input type="number" name="days" v-model="days" :class="{ isError: isCompleted }">
            </div>
            <div>
                <h1 class="description-text">Hours:</h1>
                <input type="number" name="hours" v-model="hours" :class="{ isError: isCompleted }">
            </div>
            <div>
                <h1 class="description-text">Minutes:</h1>
                <input type="number" name="minutes" v-model="minutes" :class="{ isError: isCompleted }">
            </div>
            <div>
                <h1 class="description-text">Seconds:</h1>
                <input type="number" name="seconds" v-model="seconds" :class="{ isError: isCompleted }">
            </div>
        </div>

        <p class="caption-text error-text" v-if="isCompleted">You need to complete all fields!</p>
        <p class="caption-text">This action will mute users.</p>
        <button 
            class="btn-basic btn-add-feature"
            @click="addMusicFeature"
        >CREATE</button>
    </div>
</template>

<script>
import '../../assets/CSS/reset-sheet.css';
import '../../assets/CSS/root.css';
import '../../assets/CSS/feature.css';

export default {
    name: 'MusicFeature',
    data(){
        return{
            isCompleted: false,
            name: 'Music-Bot',
            type: 'Music',
        }
    },
    methods:{
        addMusicFeature(){
            if(this.forbiddenWord){
                this.isCompleted = false;
                this.$store.commit('addFeature', {
                    name: this.name,
                    type: this.type,
                    instruction: this.forbiddenWord,
                    when: `When the user types <span class="feature-important">'${this.forbiddenWord}'</span>`,
                    what: `It will get muted for <span class="feature-important">${this.days} day(s), ${this.hours} hour(s), ${this.minutes} minute(s), ${this.seconds} second(s)</span>`
                })
            } else{
                this.isCompleted = true;
            }
        }
    }
}
</script>