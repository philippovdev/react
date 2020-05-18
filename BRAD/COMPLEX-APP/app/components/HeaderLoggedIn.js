import React, { useEffect, useContext } from 'react';
import { Link }                         from 'react-router-dom'
import ExampleContext                   from '../ExampleContext'


function HeaderLoggedIn (props) {
    const { setLoggedIn } = useContext( ExampleContext )

    function handleLogOut () {
        setLoggedIn( false )
        localStorage.removeItem( 'appToken' )
        localStorage.removeItem( 'appUsername' )
        localStorage.removeItem( 'appAvatar' )
    }

    return (
        <div className="flex-row my-3 my-md-0">
            <a href="#"
               className="text-white mr-2 header-search-icon">
                <i className="fas fa-search"></i>
            </a>
            <span className="mr-2 header-chat-icon text-white">
            <i className="fas fa-comment"></i>
            <span className="chat-count-badge text-white"> </span>
          </span>
            <a href="#"
               className="mr-2">
                <img className="small-header-avatar"
                     src={ localStorage.getItem( 'appAvatar' ) } />
            </a>
            <Link className="btn btn-sm btn-success mr-2"
                  to="/create-post">
                Create Post
            </Link>
            <button onClick={ handleLogOut }
                    className="btn btn-sm btn-secondary">
                Sign Out
            </button>
        </div>
    );
}

export default HeaderLoggedIn;