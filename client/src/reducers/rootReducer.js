import {combineReducers} from 'redux';  

import test from './testReducer';

const rootReducer = combineReducers({  
    // short hand property names
    test
  })
  
export default rootReducer;