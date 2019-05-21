export default function(state={},action){
    switch(action.type){
      case "LOGIN_LIST":
        return {...state,user:action.payload}
      default:
        return state
    }
  }