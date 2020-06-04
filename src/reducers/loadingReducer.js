import {
    DATA
} from "../constants";

const loadingReducer = (state = false, action) => {
    switch (action.type) {
        case DATA.LOAD_SUCCESS: return false
        case DATA.LOAD_FAILURE: return false
        case DATA.FAVORITE: return false
        case DATA.LOAD: return true

        default: return state
    }
}

export default loadingReducer