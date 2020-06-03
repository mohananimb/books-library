import {
    FETCH_DATA,
    FETCH_FAIL,
    LOAD_DATA
} from "../actions/types";

const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case FETCH_DATA: return false
        case FETCH_FAIL: return false
        case LOAD_DATA: return true

        default: return state
    }
}

export default loadingReducer