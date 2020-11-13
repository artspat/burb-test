import { createSelector } from '@reduxjs/toolkit';

const getShowsState = ({ shows }) => shows;

export const isShowLoadingSelector = createSelector(getShowsState, ({ isLoading }) => isLoading);
export const showsSelector = createSelector(getShowsState, ({ shows }) => shows);
export const showsErrorSelector = createSelector(getShowsState, ({ error }) => error);
