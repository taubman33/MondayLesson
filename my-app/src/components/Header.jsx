import React from 'react';
import Nav from './Nav'

function Header(props) {
    return (
        <div className="Header">
            <h1> My Project</h1>
            <Nav/>
        </div>
    );
}

export default Header;