import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import planeTicket from '../assets/logo/plane-ticket.png';
import plane from '../assets/images/travel1.jpg';
import Header from './Header';
import Footer from './Footer';

function Admin(props) {
    const navigate = useNavigate();

    if (!localStorage.getItem('user') || JSON.parse(localStorage.getItem('user')).isadmin === 0) {
        alert('Access Denied');
        navigate('/');
        return null;
    } else {
        return (
            <div style={{ paddingTop: 70 }}>
                <Header />
                <div className="p-3" style={styling.wrapper}>
                    <div className="card m-auto" style={{ width: '23rem' }}>
                        <img className="card-img-top m-auto mt-3 w-50" src={planeTicket} alt="admin" />
                        <div className="card-body">
                            <h5 className="card-title">Welcome</h5>
                            <p className="card-text">As Admin, you can add schedules for flights, modify, and delete schedules.</p>
                        </div>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">
                                <Link className="card-link" to="/addFlight">Add Flights</Link>
                            </li>
                            <li className="list-group-item">
                                <Link className="card-link" to="/allFlights">All Flight</Link>
                            </li>
                            <li className="list-group-item"></li>
                        </ul>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

const styling = {
    wrapper: {
        height: '80vh',
        background: `url(${plane})`,
    },
};

export default Admin;
