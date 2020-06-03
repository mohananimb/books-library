import {
    FETCH_DATA,
    FAVORITE,
    USERDATA,
    FETCH_FAIL,
    LOAD_DATA
} from "../actions/types";

const errorReducer = (state = null, action) => {
    switch (action.type) {
        case FETCH_FAIL: return action.error
        case LOAD_DATA: return null

        default: return state
    }
}

export default errorReducer