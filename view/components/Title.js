import ReactDOM from 'react-dom'
import React from 'react'
import { saveMovies, getMovies } from '../../controller/controller.js'

export default class Title extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      added: false
    }
    this.movie = {
      title: undefined,
      genre: undefined,
      actors: undefined,
      year: undefined,
      rating: undefined
    }
    this.addMovie = this.addMovie.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
    this.handleGenreChange = this.handleGenreChange.bind(this)
    this.handleYearChange = this.handleYearChange.bind(this)
    this.handleActorsChange = this.handleActorsChange.bind(this)
    this.handleRatingChange = this.handleRatingChange.bind(this)
  }

  handleTitleChange (e) {
    this.movie.title = e.target.value
  }

  handleGenreChange (e) {
    this.movie.genre = e.target.value
  }

  handleYearChange (e) {
    this.movie.year = e.target.value
  }

  handleActorsChange (e) {
    this.movie.actors = e.target.value
  }

  handleRatingChange (e) {
    this.movie.rating = e.target.value
  }

  addMovie () {
    let currentMovies = getMovies()
    if (!currentMovies) { currentMovies = [] }
    currentMovies.push(this.movie)
    saveMovies(currentMovies)
  }

  render () {
    return (
      <div className='title row'>
        <div className='col-md-8 title__logo'>
          <h1>My Flix</h1>
        </div>
        <div className='col-md-4 title__search'>
          <button data-toggle='modal' data-target='#myModal'>Add Movie</button>
          <input type='text' placeholder='Search' />
          <select>
            <option value='genre'>Genre</option>
            <option value='actors'>Actors</option>
            <option value='title'>Title</option>
            <option value='year'>Year</option>
            <option value='rating'>Rating</option>
          </select>
        </div>
        <div className='modal fade' id='myModal' tabindex='-1' role='dialog' aria-labelledby='myModalLabel'>
          <div className='modal-dialog' role='document'>
            <div className='modal-content'>
              <div className='modal-header'>
                <button type='button' className='close' data-dismiss='modal' aria-label='Close'><span aria-hidden='true'>&times;</span></button>
                <h4 className='modal-title' id='myModalLabel'>Add A Movie To Your Collection</h4>
              </div>
              <div className='modal-body'>
                <div className='input-group'>
                  <input value={this.movie.title} className='form-control' onChange={this.handleTitleChange} type='text' placeholder='Title' />
                </div>
                <div className='input-group'>
                  <input value={this.movie.year} className='form-control' onChange={this.handleYearChange} type='text' placeholder='Year' />
                </div>
                <div className='input-group'>
                  <input value={this.movie.genre} className='form-control' type='text' onChange={this.handleGenreChange} placeholder='Genre' />
                </div>
                <div className='input-group'>
                  <input value={this.movie.actors} className='form-control' type='text' onChange={this.handleActorsChange} placeholder='Actors' />
                </div>
                <div className='input-group'>
                  <input value={this.movie.rating} className='form-control' type='text' onChange={this.handleRatingChange} placeholder='Rating' />
                </div>
              </div>
              <div className='modal-footer'>
                <button type='button' className='btn btn-default' data-dismiss='modal'>Close</button>
                <button type='button' className='btn btn-primary' data-dismiss='modal' onClick={this.addMovie}>Add Movie</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
