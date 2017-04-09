import {FETCH_POSTS} from '../actions/index';
import {FETCH_ONE_POSTS} from '../actions/index';

const INITIAL_ACTION = {all: [], post: null};

export default function (state = INITIAL_ACTION, action) {
    switch (action.type) {
        case FETCH_POSTS:
            return {...state, all: action.payload.data};
        case FETCH_ONE_POSTS:
            console.log('action here : ', action);
            return {...state, post: action.payload.data};
        default:
            return state;
    }
}