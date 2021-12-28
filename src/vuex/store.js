import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);



export const store = new Vuex.Store({
    state: {
       storeNum: 10,
    },
    getters: {
        getDoubleNumber(state){
            return state.storeNum * 2;
        }
    },
    mutations : {
        change(state){
            return state.storeNum+=3;
        }
    }
});