import { createStore } from 'vuex'

export default createStore({
    state:{
        features: [],
        currentForm: "",
        token: ""
    },
    mutations:{
        addFeature(state, payload){
            const new_id = state.features.length;

            state.features.push({
                id: new_id,
                user_msg: payload.user_msg,
                action: payload.action,
                params: payload.params,
                name: payload.name,
                when: payload.when,
                what: payload.what,
            })
        },
        deleteFeature(state, payload){
            for(let i = 0; i < state.features.length; i++){
                if( state.features[i].id === payload.nth_element){
                    state.features.splice(i,1);
                    break;
                }
            }
        },
        deleteAllFeatures(state) {
            state.features = []
        },
        setCurrentForm(state, payload) {
            state.currentForm = payload
        },
        setToken(state, payload) {
            state.token = payload
        }
    },
    actions:{

    },
    modules:{

    }
})