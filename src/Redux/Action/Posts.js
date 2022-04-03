import { SET_POSTS } from '../types';
export function getPosts(posts) {
return {
type: SET_POSTS,
payload: posts
}
}