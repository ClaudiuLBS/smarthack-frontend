<template>
    <div class="add-feature">
        <h1 class="add-feature-title">Music:</h1>
        <h2 class="add-feature-subtitle">Bot will be able to play music in the voice chat</h2>
        <p class="description-text">How to use:</p>
        <button class="btn-basic btn-add-feature">CREATE</button>
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
            name: 'Music-Bot',
            type: 'Music',
            instruction: 'Bot will be able to play music in the voice chat'
        }
    },
}
</script>