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
                  id={movie.imdbID}
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
  justify-content: space-around;
`;

const MoviesListItem = styled.div`
  width: 24%;
  height: auto;
  border-radius: 5px;
  margin: 15px 0;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
  transition: .3s;
  &:hover {
    transform: translate3d(0,-5px,-30px);
  }
  @media screen and (max-width: 576px) {
    width: 47%;
  }
`;