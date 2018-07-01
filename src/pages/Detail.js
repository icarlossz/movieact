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

  goBack() {
    window.history.back()
  }

  componentDidMount() {
    const { id } = this.props
    this.fetchMovie({ id })
  }

  render() {
    const { Title, Year, imbdRating, Plot, Poster } = this.state.movie

    return (
      <MovieDetail>
        <button onClick={this.goBack()}>Volver</button>
        <h1>{Title}</h1>
        <img src={Poster} alt={Title}/>
        <p>{Plot}</p>
        <p>{Year}</p>
        <p>{imbdRating}</p>
      </MovieDetail>
    )
  }
}

const MovieDetail = styled.div`
  text-align: center;
  width: 90%;
  margin: 0 auto;
`;