import {createStore} from "vuex"
import  axios  from "axios";

const store = createStore({
    state: {
        data:{},
        isLoad: false,
        errorMsg:'',
        isError: false
    },
    mutations: {
        updateData(state, payload) {
            console.log(payload)
            state.data = payload
        },
        updateLoad(state, payload) {
            state.isLoad = payload
        },
        updateErrorMsg(state, payload) {
            state.errorMsg = payload.errorMsg
            state.isError = payload.isError
        }
    },
    actions: {
        async getData({commit}) {
            try {
                commit('updateLoad', true);
                let res = await axios.get("https://cors-anywhere.herokuapp.com/https://www.travel.taipei/open-api/zh-tw/Attractions/All?page=1",{
                    headers: {'Accept': 'application/json'},
                });
                console.log(res)
                commit('updateData', res.data);   
                commit('updateLoad', false);                 
            } catch (error) {
                console.log(error)
                commit('updateLoad', false);
                commit('updateErrorMsg', {
                    errorMsg: '取得api 錯誤',
                    isError: true
                })
            }
        }
    }
})

export default store