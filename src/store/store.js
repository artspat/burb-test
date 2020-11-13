import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { root as rootSaga } from './saga';
import { showsReducer } from './shows';
import { episodesReducer } from './episodes';

const sagaMiddleware = createSagaMiddleware()
const createRootReducer = () => combineReducers({
  shows: showsReducer,
  episodes: episodesReducer,
});

export const store = createStore(
  createRootReducer(),
  {},
  composeWithDevTools(applyMiddleware(sagaMiddleware)),
);

sagaMiddleware.run(rootSaga);
