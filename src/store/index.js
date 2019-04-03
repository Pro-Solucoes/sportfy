/* eslint-disable linebreak-style */
import { creacreStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import sagas from './sagas';
import reducers from './ducks';

const middlewares = [];
const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;
const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);
const createAppropriateStore = process.env.NODE_ENV === 'development' ? console.tron.creacreStore : creacreStore;
const store = createAppropriateStore(reducers, compose(applyMiddleware(...middlewares)));
sagaMiddleware.run(sagas);
export default store;
