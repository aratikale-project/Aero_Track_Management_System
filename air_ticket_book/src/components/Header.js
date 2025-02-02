import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import imgs from '../assets/logo/travelling.png';
import { Navbar, Container } from 'react-bootstrap';

function Header(props) {
    const navigate = useNavigate();

    const userClear = () => {
        localStorage.removeItem('user');
        localStorage.removeItem('plane');
        localStorage.removeItem('bid');
        localStorage.removeItem('sid');
        localStorage.removeItem('tickets');
        localStorage.removeItem('nop');
        localStorage.removeItem('ticket');
        localStorage.clear();
    };

    const onTickets = () => {
        navigate('/tickets');
    };

    const loggedIn = (
        <ul className="nav justify-content-end">
            <li className="nav-item">
                <Link className="nav-link text-info" to="/">
                    <button className="btn btn-primary">Home</button>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-info" to="/login">
                    <button className="btn btn-primary">Login</button>
                </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link text-info" to="/register">
                    <button className="btn btn-primary">Register</button>
                </Link>
            </li>
        </ul>
    );

    const loggedOut = (
        <ul className="nav justify-content-end">
            <li className="nav-item">
                <Link className="nav-link text-info" to="/">
                    <button className="btn btn-outline-info">Home</button>
                </Link>
            </li>

            {localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).isadmin === 1 && (
                <>
                    <li className="nav-item">
                        <Link className="nav-link text-info" to="/addFlight">
                            <button className="btn btn-outline-info">Add Flight</button>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-info" to="/allFlights">
                            <button className="btn btn-outline-info">All Flights</button>
                        </Link>
                    </li>
                </>
            )}

            <li className="nav-item">
                <Link className="nav-link text-info" to="/">
                    <button onClick={userClear} className="btn btn-outline-info">
                        Logout
                    </button>
                </Link>
            </li>

            {localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).isadmin === 0 && (
                <li className="nav-item nav-link text-info">
                    <h6 style={{ marginTop: '7px' }}>
                        <b className="text-warning">Welcome {JSON.parse(localStorage.getItem('user')).username}</b>
                    </h6>
                </li>
            )}

            {localStorage.getItem('user') && JSON.parse(localStorage.getItem('user')).isadmin === 1 && (
                <li className="nav-item">
                    <Link className="nav-link text-info" to="/admin">
                        <button className="btn btn-outline-warning">Admin</button>
                    </Link>
                </li>
            )}
        </ul>
    );

    return (
        <div>
            <Navbar bg="dark" variant="dark" className="fixed-top">
                <Container>
                    <Navbar.Brand href="/">
                        <img
                            alt="logo"
                            src={imgs}
                            width="30"
                            height="30"
                            className="d-inline-block align-top "
                        />{' '}
                        Airline Ticket Reservation System
                    </Navbar.Brand>
                    <nav>{localStorage.getItem('user') ? loggedOut : loggedIn}</nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default Header;
