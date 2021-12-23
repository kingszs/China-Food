import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user:null,
    user_id:'',
    user_pic:'',
    isLogin:false,
    token:'',
  },
  mutations: {
    getUser (state, user) {
      state.user = user
    },
    getUserId(state,user_id){
      state.user_id = user_id
    },
    getUserPic(state,user_pic){
      state.user_pic = user_pic
    },
    // 更改用户状态
    userStatus(state,user){
      if(user){
        state.user = user
        state.isLogin = true
      }else if(user = null){
        sessionStorage.setItem("userName",null)
        sessionStorage.setItem("userToken","")
        state.isLogin = false
        state.token = ''
      }
    }
  },
  actions: {
    getUser (ctx, user) {
      ctx.commit('getUser', user)
    },
    getUserId(ctx,user_id){
      ctx.commit('getUserId',user_id)
    },
    getUserPic(ctx,user_pic){
      ctx.commit("getUserPic",user_pic)
    },
    // 应用mutation
    setUser(ctx,user){
      ctx.commit("userStatus",user)
    }
  },
  modules: {
  }
})
