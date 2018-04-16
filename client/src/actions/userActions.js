import userApi from '../api/userApi';

export function createUser(email, password, firstname, lastname) {  
  return function(dispatch) {
    dispatch(isFetching());
    return userApi.createUser(email, password, firstname, lastname).then(token => {
      dispatch(createUserSuccess(token));
    }).catch(error => {
      throw(error);
    });
  };
}

export function createUserSuccess() {
    return {type: types.CREATE_USER_SUCCESS, token};
  }

  export function isFetching() {
    return {type: types.IS_FETCHING};
}