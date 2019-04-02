/* eslint-disable linebreak-style */
import React from 'react';

import {
  Container, Title, List, Playlist,
} from './styles';

const Browse = () => (
  <Container>
    <Title>Navegar</Title>
    <List>
      <Playlist to="/playlists/1">
        <img
          src="https://static1.purebreak.com.br/articles/9/84/40/9/@/314437-djonga-lanca-ladrao-terceiro-album-da-diapo-2.jpg"
          alt="Ladrão"
        />
        <strong>Album Ladrão</strong>
        <p>Album ladão de Djonga</p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img
          src="http://miojoindie.com.br/wp-content/uploads/2018/03/29133776_2115891518642398_7573193613566401578_n.jpg"
          alt="O menino que queria ser deus"
        />
        <strong>Album O menino que queria ser deus</strong>
        <p>Album O menino que queria ser deus de Djonga</p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img src="https://i.ytimg.com/vi/gjgcMd0mewk/maxresdefault.jpg" alt="Heresia" />
        <strong>Album Ladrão</strong>
        <p>Album Heresia de Djonga</p>
      </Playlist>

      <Playlist to="/playlists/1">
        <img
          src="http://pm1.narvii.com/6854/fdf0ec70a2bfd1985ff77c96172a344943c65280v2_00.jpg"
          alt="Perfil"
        />
        <strong>Album Perfil</strong>
        <p>Album perfil de Djonga</p>
      </Playlist>
    </List>
  </Container>
);

export default Browse;
