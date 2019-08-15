import * as actionTypes from './actionTypes';
  
export function login(user) {
    return { type: actionTypes.USER_LOGIN_SUCCESS, user };
}