import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Movie } from './Movie'
import styled from 'styled-components';

export class MoviesList extends Component {
  static propTypes = {
    movies: PropTypes.array
  }

  render() {
    const { movies } = this.props
    return (
      <MoviesListContainer>
        {movies.map(movie => {
            return (
              <MoviesListItem key={movie.imdbID}>
                <Movie
                  title={movie.Title}
                  year={movie.Year}
                  poster={movie.Poster}
                />
              </MoviesListItem>
            )
          })}
      </MoviesListContainer>
      )
  }
}

const MoviesListContainer = styled.div`
  margin: 1em;
  display: flex;
  flex-wrap: wrap;
`;

const MoviesListItem = styled.div`
  width: 25%;
  padding: 10px;
  height: auto;
  @media screen and (max-width: 776px) {
    width: 50%;
  }
`;