import React, { useState, useEffect } from 'react';
import FlightServiceRest from '../services/FlightServiceRest';
import plane from '../assets/images/travel1.jpg';
import Header from './Header';
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

const UpdateFlight = () => {
    const navigate = useNavigate();
  const [flightData, setFlightData] = useState({
    flightNumber: '',
    source: '',
    destination: '',
    travelDate: '',
    arrivalTime: '',
    departureTime: '',
    price: '',
    availableSeats: '',
});
    const user = JSON.parse(localStorage.getItem('user'));
    const temp = JSON.parse(localStorage.getItem('flight'));
    const service = new FlightServiceRest();
    useEffect(() => {
        if (!user) {
            alert('Please Login');
            navigate('/login');
        } else if (user.isadmin !== 1) {
            alert('Access Denied');
            navigate('/');
        } else {
            setFlightData({
                flightNumber: temp.flightNumber,
                source: temp.source,
                destination: temp.destination,
                travelDate: temp.travelDate,
                arrivalTime: temp.arrivalTime,
                departureTime: temp.departureTime,
                price: temp.price,
                availableSeats: temp.availableSeats
            },);
        }
    }, []);

    const handleInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setFlightData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const onUpdate = async (e) => {
        e.preventDefault();
      //  const service = new FlightServiceRest();
        await service.updateFlight(flightData);
        alert('Your flight has been updated');
        navigate('/allFlights');
    };

    return (
        <div>
            <Header />
            <div className="container-fluid" style={styling.wrapper}>
                <form
                    className="m-auto mt-3 m-1 border border-dark p-3"
                    onSubmit={onUpdate}
                    style={styling.formStyle}
                >
                    {/* Your form inputs and UI */}
                    {/* Your form inputs and UI */}
<div className="input-group mb-2 mr-sm-2">
    <label className="col-4 my-1 p-1 bg-light border border-darken-2">Flight Id</label>
    <input
        type="number"
        className="col-5 my-1 p-1 border border-darken-2"
        value={flightData.flightNumber || ''}
        name="flightNumber"
        disabled
    />
</div>

 {/* Source */}
 <div className="input-group mb-2 mr-sm-2">
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
            value={flightData.source}
            onChange={handleInput}
            required
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

    {/* Destination */}
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
            value={flightData.destination}
          onChange={handleInput}
            required
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
            {/* Add other options as needed */}
        </select>
    </div>

    {/* Flying Date */}
    <div className="input-group mb-2 mr-sm-2">
        <label className="col-4 my-1 p-1 bg-light border border-darken-2">
            Flying Date
        </label>
        <input
            className="col-5 my-1 p-1 border border-darken-2"
            type="date"
            value={flightData.travelDate}
            name="travelDate"
          onChange={handleInput}
            required
        />
    </div>

    {/* Takeoff Time */}
    <div className="input-group mb-2 mr-sm-2">
        <label className="col-4 my-1 p-1 bg-light border border-darken-2">
            Takeoff Time
        </label>
        <input
            className="col-5 my-1 p-1 border border-darken-2"
            type="time"
            value={flightData.arrivalTime}
            name="arrivalTime"
          onChange={handleInput}
            required
        />
    </div>

    {/* Landing Time */}
    <div className="input-group mb-2 mr-sm-2">
        <label className="col-4 my-1 p-1 bg-light border border-darken-2">
            Landing Time
        </label>
        <input
            className="col-5 my-1 p-1 border border-darken-2"
            type="time"
            value={flightData.departureTime}
            name="departureTime"
          onChange={handleInput}
            required
        />
    </div>

    {/* Fare */}
    <div className="input-group mb-2 mr-sm-2">
        <label className="col-4 my-1 p-1 bg-light border border-darken-2">
            Fare
        </label>
        <input
            type="number"
            className="col-5 my-1 p-1 border border-darken-2"
            value={flightData.price}
            name="price"
          onChange={handleInput}
            required
        />
    </div>

    {/* Available seats */}
    <div className="input-group mb-2 mr-sm-2">
        <label className="col-4 my-1 p-1 bg-light border border-darken-2">
            Available seats
        </label>
        <input
            type="number"
            className="col-5 my-1 p-1 border border-darken-2"
            value={flightData.availableSeats}
            name="availableSeats"
           onChange={handleInput}
            required
        />
    </div>
<button type="submit" className="mr-4 btn btn-warning">
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
        paddingTop: 70,
        paddingBottom: 70,
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

export default UpdateFlight;
