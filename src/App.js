import React, { Component } from 'react'
import { SearchForm } from './components/SearchForm'
import { MoviesList } from './components/MoviesList'
import { Detail } from './pages/Detail'
import styled from 'styled-components'
import 'bulma/css/bulma.css'

class App extends Component {
  state = {
    usedSearch: false,
    results: []
  }

  handleResults = (results) => {
    this.setState({ results, usedSearch: true })
  }

  renderResults = () => {
    return this.state.results.length === 0
      ? <p>No results</p>
      : <MoviesList movies={this.state.results} />
  }

  render() {
    const url = new URL(document.location)
    const hasId = url.searchParams.has('id')

    if (hasId) {
      return <Detail id={url.searchParams.get('id')} />
    }

    return (
      <AppContainer>
        <Title rel="preload" src="/movieact.png" alt="Movieact Title"/>
        <SearchFormWrapper>
          <SearchForm onResults={this.handleResults} />
        </SearchFormWrapper>
        {this.state.usedSearch
          ? this.renderResults()
          : <small>Search your movie in the form! </small>
        }
      </AppContainer>
    );
  }
}

const AppContainer = styled.div`
  text-align: center;
  padding: 10px;
  margin-top: 20px;
`;

const SearchFormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.img`
  width: 500px;
  max-width: 90%;
  margin-bottom: 20px;
`;

export default App
