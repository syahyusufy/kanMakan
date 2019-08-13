import { combineReducers } from 'redux';
import {
  SET_CITY,
} from '../actions/actionTypes';

const city = 1

function cityChange(state = city, action) {
  switch (action.type) {
    case SET_CITY:
      return action.city;
    default:
      return state;
  }
}

const cityResto = combineReducers({
  cityChange
});

export default cityResto;
