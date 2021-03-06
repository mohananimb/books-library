import { call, put } from "redux-saga/effects"
import { fetchBooks, fetchFav } from "../api"
import { setData, setError, setFavBooks, setFavBooksError } from "../actions"

export function* handleBooksLoad() {
    try {
        const books = yield call(fetchBooks)

        yield put(setData(books))

    } catch (error) {
        yield put(setError(error.toString()))
    }
}

export function* handleFavBooks() {
    try {
        const favBooks = yield call(fetchFav)
        
        yield put(setFavBooks(favBooks))

    } catch (error) {
        
        yield put(setFavBooksError(error.toString()))
    }
}



