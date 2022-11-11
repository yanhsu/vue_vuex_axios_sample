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
            let res = await axios.get("https://cors-anywhere.herokuapp.com/https://www.travel.taipei/open-api/zh-tw/Attractions/All?page=1",{
                headers: {'Accept': 'application/json'},
            });
            console.log(res)
            commit('updateData', res.data);
        }
    }
})

export default store