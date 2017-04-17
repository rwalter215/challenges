import ReactDOM from 'react-dom'
import React from 'react'

export default class MovieCard extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='movie-card'>
        <h4>{this.props.title}</h4>
        <p>{this.props.year}</p>
        <p>{this.props.genre}</p>
        <p>{this.props.actors}</p>
        <h6>Rating: {this.props.rating} of 5 stars</h6>
      </div>
    )
  }
}
