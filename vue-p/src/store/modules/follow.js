import {get} from '../service.js'

import * as types from '../types'//整体输入，存为types对象

const state={
  list:[],
}

let actions = {
  [types.FOLLOW]({commit,state},payload){
    get({apiname:'follow',params:{_page:1,_limit:8}}).then(
      result=>commit('FOLLOW',result)
    )
  },
}

let mutations = {
  [types.FOLLOW]:(state,payload)=>state.list=payload,
}

export default{
  namespaced:true,//命名空间的模块。模块内部直接调用，外部需要命名空间(见组件)
  state,actions,mutations
}