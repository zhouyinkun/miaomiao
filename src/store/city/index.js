const state = {
    nm : window.localStorage.getItem('nowNm')||'重庆',
    id : window.localStorage.getItem('nowId')||'10'
};

const actions = {

};

const mutations = {//状态管理的方法一般都大写
    CITY_INFO(state,payload){
        state.nm = payload.nm;
        state.id = payload.id;
    }
};

export default{
    namespaced : true,
    state,
    actions,
    mutations
}