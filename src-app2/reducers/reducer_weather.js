import {FETCH_WEATHER} from '../actions/index';

//ES6 syntax of declaring undefined variable as null
export default function (state = [], action) {
    switch (action.type) {
        case FETCH_WEATHER :
            return state.concat([action.payload.data]);
    }

    return state;
}