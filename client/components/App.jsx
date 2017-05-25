import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

import KA from '../kanye.Api'


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

componentDidMount () {
  KA(console.log)
}




  // handleSubmit(e) {
  //   ///api
  // }


   render(){
     return(
       <div>
         <h1 id = 'title' >Kanye-Rest</h1>
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
