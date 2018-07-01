import React, { Component } from 'react';
import { Title } from './components/Title'
import { SearchForm } from './components/SearchForm'
import { MoviesList } from './components/MoviesList';
import styled from 'styled-components';
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
    return (
      <AppContainer>
        <Title>Movieact</Title>
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
  padding: 30px;
`;

const SearchFormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export default App
