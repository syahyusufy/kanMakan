import {
    USER_LOGIN_SUCCESS, USER_LOGOUT
  } from '../actions/actionTypes';

let user = JSON.parse(localStorage.getItem('userData'));
const initialState = user ? { loggedIn: true, user } : {loggedIn : false};

export function authentication(state = initialState, action) {
  switch (action.type) {
    case USER_LOGIN_SUCCESS:
      return {
        loggedIn: true,
        user: action.user
      };
    case USER_LOGOUT:
      return {};
    default:
      return state
  }
}