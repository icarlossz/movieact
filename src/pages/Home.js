import React, { Component } from 'react'
import { SearchForm } from '../components/SearchForm'
import { MoviesList } from '../components/MoviesList'
import styled from 'styled-components'

export class Home extends Component {
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
      <div>
        <Title rel="preload" src="/movieact.png" alt="Movieact Title"/>
        <SearchFormWrapper>
          <SearchForm onResults={this.handleResults} />
        </SearchFormWrapper>
        {this.state.usedSearch
          ? this.renderResults()
          : <small>Search your movie in the form! </small>
        }
      </div>
    )
  }
}

const SearchFormWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

const Title = styled.img`
  width: 500px;
  max-width: 90%;
  margin-bottom: 20px;
`;