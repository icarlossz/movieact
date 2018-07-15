import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Detail } from './pages/Detail'
import { Home } from './pages/Home'
import { Error } from './pages/Error'
import styled from 'styled-components'
import 'bulma/css/bulma.css'

class App extends Component {
  render() {
    return (
      <AppContainer>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/detail/:movieId' component={Detail} />
          <Route component={Error} />
        </Switch>
      </AppContainer>
    );
  }
}

const AppContainer = styled.div`
  text-align: center;
  padding: 10px;
  margin-top: 20px;
`;

export default App
