import React from 'react';
import './App.css';
import Search from './components/search'
import UserInfo from './components/user-info'
import Actions from './components/actions'
import Repos from './components/repos'

const App = () => (
  <div className='app'>

    <Search />
    <UserInfo />
    <Actions />

    <Repos className="repos" title="Respositórios:" repos={[{
      name: "nome do repositorio",
      link: "#"
    }]} />

    <Repos className="starred" title="Favoritos:" repos={[{
      name: "nome do repositorio",
      link: "#"
    }]} />

  </div >
)

export default App;