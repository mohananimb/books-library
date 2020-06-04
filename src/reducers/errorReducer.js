import {
    DATA
} from "../constants";

const errorReducer = (state = null, action) => {
    switch (action.type) {
        case DATA.LOAD_FAILURE: return action.error
        // case DATA.LOAD:
        case DATA.LOAD_SUCCESS: return null

        default: return state
    }
}

export default errorReducer