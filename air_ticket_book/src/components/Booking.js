import React, { useState, useEffect } from 'react';
import planeBG from '../assets/images/planebg1.jpg';
import BookingService from '../services/BookingService';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

function Booking() {
    const [flight, setFlight] = useState(null);
    const [flag, setFlag] = useState(false);
    const [flightNumber, setFlightNumber] = useState('');
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [date, setDate] = useState('');
    const [passengers, setPassengers] = useState([0, 1, 2, 3, 4, 5, 6]);
    const [numberOfSeatsToBook, setNumberOfSeatsToBook] = useState(0);

    const service = new BookingService();
    const navigate = useNavigate();

    useEffect(() => {
        const storedFlight = JSON.parse(localStorage.getItem('plane'));
        if (storedFlight === null) {
            navigate('/');
        } else {
            setFlight(storedFlight);
            setFlag(true);
            setFlightNumber(storedFlight.flightNumber);
            setSource(storedFlight.source);
            setDestination(storedFlight.destination);
            setDate(storedFlight.travelDate);
        }

        if (!JSON.parse(localStorage.getItem('user'))) {
            navigate('/login');
        }
    }, [navigate]);

    const handleInput = (event) => {
        const { name, value } = event.target;
        if (name === 'numberOfSeatsToBook') {
            setNumberOfSeatsToBook(value);
        }
    };

    const goOnPassengers = () => {
        localStorage.setItem('nop', numberOfSeatsToBook);
        service.addBooking(
            numberOfSeatsToBook,
            flightNumber,
            source,
            destination,
            date
        ).then((response) => {
            if (response.data.length > 3) {
                // Handle the case when response.data is greater than 3
            } else {
                navigate('/passengers');
            }
        });
    };

    return (
        <div className="pt-5">
            <Header />
            <div
                className="pt-5"
                style={{
                    backgroundImage: `url(${planeBG})`,
                    overflow: 'hidden',
                    height: '700px',
                }}
            >
                <div className="row mb-4">
                    <div className="col-lg-8 mx-auto text-center">
                        <h1
                            className="display-6"
                            style={{
                                color: 'white',
                                fontWeight: '50pt',
                            }}
                        >
                            Book My Flight
                        </h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="card">
                            <div className="card-header">
                                <div className="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active pt-3">
                                        <form>
                                                <div className="form-group">
                                                    <h6>
                                                        <span className="form-label">
                                                            Flight Number
                                                        </span>
                                                    </h6>
                                                    {flag && (
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            onChange={handleInput}
                                                            value={flightNumber}
                                                            name="flightNumber"
                                                            readOnly
                                                        />
                                                    )}
                                                </div>
                                                <div className="form-group">
                                                    <h6>
                                                        <span className="form-label">
                                                            Flying from
                                                        </span>
                                                    </h6>
                                                    {flag && (
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            onChange={handleInput}
                                                            value={source}
                                                            name="source"
                                                            readOnly
                                                        />
                                                    )}
                                                </div>
                                                <div className="form-group">
                                                    <h6>
                                                        <span className="form-label">
                                                            Flying to
                                                        </span>
                                                    </h6>
                                                    {flag && (
                                                        <input
                                                            className="form-control"
                                                            type="text"
                                                            onChange={handleInput}
                                                            value={destination}
                                                            name="destination"
                                                            readOnly
                                                        />
                                                    )}
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <span className="form-label">
                                                                Departing
                                                            </span>
                                                            {flag && (
                                                                <input
                                                                    onChange={
                                                                        handleInput
                                                                    }
                                                                    value={date}
                                                                    className="form-control"
                                                                    disabled
                                                                />
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <span className="form-label">
                                                                Number of Passenger
                                                            </span>
                                                            {flag && (
                                                                <select
                                                                    className="form-control"
                                                                    onChange={
                                                                        handleInput
                                                                    }
                                                                    value={
                                                                        numberOfSeatsToBook
                                                                    }
                                                                    name="numberOfSeatsToBook"
                                                                >
                                                                    {passengers.map(
                                                                        (psng) => (
                                                                            <option
                                                                                key={
                                                                                    psng
                                                                                }
                                                                                value={
                                                                                    psng
                                                                                }
                                                                            >
                                                                                {
                                                                                    psng
                                                                                }
                                                                            </option>
                                                                        )
                                                                    )}
                                                                </select>
                                                            )}
                                                            <span className="select-arrow"></span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-footer">
                                                    <button
                                                        onClick={
                                                            goOnPassengers
                                                        }
                                                        type="button"
                                                        className="subscribe btn btn-primary btn-block shadow-sm"
                                                    >
                                                        Book Ticket
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Booking;
