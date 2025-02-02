import React, { useState } from 'react';
import plane from '../assets/images/travel1.jpg';
import Footer from './Footer';
import Header from './Header';
import FlightServiceRest from '../services/FlightServiceRest';
import { useNavigate } from 'react-router-dom';

const AddFlight = () => {
    const navigate = useNavigate();
    // const [source, setSource] = useState(undefined);
    // const [destination, setDestination] = useState(undefined);
    // const [travelDate, setTravelDate] = useState(undefined);
    // const [arrivalTime, setArrivalTime] = useState(undefined);
    // const [departureTime, setDepartureTime] = useState(undefined);
    // const [price, setPrice] = useState(0);
    // const [availableSeats, setAvailableSeats] = useState(0);
    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [travelDate, setTravelDate] = useState('');
    const [arrivalTime, setArrivalTime] = useState('');
    const [departureTime, setDepartureTime] = useState('');
    const [price, setPrice] = useState(0);
    const [availableSeats, setAvailableSeats] = useState(0);
    const service = new FlightServiceRest();

    if (!localStorage.getItem('user')) {
        alert('Please Login');
        navigate('/login');
    } else {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user.isadmin !== 1) {
            alert('Access Denied');
            navigate('/');
        }
    }

    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        switch (name) {
            case 'source':
                setSource(value);
                break;
            case 'destination':
                setDestination(value);
                break;
            case 'travelDate':
                setTravelDate(value);
                break;
            case 'arrivalTime':
                setArrivalTime(value);
                break;
            case 'departureTime':
                setDepartureTime(value);
                break;
            case 'price':
                setPrice(value);
                break;
            case 'availableSeats':
                setAvailableSeats(value);
                break;
            default:
                break;
        }
    };

    const onSave = (e) => {
        e.preventDefault();
        const flight = {
            source,
            destination,
            travelDate,
            arrivalTime,
            departureTime,
            price,
            availableSeats,
        };
        console.log(flight);
        service.saveFlight(flight);
        alert('The flight has been added');
        navigate('/allFlights');
    };

    return (
        <div>
            <Header />
            <div className="container-fluid" style={styling.wrapper}>
                <form
                    className="m-auto mt-3 m-1 border border-dark p-3"
                    onSubmit={onSave}
                    style={styling.formStyle}
                >
                    <h1 className="mb-3" style={styling.heading}>
                        Add New Flight Schedule
                    </h1>

                    <div className="input-group mb-2 mr-sm-2">
                        {/* <!-- Drop down for source --> */}
                        <label
                            className="col-4 my-1 p-1 bg-light border border-darken-2"
                            htmlFor="source"
                        >
                            Source
                        </label>
                        <select
                            className="custom-select my-1 mr-sm-2"
                            id="source"
                            name="source"
                            onClick={handleInput}
                            required
                            value={source}  // Set the selected value
                            onChange={handleInput}  // Handle change
                        >
                            <option value="Chennai">Chennai</option>
                            <option value="Delhi">Delhi</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Kolkata">Kolkata</option>
                            <option value="Goa">Goa</option>
                            <option value="Pune">Pune</option>
                            <option value="Jaipur">Jaipur</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Cochin">Cochin</option>
                            <option value="Ahmadabad">Ahmadabad</option>
                        </select>
                    </div>
                    {/* Other input groups */}
                    
<div className="input-group mb-2 mr-sm-2">
    <label
        className="col-4 my-1 p-1 bg-light border border-darken-2"
        htmlFor="destination"
    >
        Destination
    </label>
    <select
        className="custom-select my-1 mr-sm-2"
        id="destination"
        name="destination"
        onClick={handleInput}
        required
        value={destination}
        onChange={handleInput}
    >
        <option value="Chennai">Chennai</option>
        <option value="Delhi">Delhi</option>
        <option value="Mumbai">Mumbai</option>
        <option value="Kolkata">Kolkata</option>
        <option value="Goa">Goa</option>
        <option value="Pune">Pune</option>
        <option value="Jaipur">Jaipur</option>
        <option value="Bangalore">Bangalore</option>
        <option value="Cochin">Cochin</option>
        <option value="Ahmadabad">Ahmadabad</option>
    </select>
</div>

<div className="input-group mb-2 mr-sm-2">
    <label
        className="col-4 my-1 p-1 bg-light border border-darken-2"
        htmlFor="travelDate"
    >
        Flying Date
    </label>
    <input
        className="col-5 my-1 p-1 border border-darken-2"
        type="date"
        value={travelDate}
        name="travelDate"
        onChange={handleInput}
        required
    />
</div>

<div className="input-group mb-2 mr-sm-2">
    <label
        className="col-4 my-1 p-1 bg-light border border-darken-2"
        htmlFor="arrivalTime"
    >
        Takeoff Time
    </label>
    <input
        className="col-5 my-1 p-1 border border-darken-2"
        type="time"
        value={arrivalTime}
        name="arrivalTime"
        onChange={handleInput}
        required
    />
</div>

<div className="input-group mb-2 mr-sm-2">
    <label
        className="col-4 my-1 p-1 bg-light border border-darken-2"
        htmlFor="departureTime"
    >
        Landing Time
    </label>
    <input
        className="col-5 my-1 p-1 border border-darken-2"
        type="time"
        value={departureTime}
        name="departureTime"
        onChange={handleInput}
        required
    />
</div>

<div className="input-group mb-2 mr-sm-2">
    <label
        className="col-4 my-1 p-1 bg-light border border-darken-2"
        htmlFor="price"
    >
        Fare
    </label>
    <input
        type="number"
        className="col-5 my-1 p-1 border border-darken-2"
        value={price}
        name="price"
        onChange={handleInput}
        required
    />
</div>

<div className="input-group mb-2 mr-sm-2">
    <label
        className="col-4 my-1 p-1 bg-light border border-darken-2"
        htmlFor="availableSeats"
    >
        Available Seats
    </label>
    <input
        type="number"
        className="col-5 my-1 p-1 border border-darken-2"
        value={availableSeats}
        name="availableSeats"
        onChange={handleInput}
        required
    />
                    </div>


                    <button type="submit" className="btn btn-warning mr-4">
                        Submit
                    </button>
                    <button type="reset" className="btn btn-outline-dark">
                        Reset
                    </button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

const styling = {
    wrapper: {
        background: `url(${plane})`,
        paddingTop: 100,
        paddingBottom: 100,
    },
    heading: {
        color: 'midnightblue',
        textAlign: 'center',
    },
    formStyle: {
        minWidth: 300,
        maxWidth: 500,
    },
};

export default AddFlight;
