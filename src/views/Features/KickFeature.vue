<template>
    <form class="add-feature" @submit.prevent="addMusicFeature">
        <h1 class="add-feature-title">Kick:</h1>
        <h2 class="add-feature-subtitle">Bot will ban a user if a certain word will be used</h2>
        <h1 class="description-text">Select a word:</h1>
        <input 
            type="text" 
            name="type-to-send"
            v-model="forbiddenWord"
            :class="{ isError: isCompleted}"
        >
        <p class="caption-text error-text" v-if="isCompleted">You need to complete this field!</p>
         <p class="caption-text">This action will remove users from your channel.</p>

        <button 
            type="submit"
            class="btn-basic btn-add-feature"
        >CREATE</button>
    </form>
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
            name: 'Kick-Bot',
            type: 'Kick',
        }
    },
    methods:{
        addMusicFeature(){
            if(this.forbiddenWord){
                this.isCompleted = false;
                this.$store.commit('addFeature', {
                    name: this.name,
                    type: this.type,
                    instruction: this.forbiddenWord
                })
            } else{
                this.isCompleted = true;
            }
        }
    }
}
</script>