/* eslint-disable linebreak-style */
import React, { Fragment } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './config/reactotron';

import GlobalStyle from './styles/global';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import Header from './components/Header';
import { Wrapper, Container, Content } from './styles/componets';
import Routes from './routes';

const App = () => (
  <Fragment>
    <BrowserRouter>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <Sidebar />
          <Content>
            <Header />
            <Routes />
          </Content>
        </Container>
        <Player />
      </Wrapper>
    </BrowserRouter>
  </Fragment>
);
export default App;
