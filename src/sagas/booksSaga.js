import { call, all, put } from "redux-saga/effects"
import { fetchBooks } from "../api/index"
import { fetchFav } from "../api/index"
import { setData, setError, favData } from "../actions"

export function* handleBooksLoad() {
    try {
        const books = yield call(fetchBooks)

        yield put(setData(books, []))

    } catch (error) {
        yield put(setError(error.toString()))
    }
}

export function* handleFavBooks() {
    try {
        const favBooks = yield call(fetchFav)
        yield put(favData(favBooks))

    } catch (error) {
        yield put(setError(error.toString()))
    }
}



