import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import * as api from '../kanye.Api'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: '',
      count: 0,
      words: {},
      sentence: "______",
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
    this.countWords(this.state.value)
    this.setState({sentence: this.state.value})
  }


  componentDidMount() {
    api.getKanye((err, words) => {
      this.setState({
        words: words
      })
    })
  }

  countWords(search) {
    var result = this.state.words[search]
    this.setState ({
      count: result | 0
    })
  }



render() {
  return (
    <div id='container'>
      <div id='title'>Kanye-Rest</div>
      <div id='content'>

        <form id='searchBar'>
          <input type="text" id='search' placeholder="Search" onChange={this.handleChange}/>
          <button id='btn' onClick={this.handleSubmit}>.
          </button>
        </form>
        <ShowKanyeCount text={this.state.sentence} count={this.state.count}/>
      </div>
    </div>

  )
}

}

class ShowKanyeCount extends React.Component {
  render() {
    return (
      <div id="textbox"><p>
        Kanye used the word {this.props.text} <br></br> {this.props.count} times.
      </p>
      </div>
    )
  }
}
