export default function(state={},action){
    switch(action.type){
      case "SIGN_UP":
        return {...state,new_user:action.payload}
      default:
        return state
    }
  }