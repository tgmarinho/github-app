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
      starred: [],
      isFetching: false
    }

    this.handleSearch = this.handleSearch.bind(this); // mais perfomático que usar arrow functions para manter o this da classe.
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

    if (keyCode === ENTER) {
      this.setState({
        isFetching: true
      })
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
          .always(() => { this.setState({isFetching: false})})
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
        isFetching={this.state.isFetching}
        handleSearch={this.handleSearch}
        getRepos={this.getRepos('repos')}
        getStarred={this.getRepos('starred')}

      />
    )
  }

}


export default App;