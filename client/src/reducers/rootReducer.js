import {combineReducers} from 'redux';  

import user from './userReducer';

const rootReducer = combineReducers({  
    // short hand property names
    user
  })
  
export default rootReducer;