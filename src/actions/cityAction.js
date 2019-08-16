import * as actionTypes from './actionTypes';
  
export function setCity(city) {
    return { type: actionTypes.SET_CITY, city };
}