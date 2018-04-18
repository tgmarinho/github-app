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

    }
  }

  render() {
    return (
     <AppContent
     
     />
    )
  }

}


  export default App;