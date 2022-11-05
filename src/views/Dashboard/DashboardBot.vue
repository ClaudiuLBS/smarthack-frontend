<template>
    <div class="dashboard-bot">

        <div class="dashboard-new-features">
            <div class="current-feature-btns" style="justify-content: unset">
                <img src="../../assets/Images/Icons/delete-dark.svg" class="btn-basic" alt="delete" height="24" width="24">
                <input type="text" placeholder="Bot's token..." class="input-bot medium-title">
            </div>
            
            <music-feature v-if="this.getFormStatus == 'music'"></music-feature>
            <message-feature v-else-if="this.getFormStatus == 'msg'"></message-feature>
            <p v-else-if="this.getFormStatus == 'kick'">kick</p>
            <p v-else-if="this.getFormStatus == 'ban'">ban</p>
            <p v-else-if="this.getFormStatus == 'mute'">mute</p>
        </div>

        <dashboard-features></dashboard-features>
    </div>
</template>

<script>
import DashboardFeatures from '../Features/DashboardFeatures.vue';
import MusicFeature from '../Features/MusicFeature.vue';
import MessageFeature from '../Features/MessageFeature.vue';

export default {
    components:{
        DashboardFeatures,
        MusicFeature,
        MessageFeature
    },
    computed: {
        getFormStatus() {
            return this.$store.state.currentForm
        }
    },
    data(){
        return{        
            features: [{
                name: 'Music-Bot',
                type: 'Music',
                instruction: 'Bot will be able to play music in the voice chat'
            }]      
        }
    }
}
</script>

<style scoped>
    .dashboard-bot{
        flex: 9;
        display: flex;
        padding: var(--S-padding);
    }

    .dashboard-new-features,
    .dashboard-current-features{ flex: 1;}

    .current-feature-btns{ display: flex; align-items: center; justify-content: space-between;}
    
    /* NEW FEATURES */
    
    .dashboard-new-features{
        display: flex;
        flex-direction: column;
        padding: var(--M-padding);
    }

    .input-bot{
        widows: 100%;
        padding: var(--S-padding);
        border: none;
    }
</style>