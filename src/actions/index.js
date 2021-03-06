import axios from 'axios';

export const FETCH_POSTS = "FETCH_POSTS";
export const CREATE_POSTS = "CREATE_POSTS";
export const FETCH_ONE_POSTS = "FETCH_ONE_POSTS";
const ROOT_URL = "http://reduxblog.herokuapp.com/api";
const API_KEY = "?key=123";
const FINAL_URL = `${ROOT_URL}/posts/${API_KEY}`;

export function fetchPosts() {
    const request = axios.get(FINAL_URL);

    return {
        type: FETCH_POSTS,
        payload: request
    }
}

export function createPosts(props) {
    const request = axios.post(FINAL_URL, props);

    return {
        type: CREATE_POSTS,
        payload: request
    }
}

export function fetchOnePost(id) {
    const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

    return {
        type: FETCH_ONE_POSTS,
        payload: request
    }
}