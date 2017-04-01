import FETCH_POSTS from '../actions/index';
const INITIAL_ACTION = {all: [], post: null};

export default (state = [], action) => {
    switch (action.type) {
        case FETCH_POSTS:
            return this.setState(all = action.payload.data);
    }

    return state;
}