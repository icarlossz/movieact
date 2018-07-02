import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const API_KEY = '835c654c'

export class Detail extends Component {
  static propTypes = {
    id: PropTypes.string
  }

  state = {
    movie: {}
  }

  fetchMovie({ id }) {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then(res => res.json())
      .then(movie => {
        console.log({movie})
        this.setState({ movie })
      })
  }

  goBack () {
    window.history.back()
  }

  componentDidMount() {
    const { id } = this.props
    this.fetchMovie({ id })
  }

  render() {
    const { Title, Year, imdbRating, Plot, Poster } = this.state.movie

    return (
      <div>
        <Button onClick={this.goBack}>Back</Button>
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

const Button = styled.button`
  background: #f55;
  padding: 10px 25px;
  border: none;
  color: #fff;
  font-size: 15px;
  text-transform: uppercase;
`;

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