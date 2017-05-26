import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'


import * as api from '../kanye.Api'


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

componentDidMount () {
  api.getKanye(console.log)
}




  // handleSubmit(e) {
  //   ///api
  // }


   render(){
     return(
       <div id='container'>
         <div id='title' >Kanye-Rest</div>
         <div id='content'>
           <form id='searchBar'>
             <input type="text" id='search' placeholder="Search" />
             <button id='btn'>Button</button>
           </form>
           <div id='textbox'>Textbox</div>
         </div>
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
