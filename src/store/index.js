import {createStore} from "vuex"
import  axios  from "axios";

const store = createStore({
    state: {
        data:{}
    },
    mutations: {
        updateData(state, payload) {
            console.log(payload)
            state.data = payload
        }
    },
    actions: {
        async getData({commit}) {
            let res = await axios.get("/vue_vuex_axios_sample/api");
            console.log(res)
            commit('updateData', res.data);
        }
    }
})

export default store