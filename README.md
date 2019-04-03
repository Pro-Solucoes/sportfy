### `Estilizando o player`

importar o rc-slider

### `Estilizando pagina de navegaçao`

importar o react-router-dom

### `Configurando o Reactotron`

importar o reactotron-react-js reactotron-redux reactotron-redux-saga 3.0.0

### Configuraçâo do Redux & Saga

Importe o `redux react-redux redux-saga`
Crie o store/index.js, store/ducks/index.js e store/saga/index.js

## store/index

```
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
```
