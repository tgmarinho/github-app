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

  getGitHubApiUrl(username, type) {
    const internalUser = username ? `/${username}` : '';
    const internalType = type ? `/${type}` : '';
    return `https://api.github.com/users${internalUser}${internalType}`;
  }

  handleSearch(e) {
    const value = e.target.value;
    const keyCode = e.which || e.keyCode
    const ENTER = 13;

    e.persist(); // para não anular o objeto event, pois o 
    // event é usando em outros lugar passado por referência, devido o uso do ajax
    
    // ou const target = e.target e usar a variável target.

    if (keyCode === ENTER) {
      e.target.disabled = true;
      ajax().get(this.getGitHubApiUrl(value))
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
        .always(() => {
          e.target.disabled = false;
        })
    }
  }

  getRepos(type) {
    return (e) => {
      const username = this.state.userInfo.login;
      ajax().get(this.getGitHubApiUrl(username, type))
        .then(result => {
          this.setState({
            [type]: result.map(repo => ({
                id: repo.id,
                name: repo.name,
                link: repo.html_url
              })
            )
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
        getRepos={this.getRepos('repos')}
        getStarred={this.getRepos('starred')}

      />
    )
  }

}


export default App;