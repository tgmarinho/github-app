import React, { Component } from 'react';
import './App.css';
import ajax from '@fdaciuk/ajax'


import AppContent from './components/app-content';

/** Controla o estado e passa as informações 
  de estado para os outros componentes via props
  **/
class App extends Component {

  constructor() {
    super();
    this.state = {
      userInfo: null,
      repos: [],
      starred: []

    }
  }

  handleSearch(e) {
    const value = e.target.value;
    const keyCode = e.which || e.keyCode
    const ENTER = 13;

    if (keyCode === ENTER) {
      ajax().get(`https://api.github.com/users/${value}`)
        .then((result) => {
          this.setState({
            userInfo: {
              username: result.name,
              photo: result.avatar_url,
              login: result.login,
              repos: result.public_repos,
              followers: result.followers,
              following: result.following
            },
            repos: [],
            starred: []
          })
        })
    }
  }


  render() {
    return (
      <AppContent
        userInfo={this.state.userInfo}
        repos={this.state.repos}
        starred={this.state.starred}
        handleSearch={(e) => this.handleSearch(e)}
        getRepos={(e) => console.log('getRepos')}
        getStarred={(e) => console.log('getStarred')}

      />
    )
  }

}


export default App;