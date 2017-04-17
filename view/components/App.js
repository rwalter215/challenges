import ReactDOM from 'react-dom'
import React from 'react'
import Title from './Title'
import MovieGrid from './MovieGrid'

export default class App extends React.Component {
  constructor (props) {
    super(props)
  }

  reload () {

  }

  render () {
    return (
      <div className='app'>
        <Title />
        <MovieGrid />
      </div>
    )
  }
}
