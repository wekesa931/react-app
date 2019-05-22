import { combineReducers } from 'redux';
import user from './login_reducers';
import new_user from './signup_reducers';
import meetup from './meetup_reducer';

const rootReducer = combineReducers({
    user,
    new_user,
    meetup
  })
  
  export default rootReducer;