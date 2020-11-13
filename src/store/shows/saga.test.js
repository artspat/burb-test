import { call, put, takeEvery } from 'redux-saga/effects';
import sagaHelper from 'redux-saga-testing';
import { requestShowById } from './api';
import { getShow, watchGetShow } from './saga';
import { addShow, fetchShow, initShowLoading, setShowError } from './slice';

describe('shows storage', () => {
    describe('watchGetShow', () => {
        const genObject = watchGetShow();

        it('should wait for every fetch show action and call getShow', () => {
            expect(genObject.next().value).toEqual(takeEvery(fetchShow().type, getShow));
        });

        it('should be done on next iteration', () => {
            expect(genObject.next().done).toBeTruthy();
        });
    });

    describe('getShow success flow', () => {
        const data = { field: 'value' };
        const arg = { payload: 5 };
        const it = sagaHelper(getShow(arg));

        it('should initiate loading', (result) => {
            expect(result).toEqual(put(initShowLoading()));
        });

        it('should call api', (result) => {
            expect(result).toEqual(call(requestShowById, arg.payload));
            return { data };
        });

        it('should propagate data to storage', (result) => {
            expect(result).toEqual(put(addShow(data)));
        });

        it('should be done on next iteration', (result) => {
            expect(result).toBeUndefined();
        });
    });

    describe('getShow failure flow', () => {
        const arg = { payload: 5 };
        const it = sagaHelper(getShow(arg));

        it('should initiate loading', (result) => {
            expect(result).toEqual(put(initShowLoading()));
        });

        it('should call api', (result) => {
            expect(result).toEqual(call(requestShowById, arg.payload));
            return new Error('error');
        });

        it('should propagate error to storage', (result) => {
            expect(result).toEqual(put(setShowError()));
        });

        it('should be done on next iteration', (result) => {
            expect(result).toBeUndefined();
        });
    });
});
