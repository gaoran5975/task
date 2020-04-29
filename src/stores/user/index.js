const state = {
    company :  window.sessionStorage.getItem('company') || 'admin'  ,
    id :  window.sessionStorage.getItem('id')  || '' 
};

const actions = {

};

const mutations = {
    GET_USER(state,payload){
        state.company = payload.company;
        state.id = payload.id;
        window.sessionStorage.setItem('company', state.company)
        window.sessionStorage.setItem('id', state.id)

    },
     LOG_OUT: (state) => {
    // 登出的时候要清除用户名
    state.company = null
    window.localStorage.removeItem('company')
     window.sessionStorage.removeItem('id')
  }
};

export default {
    namespaced : true,
    state,
    actions,
    mutations
}