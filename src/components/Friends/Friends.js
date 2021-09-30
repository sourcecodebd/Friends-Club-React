import React, { useEffect, useState } from 'react';
import Friend from '../Friend/Friend';
import { NavLink } from 'react-router-dom';
import './nav.css';

// skeleton
import Skeleton from '@mui/material/Skeleton';

// snackbar
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

// snackbar
const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Friends = () => {
    const [users, setUsers] = useState([]);
    const [search, setSearch] = useState([]);

    /* snackbar starts */
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const successClose = (e, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setSuccess(false);
    }
    const failureClose = (e, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setError(false);
    }
    /* snackbar ends */

    useEffect(() => {
        const ENDPOINT = `users`;
        const URL = `https://jsonplaceholder.typicode.com/${ENDPOINT}`;
        fetch(URL)
            .then(res => res.json())
            .then(data => {
                setUsers(data)
                setSearch(data)
            })
            .catch(err => console.log(err));
    }, []);

    const searchHandler = (e) => {
        const searchText = e.target.value;
        const found = users.filter(mi => mi.name.toLowerCase().indexOf(searchText.toLowerCase()) !== -1);
        if (found.length > 0) {
            setSuccess(true);
            setError(false);
        }
        else {
            setError(true);
            setSuccess(false);
        }
        setSearch(found);
    }

    return (
        <div>
            <Snackbar open={success} autoHideDuration={6000} onClose={successClose}>
                <Alert onClose={successClose} severity="success" sx={{ width: '100%' }}>
                    Success, {search.length} Users exist!
                </Alert>
            </Snackbar>
            <Snackbar open={error} autoHideDuration={6000} onClose={failureClose}>
                <Alert onClose={failureClose} severity="error" sx={{ width: '100%' }}>
                    Sorry, 0 User exists!
                </Alert>
            </Snackbar>

            <nav className="navbar navbar-expand-lg navbar-light bg-info fixed-top mb-5">
                <div className="container">
                    <NavLink className="navbar-brand text-white fs-3" to="/">Friends Club</NavLink>
                    <button className="navbar-toggler bg-primary text-primary border-0 rounded-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span>
                            <i className="fas fa-bars" style={{ color: "#fff" }}></i>
                        </span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <form className="d-flex flex-fill">
                            <input onChange={searchHandler} className="form-control me-2" type="search" placeholder="type to find friend" aria-label="Search" />
                            <button className="btn btn-dark btn-outline-white" type="submit">Search</button>
                        </form>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-2 fs-5">
                            <li className="nav-item">
                                <NavLink className="nav-link active text-white" aria-current="page" to="/home">Home</NavLink>
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
                                <NavLink className="nav-link active text-white" to="/about">About</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active text-white" to="/about/culture">Culture</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active text-white" to="/friends">Friends</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active text-white" to="/contact">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav >
            <button className="btn btn-success btn-canvas-custom shadow-lg" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">See Results Found</button>
            <div className="offcanvas offcanvas-start bg-info border-0" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                <div className="offcanvas-header">
                    {/* <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel"></h5> */}
                    <button type="button" className="btn-close text-reset bg-white text-black" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <h1 className="text-white">I have {users.length} Friends</h1>
                </div>
            </div>

            {
                users.length === 0 ? <Skeleton variant="rectangular" sx={{ width: 'auto', borderRadius: '10px', marginTop: '30px' }} height={500} /> :

                    <div className="d-flex justify-content-center row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 mt-1">
                        {
                            search.map(user => <Friend friend={user} key={user.id} />)
                        }
                    </div>

            }

        </div >
    );
};

export default Friends;