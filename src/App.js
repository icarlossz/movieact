import React, { Component } from 'react'
import styled from 'styled-components'
import { Detail } from './pages/Detail'
import { Home } from './pages/Home'
import 'bulma/css/bulma.css'

class App extends Component {
  render() {
    const url = new URL(document.location)
    const Page = url.searchParams.has('id')
     ? <Detail id={url.searchParams.get('id')} />
     : <Home />

    return (
      <AppContainer>
        { Page }
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
