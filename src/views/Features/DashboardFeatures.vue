<template>
    <div class="dashboard-current-features">
        <div class="current-features">
            <div class="medium-title">Features:</div>

            <div class="current-feature"
                v-for="feature in features"
                :key="feature"
            >
                <div class="current-feature-btns">
                    <span class="small-title">{{ feature.name }}</span>
                    <img 
                        src="../../assets/Images/Icons/delete.svg" class="btn-basic" alt="delete" height="24" width="24"
                        @click="deleteFeature(feature.id, feature.name)"
                    >
                </div>

                <p v-html="feature.when"></p>
                <p v-html="feature.what"></p>
            </div>

        </div>
        
        <div class="btns-current-features">
            <button class="btn-basic btn-create-bot" @click="create">GENERATE</button>
            <button class="btn-basic btn-delete-bot" @click="deleteAllFeatures">RESET</button>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    computed:{
        features() {
            return this.$store.state.features
        },
        jsonFeatures() {
            const str = JSON.stringify(this.$store.state.features)
            return  JSON.parse(str)
        }
    },
    methods:{
        deleteFeature(ID, name){
            if( name === 'Music')
                this.$store.commit('setFeatureMusic', false);
            this.$store.commit('deleteFeature',{nth_element: ID});
        },
        create() {
            const data = {
                features: this.jsonFeatures,
                token: this.$store.state.token
            }
            console.log(data)
            axios.post('http://192.168.22.168:8000/generate-bot', data).then(res => console.log(res)).catch(e => console.log(e))
        },
        deleteAllFeatures() {
            this.$store.commit('deleteAllFeatures')
        }
    }
}
</script>

<style scoped>
    /* CURRENT FEATURES */
    .current-features{
        display: flex;
        flex-direction: column;

        background: var(--cw-bg-tent);
        color: var(--cw-tent);
        padding: var(--M-padding);

        height: 75vh;
        max-height: 75vh;
        overflow-y: scroll;
        border-radius: 10px;
    }
    .current-features .medium-title{ margin-bottom: 8px;}

    /* PERSONALIZED SCROLL */
    .current-features::-webkit-scrollbar { width: 10px;}
    .current-features::-webkit-scrollbar-track { background: transparent;}    
    .current-features::-webkit-scrollbar-thumb { background: var(--cw-tent);}

    /* EACH FEATURE */
    .current-feature{
        background: var(--cw-stroke);
        padding: var(--S-padding);
        border-radius: 16px;
        margin-bottom: var(--S-padding);
    }

    .current-feature-btns{ display: flex; align-items: center; justify-content: space-between;}
    .current-feature .small-title{ font-weight: 500;}
    .current-feature p{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2; /* number of lines to show */
                line-clamp: 2; 
        -webkit-box-orient: vertical;
    }

    .feature-type{
        max-width: 5rem;
        font-weight: 500;
        text-align: center;
        border-radius: 16px;
        border: 2px solid gray;
        padding: 4px;
        margin-bottom: var(--XS-padding);
    }

    /* BUTTONS FOR FEATURES */
    .btn-delete-feature{ 
        font-size: var(--M-title);
        font-weight: 600;
        color: var(--cw-tent);
    }

    .btns-current-features{ margin-top: var(--S-padding);}
    .btn-delete-bot, .btn-create-bot{ color: var(--cw-tent); }
    .btn-delete-bot{ background: transparent; color: var(--cw-main); border: 2px solid var(--cw-main);}
    .btn-create-bot{ background: var(--cw-stroke-tent); border: 2px solid var(--cw-stroke-tent); margin-right: var(--XS-padding);}
</style>