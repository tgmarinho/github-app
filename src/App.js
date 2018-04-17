import React from 'react';
import './App.css';

const App = () => (
  <div className='app'>

    <div className="search">
      <input type="search" placeholder="Digite o nome do usuário do github" />
    </div>

    <div className='user-info'>
      <img src='https://avatars2.githubusercontent.com/u/380327?v=4' />
      <h1>
        <a href='https://github.com/tgmarinho'>Thiago Marinho</a>
      </h1>

      <ul className='repos-info'>
        <li> Respositórios 221</li>
        <li> Seguidores: 10</li>
        <li> Seguindo> 10</li>
      </ul>

      <div className='actions'>
        <button> Ver Respositórios</button>
        <button> Ver favoritos</button>
      </div>

      <div className='repos'>
        <h2> Respositórios: </h2>
        <ul>
          <li><a href="#">Nome do repositório</a></li>
        </ul>
      </div>

      <div className='starred'>
        <h2> Favortos: </h2>
        <ul>
          <li><a href="#">Nome do repositório</a></li>
        </ul>
      </div>


    </div>
  </div >
)

export default App;