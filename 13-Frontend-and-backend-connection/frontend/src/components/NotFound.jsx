import React, { useEffect } from 'react'
import '../App.css'
import toast from 'react-hot-toast'

const NotFound = () => {
    useEffect(() => {
        toast.error('Page not found');
    }, []);

    return (
        <div className='not-found-container'>
            <h2>Error: 404</h2>
            <h3>Page not found</h3>
        </div>
    )
}

export default NotFound