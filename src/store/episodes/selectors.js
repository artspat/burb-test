import { createSelector } from '@reduxjs/toolkit';

const getEpisodesState = ({ episodes }) => episodes;

export const isEpisodesLoadingSelector = createSelector(getEpisodesState, ({ isLoading }) => isLoading);
export const episodesSelector = createSelector(getEpisodesState, ({ episodes }) => episodes);
export const episodesErrorSelector = createSelector(getEpisodesState, ({ error }) => error);
