/* eslint-disable linebreak-style */
import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './config/reactotron';

import GlobalStyle from './styles/global';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';
import ErrorBox from './components/ErrorBox';
import { Wrapper, Container, Content } from './styles/componets';
import Routes from './routes';
import store from './store';

const App = () => (
  <Provider store={store}>
    <Fragment>
      <BrowserRouter>
        <GlobalStyle />
        <Wrapper>
          <Container>
            <Sidebar />
            <Content>
              <ErrorBox />
              <Header />
              <Routes />
            </Content>
          </Container>
          <Player />
        </Wrapper>
      </BrowserRouter>
    </Fragment>
  </Provider>
);
export default App;
