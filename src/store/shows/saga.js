import { put, takeEvery, call } from 'redux-saga/effects';
import { fetchShow, addShow, initShowLoading, setShowError } from './slice';
import { requestShowById } from './api';

export function* getShow({ payload: id }) {
    yield put(initShowLoading());
    try {
        const show = yield call(requestShowById, id);
        yield put(addShow(show.data));
    } catch {
        yield put(setShowError());
    }
}

export function* watchGetShow() {
     yield takeEvery(fetchShow().type, getShow);
}