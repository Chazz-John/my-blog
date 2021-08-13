import store from "@/store";
export default {
  //成功提示
  success(data){
    store.commit("message",{
      type:'success',
      message : data.message ? data.message:data,
      time:data.time? data.time: 3000,
      light:data.light?data.light : false
    })
  },
  //错误提示
  error(data){
    store.commit("message",{
      type:'error',
      message : data.message ? data.message:data,
      time:data.time? data.time: 3000,
      light:data.light?data.light : false
    })
  },
  //警告提示
  warning(data) {
    store.commit("message",{
      type:'warning',
      message : data.message ? data.message:data,
      time:data.time? data.time: 3000,
      light:data.light?data.light : false
    })
  },
  //消息提示
  info(data) {
    store.commit("message",{
      type:'info',
      message : data.message ? data.message:data,
      time:data.time? data.time: 2000,
      light:data.light?data.light : false
    })
  },
}