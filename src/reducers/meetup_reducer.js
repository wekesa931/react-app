export default function(state={},action){
    switch(action.type){
      case "MEETUP_LIST":
        return {...state, meetup:action.payload}
      default:
        return state
    }
  }