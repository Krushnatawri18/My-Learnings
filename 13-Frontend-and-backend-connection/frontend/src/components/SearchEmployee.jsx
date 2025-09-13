import React, { useState } from 'react';
import '../App.css';

const SearchEmployee = ({ onSearch }) => {
    const [searchData, setSearchData] = useState('');

    const changeHandler = (e) => {
        setSearchData(e.target.value);
    };

    const submitHandler = (e) => {
        e.preventDefault();
        onSearch(searchData);
    }

    return (
        <div className='search-employee-form '>
            <form onSubmit={submitHandler} className='search-employee-details'>
                <input
                    type='text'
                    placeholder='Name'
                    value={searchData}
                    name='searchData'
                    onChange={changeHandler}
                />
                <button className='search-employee add-margin'>
                    Search Employee
                </button>
            </form>
        </div>
    )
}

export default SearchEmployee