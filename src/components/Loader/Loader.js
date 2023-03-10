import React, { useState, useEffect } from 'react'
import './Loader.css'

function Loader() {

    const [loadershow, setLoadershow] = useState('')
    useEffect(() => {
        setTimeout(() => {
            setLoadershow('active')
        }, 5000);
    }, [])


    return (
        <div className={`loader ${loadershow}`}>
            <div className="loader-block">
                <div className="icons">
                    <span className="loader-icon icon-1"></span>
                    <span className="loader-icon icon-2"></span>
                    <span className="loader-icon icon-3"></span>
                </div>
            </div>
        </div>
    )
}


export default Loader