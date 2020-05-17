import {
    USERDATA
} from "../actions/types"

const initialState = {
    userData: {}
}

export default function (state = initialState, action) {

    switch (action.type) {
        case USERDATA:
            return {
                ...state,
                userData: action.payload
            }

            default:
                return state
    }

}