import React from 'react';
import PropTypes from 'prop-types';



const UserInfo = ( {userInfo} ) => (


    <div className='user-info'>
        <img src={userInfo.photo} alt="" />
        <h1 className="username">
            <a href={`https://github.com/${userInfo.login}`}>{userInfo.username}</a>
        </h1>

        <ul className='repos-info'>
            <li> Respositórios: {userInfo.repos}}</li>
            <li> Seguidores: {userInfo.following}</li>
            <li> Seguindo: {userInfo.follwers}</li>
        </ul>
    </div>
)

UserInfo.propTypes = {
    userInfo: PropTypes.shape({
        username: PropTypes.string.isRequired,
        photo: PropTypes.string.isRequired,
        login: PropTypes.string.isRequired,
        repos: PropTypes.number.isRequired,
        follwers: PropTypes,
        following: ''
    })
}

export default UserInfo;