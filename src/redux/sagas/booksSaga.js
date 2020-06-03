import { takeEvery, call, put } from "@redux-saga/core/effects"
import { FETCH_DATA } from "../actions/types";
import { fetchBooks, setError } from "../actions/booksAction"

import { getBooks } from "../api/index"

function* handleBooksLoad() {
    try {
        const books = yield call(getBooks)
        yield put(fetchBooks(books))
    } catch (e) {
        yield put(setError(e.toString()))
    }
}

export default function* loadBooks() {
    yield takeEvery(FETCH_DATA, handleBooksLoad)
}