import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import * as api from '../kanye.Api'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      count: '',
      words: {}
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(evt) {
    console.log(evt.target.value+" at handleChange")
    this.setState({value: evt.target.value})
  }

  handleSubmit(evt) {
    console.log(this.state.value+" at handleSubmit");
    evt.preventDefault()
    this.printWords(this.state.value)
    this.setState({value: this.state.value})
  }

  componentDidMount() {
    api.getKanye((err, words) => {
      this.setState({
        words: words
      })
    })
  }

  printWords(search) {
    var result = this.state.words[search]
    this.setState ({
      count: result
    })
  }



render() {
  return (
    <div id='container'>
      <div id='title'>Kanye-Rest</div>
      <div id='content'>

        <form id='searchBar'>
          <input type="text" id='search' placeholder="Search" onChange={this.handleChange}/>
          <button id='btn' onClick={this.handleSubmit}>Button</button>
        </form>
        <ShowKanyeCount text={this.state.value} count={this.state.count}/>
      </div>
    </div>

  )
}

}

class ShowKanyeCount extends React.Component {
  render() {
    return (
      <div id="textbox"><p>
        {this.props.text} was used {this.props.count} times by Kanye.
      </p>
      </div>
    )
  }
}

//  <form id = 'searchBar' onSubmit={this.handleSubmit.bind(this)}>
//    <input type = 'text' id = 'search'>
//
//    </input>
//
//
//
//  </form>
