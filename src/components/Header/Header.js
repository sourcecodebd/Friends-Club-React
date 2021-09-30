import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css'

const Header = () => {

    const activeStyle = {
        fontWeight: "bold",
        color: "red"
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info fixed-top">
            <div className="container">
                <NavLink className="navbar-brand text-white fs-3" to="/">Friends Club</NavLink>
                <button className="navbar-toggler bg-primary text-primary border-0 rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span>
                        <i className="fas fa-bars" style={{ color: "#fff" }}></i>
                    </span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-2 fs-5">
                        <li className="nav-item">
                            <NavLink activeStyle={activeStyle} className="nav-link active text-white" aria-current="page" to="/home">Home</NavLink>
                        </li>
                        <li className="nav-item dropdown nav-hover">
                            <a className="nav-link dropdown-toggle nav-menu" href="#/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Menu
                            </a>
                            <div className="dropdown-menu nav-child" aria-labelledby="navbarDropdown">
                                <NavLink className="dropdown-child" to="/friends">FriendList</NavLink>
                                <NavLink className="dropdown-child" to="/posts">All Posts</NavLink>
                            </div>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={activeStyle} className="nav-link active text-white" to="/about">About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={activeStyle} className="nav-link active text-white" to="/about/culture">Culture</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={activeStyle} className="nav-link active text-white" to="/friends">Friends</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink activeStyle={activeStyle} className="nav-link active text-white" to="/contact">Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;