/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
import React from 'react';
import { Container, Header, Songlits } from './styles';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

const Playlist = () => (
  <Container>
    <Header>
      <img
        src="https://static1.purebreak.com.br/articles/9/84/40/9/@/314437-djonga-lanca-ladrao-terceiro-album-da-diapo-2.jpg"
        alt="Sou Ladrão"
      />
      <div>
        <span>PLAYLIST</span>
        <h1>Ladrão</h1>
        <p>10 músicas</p>
        <button>PLAY</button>
      </div>
    </Header>
    <Songlits cellPadding={0} cellSpacing={0}>
      <thead>
        <th />
        <th>Título</th>
        <th>Artista</th>
        <th>Album</th>
        <th>
          <img src={ClockIcon} alt="Duração" />
        </th>
      </thead>
      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>HAT-TRICK</td>
          <td>Djonga</td>
          <td>Ladrão</td>
          <td>4:19</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>BENÉ</td>
          <td>Djonga</td>
          <td>Ladrão</td>
          <td>3:49</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>LEAL</td>
          <td>Djonga</td>
          <td>Ladrão</td>
          <td>3:33</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>DEUS E O DIABO NA TERRA DO SOL</td>
          <td>Djonga</td>
          <td>Ladrão</td>
          <td>6:27</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>TIPO(feat. Mc Kaio)</td>
          <td>Djonga</td>
          <td>Ladrão</td>
          <td>3:49</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>Ladrão</td>
          <td>Djonga</td>
          <td>Ladrão</td>
          <td>4:22</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>BENÇA</td>
          <td>Djonga</td>
          <td>Ladrão</td>
          <td>3:44</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>VOZ (feat. Doug Now e Chris MC)</td>
          <td>Djonga</td>
          <td>Ladrão</td>
          <td>5:12</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>MLK 4TR3V1D0</td>
          <td>Djonga</td>
          <td>Ladrão</td>
          <td>1:16</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Adicionar" />
          </td>
          <td>FALCÃO</td>
          <td>Djonga</td>
          <td>Ladrão</td>
          <td>3:42</td>
        </tr>
      </tbody>
    </Songlits>
  </Container>
);

export default Playlist;
