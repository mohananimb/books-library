import { DATA } from "../constants/index"

export const loadData = () => ({
    type: DATA.LOAD
})

export const favData = data => ({
    type: DATA.FAVORITE,
    data
})

export const setData = data => ({
    type: DATA.LOAD_SUCCESS,
    data
})

export const setError = error => ({
    type: DATA.LOAD_FAILURE,
    error
})