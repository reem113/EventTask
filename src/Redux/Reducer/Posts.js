import { SET_POSTS, SET_POSTS_SUCCESS } from '../types';
const initialState = {
    posts: []
};
const postReducer = (state = initialState, action) => {
    console.log('reducer is ok');
    switch (action.type) {
        case SET_POSTS:
            console.log('posts reducer is ok');
            return { ...state };
        case SET_POSTS_SUCCESS:
            console.log('postsSucc reducer is ok');
            return {

                ...state,
                posts: action.payload
            };
        default:
            return state;
    }
}
export default postReducer;