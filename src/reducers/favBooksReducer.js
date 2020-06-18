import { DATA } from "../constants"

export default function (state = [], action) {
   
    switch (action.type) {
        case DATA.FAVORITE:
             return [
            ...state,
            ...action.data
        ];
        default: return state
    }
}

