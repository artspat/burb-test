import { put, takeEvery, call } from 'redux-saga/effects';
import { addEpisodes, fetchEpisode, initEpisodesLoading, setEpisodesError } from './slice';
import { requestEpisodeById } from './api';

export function* getEpisode({ payload: id }) {
    yield put(initEpisodesLoading());
    try {
        const episodes = yield call(requestEpisodeById, id);
        yield put(addEpisodes(episodes.data));
    } catch {
        yield put(setEpisodesError());
    }
}

export function* watchGetEpisode() {
     yield takeEvery(fetchEpisode().type, getEpisode);
}