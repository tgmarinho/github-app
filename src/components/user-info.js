import React from 'react';

const UserInfo = () => (
    <div className='user-info'>
        <img src='https://avatars2.githubusercontent.com/u/380327?v=4' />
        <h1 className="username">
            <a href='https://github.com/tgmarinho'>Thiago Marinho</a>
        </h1>

        <ul className='repos-info'>
            <li> Respositórios 221</li>
            <li> Seguidores: 10</li>
            <li> Seguindo> 10</li>
        </ul>
    </div>
)

export default UserInfo;