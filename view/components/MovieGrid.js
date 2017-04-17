import ReactDOM from 'react-dom'
import React from 'react'
import MovieCard from './MovieCard'
import { saveMovies, getMovies, clearStorage } from '../../controller/controller.js'

export default class MovieGrid extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      movies: []
    }
  }

  componentDidMount () {
    var gottenMovies = getMovies()
    this.setState({movies: gottenMovies})
  }

  render () {
    var elements = []
    this.state.movies.forEach((movie) => {
      elements.push(<MovieCard title={movie.title} genre={movie.genre} rating={movie.rating} actors={movie.actors} year={movie.year} />)
    })

    return (
      <div className='movie-grid'>
        <MovieCard title='The Matrix' genre='Action' rating='4.5' actors='Keanue Reeves' year='1999' />
        <MovieCard title='Fight Club' genre='Thriller' rating='4.5' actors='Brad Pitt' year='1999' />
        <MovieCard title='300' genre='War' rating='4.5' actors='Gerard Butler' year='2006' />
        { elements }
      </div>
    )
  }
}
