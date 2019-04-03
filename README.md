### `Estilizando o player`

importar o rc-slider

### `Estilizando pagina de navegaçao`

importar o react-router-dom

### `Configurando o Reactotron`

importar o reactotron-react-js reactotron-redux reactotron-redux-saga 3.0.0

### `Configuraçâo do Redux & Saga`

Importe o `redux react-redux redux-saga`
Crie o store/index.js, store/ducks/index.js e store/saga/index.js

## store/index

```
/* eslint-disable linebreak-style */
import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './ducks';
import sagas from './sagas';

const middlewares = [];

const sagaMonitor = process.env.NODE_ENV === 'development' ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const tronMiddleware = process.env.NODE_ENV === 'development' ? console.tron.createEnhancer : () => {};

const store = createStore(
  reducers,
  compose(
    applyMiddleware(...middlewares),
    tronMiddleware(),
  ),
);

sagaMiddleware.run(sagas);

export default store;

```

## 'App'

```
import {Provider} from 'react-redux';
import store from './store';
```

## 'ducks/index'

```
import { combineReducers } from 'redux';

export default combineReducers({
  example: () => [],
});
```

## 'sagas/index'

```
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([]);
}
```

### Duck de Playlist

Crie o arquivo ducks/playlist.js

## ducks/playlist.js

```
export const Types = {
  GET_REQUEST: 'playlists/GET_REQUEST',
  GET_SUCCESS: 'playlists/GET_SUCCESS',
};

const INITIAL_STATE = {
  data: [],
  loading: false,
};

export default function playlists(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.GET_REQUEST:
      return { ...state, loading: true };
    case Types.GET_SUCCESS:
      return { ...state, loading: false, data: action.payload.data };
    default:
      return state;
  }
}

export const Creators = {
  getPlaylistsRequest: () => ({ type: Types.GET_REQUEST }),
  getPlaylistsSuccess: data => ({ type: Types.GET_SUCCESS, payload: { data } }),
};
```

Deve alterar o arquivo ducks/index para receber o redux

# ´ducks/index´

```
import { combineReducers } from 'redux';
import playlists from './playlists';

export default combineReducers({
  playlists,
});
```
