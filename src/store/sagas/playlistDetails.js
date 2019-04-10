/* eslint-disable linebreak-style */
import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as PlaylitDetailsActions } from '../ducks/playlistDetails';
import { Creators as ErrorActions } from '../ducks/error';

export function* getPlaylistDetails(action) {
  try {
    const response = yield call(api.get, `/playlists/${action.payload.id}?_embed=songs`);

    yield put(PlaylitDetailsActions.getPlaylistDetailsSuccess(response.data));
  } catch (err) {
    yield put(ErrorActions.setError('Não foi possivel obter os detalhes da playlist'));
  }
}
