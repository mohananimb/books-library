import {
    LOGDATA
} from "../actions/types"

const initialState = {
    logUser : {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case LOGDATA:
            return {
                ...state,
                logUser: action.payload
            }
            default:
                return state
    }
}