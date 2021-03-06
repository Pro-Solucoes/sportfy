/* eslint-disable import/no-unresolved */
/* eslint-disable react/button-has-type */
/* eslint-disable linebreak-style */
import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Creators as ErrorActions } from '../../store/ducks/error';
import CloseIcon from '../../assets/images/close.svg';
import { Container } from './styles';

const ErroBox = ({ error: { message, visible }, hideError }) => visible && (
<Container>
  <p>{message}</p>
  <button onClick={hideError}>
    <img src={CloseIcon} alt="Fechar" />
  </button>
</Container>
);

ErroBox.PropTypes = {
  hideError: PropTypes.func.isRequired,
  error: PropTypes.shape({
    visible: PropTypes.bool,
    message: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = state => ({
  error: state.error,
});

const mapDispatchToProps = dispatch => bindActionCreators(ErrorActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ErroBox);
