import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

export default class App extends React.Component {
  constructor (props) {
    super (props)
  }

  render () {
    return (
      <div className='container'>
        <div id='title'>KanyeRest</div>
        <form id='searchBar'>
          <input type="text" id='search' placeholder="Search" />
          <button id='btn'>Button</button>
        </form>
        <div id='textbox'>Textbox</div>
      </div>
    )
  }
}
