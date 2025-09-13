import React from 'react';
import '../App.css';
import SearchEmployee from './SearchEmployee';

const Navbar = ({ onSearch }) => {

    return (
        <div className='navbar-container'>
            <SearchEmployee onSearch={onSearch} />
        </div>
    );
};

export default Navbar;
