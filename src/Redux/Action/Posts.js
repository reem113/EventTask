import { SET_POSTS, SET_POSTS_SUCCESS } from '../types';
import axios from 'axios';

const baseUrl = 'https://jsonplaceholder.typicode.com/posts';


export const getPosts = () => {
    console.log('getposts func is succ called');
    return async (dispatch) => {
        dispatch({ type: SET_POSTS });
        console.log('setposts action');
        await axios.get(baseUrl)

            .then((response) => {
                getPostsSuccess(dispatch, response?.data)
            }).catch((err) => alert('error'))
    }
}



const getPostsSuccess = (dispatch, posts) => {
    console.log('dispatch is starting');
    dispatch({
        type: SET_POSTS_SUCCESS,
        payload: posts
    })
    console.log('dispatch is well done');
}