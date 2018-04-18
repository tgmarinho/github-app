import React, { Component } from 'react';
import './App.css';

import AppContent from './components/app-content';

/** Controla o estado e passa as informações 
  de estado para os outros componentes via props
  **/

class App extends Component {

  constructor() {
    super();
    this.state = {
      userInfo: {
        name: "Thiago Marinho",
        photo: 'https://avatars2.githubusercontent.com/u/380327?v=4',
        login: 'tgmarinho',
        repos: 123,
        followers: 19,
        following: 100
      },
      repos: [{
        name: 'Repo',
        link: '#'
      }],
      starred: [{
        name: 'Repo',
        link: '#'
      }]

    }
  }

  render() {
    return (
     <AppContent 
      userInfo={this.state.userInfo}
      repos={this.state.repos}
      starred={this.state.starred}
     
     />
    )
  }

}


  export default App;