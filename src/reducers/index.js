import { combineReducers } from 'redux';
import movies from './movies_reducers';
import user from './login_reducers';

const rootReducer = combineReducers({
    movies,
    user
  })
  
  export default rootReducer;