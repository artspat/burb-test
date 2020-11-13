import {all} from 'redux-saga/effects'
import { watchGetEpisode } from './episodes';
import { watchGetShow } from './shows';

export const root = function* rootSaga() {
    yield all([
        watchGetShow(),
        watchGetEpisode(),
    ]);
};
