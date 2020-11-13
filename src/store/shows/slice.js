import { createAction, createEntityAdapter, createSlice }  from '@reduxjs/toolkit';

const entityAdapter = createEntityAdapter({
    selectId: (item) => item.id,
})

const { reducer, actions } = createSlice({
    name: 'SHOWS',
    initialState: {
        isLoading: true,
        shows: entityAdapter.getInitialState(),
        error: null,
    },
    reducers: {
        initLoading: (state) => {
            state.isLoading = true;
            state.error = null;
        },
        add: (state, action) => {
            state.isLoading = false;
            entityAdapter.addOne(state.shows, action.payload);
        },
        setError: (state) => {
            state.isLoading = false;
            state.error = 'Could not fetch show information';
        },
    },
});

export const fetchShow = createAction('FETCH_SHOW');

export const showsReducer = reducer;
export const getShowById = entityAdapter.getSelectors().selectById;
export const { 
    initLoading: initShowLoading, 
    add: addShow, 
    setError: setShowError,
} = actions;
