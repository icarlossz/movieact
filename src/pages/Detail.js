import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ButtonBack } from '../components/ButtonBack'
import styled from 'styled-components'

const API_KEY = '835c654c'

export class Detail extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string
    })
  }

  state = {
    movie: {}
  }

  fetchMovie({ id }) {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then(res => res.json())
      .then(movie => {
        console.log({movie})
        this.setState({ movie })
      })
  }

  componentDidMount() {
    const { movieId } = this.props.match.params
    this.fetchMovie({ id: movieId })
  }

  render() {
    const { Title, Year, imdbRating, Plot, Poster } = this.state.movie

    return (
      <div>
        <ButtonBack />
        <MovieDetail>
          <MovieDetailTitle>{Title}</MovieDetailTitle>
          <MovieDetailImg src={Poster} alt={Title}/>
          <p>{Plot}</p>
          <p><Bold>Year:</Bold> {Year}</p>
          <p><Bold>Rating IMDB:</Bold> {imdbRating}</p>
        </MovieDetail>
      </div>
    )
  }
}

const MovieDetail = styled.div`
  text-align: center;
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
`;

const MovieDetailTitle = styled.h1`
  font-size: 28px;
  font-weight: 700;
  text-transform: uppercase;
`;

const MovieDetailImg = styled.img`
  margin: 40px 0;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.3);
  transition: .3s;
  &:hover {
    transform: translate3d(5px,-5px,-30px);
  }
`;

const Bold = styled.span`
  font-weight: 700;
`;