import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";

function Navbar(props) {
    return (
        <nav className="navbar" id="navbar">
            <div className="logo">
                <h2>
                    <span>Parth</span> Dhaduk
                </h2>
            </div>

            <div className="toggleButton" id="toggleButton">
                <div className="line top-line"></div>
                <div className="line center-line"></div>
                <div className="line bottom-line"></div>
            </div>

            <div className="menus">
                <ul>
                    <li onClick={props.changeMenu}>
                        <Link to="/">
                            <span className="menu-btn home-btn">Home</span>
                        </Link>
                    </li>
                    <li onClick={props.changeMenu}>
                        <Link to='/About'>
                            <span className="menu-btn about-btn">About</span>
                        </Link>
                    </li>
                    <li onClick={props.changeMenu}>
                        <Link to='/Portfolio'>
                            <span className="menu-btn portfolio-btn">Portfolio</span>
                        </Link>
                    </li>
                    <li onClick={props.changeMenu}>
                        <Link to='/Project'>
                            <span className="menu-btn project-btn">Project</span>
                        </Link>
                    </li>
                    <li onClick={props.changeMenu}>
                        <Link to='/ContactUs'>
                            <span className="menu-btn contact-btn">Contact</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar