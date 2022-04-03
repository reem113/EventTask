import { createStore, combineReducers } from 'redux';
import postReducer from './Reducer/Posts';

const configureStore = () => {
return createStore(postReducer);
}
export default configureStore;