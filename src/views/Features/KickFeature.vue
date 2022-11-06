<template>
    <form class="add-feature" @submit.prevent="addKickFeature">
        <h1 class="add-feature-title">Kick:</h1>
        <h2 class="add-feature-subtitle">Bot will kick a user if a certain word will be used</h2>
        <h1 class="description-text">Select a word:</h1>
        <input 
            type="text" 
            name="type-to-send"
            v-model="user_msg"
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
    name: 'KickFeature',
    data() {
        return {
            user_msg: "",
            isCompleted: false,
            name: 'Kick',
        }
    },
    methods:{
        addKickFeature(){
            if (this.user_msg) {
                this.isCompleted = false;
                this.$store.commit('addFeature', {
                    name: this.name,
                    instruction: this.forbiddenWord,
                    when: `When the user types <span class="feature-important">'${this.forbiddenWord}'</span>`,
                    what: `He will kicked from the channel`
                })
            } else {
                this.isCompleted = true;
            }
        }
    }
}
</script>