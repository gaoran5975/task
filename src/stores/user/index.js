const state = {
    company : window.sessionStorage.getItem('company') || ''
};

const actions = {

};

const mutations = {
    GET_USER(state , payload){
        state.company = payload;
        window.sessionStorage.setItem('company', payload)

    },
     LOG_OUT: (state) => {
    // 登出的时候要清除用户名
    state.company = null
    // window.localStorage.removeItem('company')
     window.sessionStorage.removeItem('company')
  }
};

export default {
    namespaced : true,
    state,
    actions,
    mutations
}