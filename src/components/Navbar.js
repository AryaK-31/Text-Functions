import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode === 'light'?'primary':'dark'}`}>
            <div className="container-fluid">
                <Link className="navbar-brand text-light" to="/" >{props.title}</Link>
                <button className={`navbar-toggler bg-${props.mode === 'light'?'light':'dark'}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 " >
                        <li className="nav-item">
                            <Link className="nav-link active text-light" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-light" to="/about">{props.aboutTxt}</Link>
                        </li>
                    </ul>
                    <div class={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label text-light" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

Navbar.propTypes =
{
    title: PropTypes.string.isRequired,
    aboutTxt: PropTypes.string.isRequired
}

Navbar.defaultProps =
{
    title: "Enter Name",
    aboutTxt: "About"
}