const state = {
    name : '',
};

const actions = {

};

const mutations = {//状态管理的方法一般都大写
    USER_NAME(state,payload){
        state.name = payload.name;
    }
};

export default{
    namespaced : true,
    state,
    actions,
    mutations
}