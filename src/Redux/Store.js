import { createStore, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import postReducer from './Reducer/Posts';

const middleware = [thunk];

const configureStore = () => {
    return createStore(postReducer, applyMiddleware(...middleware));
}
export default configureStore;