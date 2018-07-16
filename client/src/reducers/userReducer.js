import * as types from '../actions/actionTypes';  

const INITIAL_STATE = {
    isFetching: false,
    token: ''
}

export default function userReducer(state = INITIAL_STATE, action) {
    switch(action.type) {
        case types.IS_FETCHING: 
          return {
            ...state,
            isFetching: true,
          }
        case types.CREATE_USER_SUCCESS:
          return {
              ...state, 
              isFetching: false, 
              token: action.token
          }
        default: 
            return state;
    }
}