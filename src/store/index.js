import { createStore } from 'vuex'

export default createStore({
    state:{
        features: []
    },
    mutations:{
        addFeature(state, payload){
            const new_id = state.features.length;

            state.features.push({
                id: new_id,
                name: payload.name,
                type: payload.type,
                instruction: payload.instruction
            })
        },
        deleteFeature(state, payload){
            for(let i = 0; i < state.features.length; i++){
                if( state.features[i].id === payload.nth_element){
                    state.features.splice(i,1);
                    break;
                }
            }
        }
    },
    actions:{

    },
    modules:{

    }
})