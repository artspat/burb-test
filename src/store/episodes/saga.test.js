import { call, put, takeEvery } from 'redux-saga/effects';
import sagaHelper from 'redux-saga-testing';
import { requestEpisodeById } from './api';
import { getEpisode, watchGetEpisode } from './saga';
import { addEpisodes, fetchEpisode, initEpisodesLoading, setEpisodesError } from './slice';

describe('episodes storage', () => {
    describe('watchGetEpisode', () => {
        const genObject = watchGetEpisode();

        it('should wait for every fetch episodes action and call getEpisode', () => {
            expect(genObject.next().value).toEqual(takeEvery(fetchEpisode().type, getEpisode));
        });

        it('should be done on next iteration', () => {
            expect(genObject.next().done).toBeTruthy();
        });
    });

    describe('getEpisode success flow', () => {
        const data = { field: 'value' };
        const arg = { payload: 5 };
        const it = sagaHelper(getEpisode(arg));

        it('should initiate loading', (result) => {
            expect(result).toEqual(put(initEpisodesLoading()));
        });

        it('should call api', (result) => {
            expect(result).toEqual(call(requestEpisodeById, arg.payload));
            return { data };
        });

        it('should propagate data to storage', (result) => {
            expect(result).toEqual(put(addEpisodes(data)));
        });

        it('should be done on next iteration', (result) => {
            expect(result).toBeUndefined();
        });
    });

    describe('getEpisode failure flow', () => {
        const arg = { payload: 5 };
        const it = sagaHelper(getEpisode(arg));

        it('should initiate loading', (result) => {
            expect(result).toEqual(put(initEpisodesLoading()));
        });

        it('should call api', (result) => {
            expect(result).toEqual(call(requestEpisodeById, arg.payload));
            return new Error('error');
        });

        it('should propagate error to storage', (result) => {
            expect(result).toEqual(put(setEpisodesError()));
        });

        it('should be done on next iteration', (result) => {
            expect(result).toBeUndefined();
        });
    });
});
