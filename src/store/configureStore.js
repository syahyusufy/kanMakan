import { createStore } from 'redux';
import reducers from '../reducers/reducers';

export default function configureStore(initialState) {
    return createStore(reducers, initialState);
}