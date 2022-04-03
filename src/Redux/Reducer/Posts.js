import { SET_POSTS } from '../types';
const initialState = {
    posts: []
};
const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_POSTS:
            return {

                ...state,
                posts: action.payload
            };
        default:
            return state;
    }
}
export default postReducer;