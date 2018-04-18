import React from 'react';
import Search from './search'
import UserInfo from './user-info'
import Actions from './actions'
import Repos from './repos'
import PropTypes from 'prop-types';


const AppContent = ({ 
    userInfo,
    repos,
    starred,
    handleSearch
}) => (
    <div className='app'>

        <Search handleSearch={handleSearch} />
        {!!userInfo && <UserInfo userInfo={userInfo} />}
        {!!userInfo && <Actions />}

        {!!repos.length &&
            <Repos className="repos" title="Respositórios:" repos={repos} />
        }

        {!!starred.length &&
            <Repos className="starred" title="Favoritos:" repos={starred} />
        }

    </div >
)

AppContent.propTypes = {
    userInfo: PropTypes.object,
    repos: PropTypes.array.isRequired,
    starred: PropTypes.array.isRequired
}

export default AppContent;