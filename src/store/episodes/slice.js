import { createAction, createEntityAdapter, createSlice }  from '@reduxjs/toolkit';

const entityAdapter = createEntityAdapter({
    selectId: (item) => item.id,
})

const { reducer, actions } = createSlice({
    name: 'EPISODES',
    initialState: {
        isLoading: true,
        episodes: entityAdapter.getInitialState(),
        error: null,
    },
    reducers: {
        initLoading: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        add: (state, action) => {
            state.isLoading = false;
            entityAdapter.addOne(state.episodes, action.payload);
        },
        setError: (state) => {
            state.isLoading = false;
            state.error = 'Could not fetch episode information';
        },
    },
});

export const fetchEpisode = createAction('FETCH_EPISODE');

export const episodesReducer = reducer;
export const getEpisodeById = entityAdapter.getSelectors().selectById;
export const { 
    initLoading: initEpisodesLoading, 
    add: addEpisodes, 
    setError: setEpisodesError,
} = actions;
