/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Loading from '../../components/Loading';
import { Container, Header, Songlits } from './styles';
import { Creators as PlaylistDetailsActions } from '../../store/ducks/playlistDetails';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

class Playlist extends Component {
  componentDidMount() {
    this.loadPlaylistDetails();
  }

  loadPlaylistDetails = () => {
    const { id } = this.props.match.params;

    this.props.getPlaylistDetailsRequest(id);
  };

  renderDetais = () => (
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
        </tbody>
      </Songlits>
    </Container>
  );

  render() {
    return this.props.playlistDetails.loading ? (
      <Container loading>
        <Loading />
      </Container>
    ) : (
      this.renderDetais()
    );
  }
}

const mapStateToProps = state => ({
  playlistDetails: state.playlistDetails,
});
const mapDispatchToProps = dispatch => bindActionCreators(PlaylistDetailsActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Playlist);
