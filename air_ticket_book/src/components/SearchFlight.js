import React, { useState } from 'react';
import FlightList from './FlightList';
import FlightServiceRest from '../services/FlightServiceRest';
import search from '../assets/logo/magnifying-glass.png';

const SearchFlight = () => {
    const service = new FlightServiceRest();

    const [source, setSource] = useState('');
    const [destination, setDestination] = useState('');
    const [travelDate, setTravelDate] = useState('');
    const [searched, setSearched] = useState(false);
    const [flights, setFlights] = useState([]);

    const handleInput = (event) => {
        const { name, value } = event.target;
        if (name === 'source') {
            setSource(value);
        } else if (name === 'destination') {
            setDestination(value);
        } else if (name === 'travelDate') {
            setTravelDate(value);
        }
    };

    const getFlightsList = () => {
        setSearched(false);
        service.getFlightsForUser(source, destination, travelDate).then(data => {
            if (data.length > 0) {
                setFlights(data);
                setSearched(true);
            } else {
                alert('No Flights Found!!');
            }
        });
    };

    return (
        <div className="container-fluid p-4 m-3">
            <h2 style={styling.heading}>Search your flight</h2>
            <div className="form-inline">
                <div className="input-group mb-2 mr-sm-2">
                    {/* <!-- Drop down for source --> */}
                    <select className="custom-select my-1 mr-sm-2" name="source" value={source} onChange={handleInput} required>
                        {/* ... options */}
                        <option value="Chennai" onClick={handleInput}>Chennai</option>
                            <option value="Delhi" onClick={handleInput}>Delhi</option>
                            <option value="Mumbai" onClick={handleInput}>Mumbai</option>
                            <option value="Kolkata" onClick={handleInput}>Kolkata</option>
                            <option value="Goa" onClick={handleInput}>Goa</option>
                            <option value="Pune" onClick={handleInput}>Pune</option>
                            <option value="Jaipur" onClick={handleInput}>Jaipur</option>
                            <option value="Bangalore" onClick={handleInput}>Bangalore</option>
                            <option value="Cochin" onClick={handleInput}>Cochin</option>
                            <option value="Ahmadabad" onClick={handleInput}>Ahmadabad</option>
                    </select>
                </div>
                {/* ... other dropdowns and input */}
                <div className="input-group mb-2 mr-sm-2">
                    {/* Drop down for destination */}
                    <select className="custom-select my-1 mr-sm-2" name="destination" value={destination} onChange={handleInput} required>
                        <option value="Chennai" onClick={handleInput}>Chennai</option>
                        <option value="Delhi" onClick={handleInput}>Delhi</option>
                        <option value="Mumbai" onClick={handleInput}>Mumbai</option>
                        <option value="Kolkata" onClick={handleInput}>Kolkata</option>
                        <option value="Goa" onClick={handleInput}>Goa</option>
                        <option value="Pune" onClick={handleInput}>Pune</option>
                        <option value="Jaipur" onClick={handleInput}>Jaipur</option>
                        <option value="Bangalore" onClick={handleInput}>Bangalore</option>
                        <option value="Cochin" onClick={handleInput}>Cochin</option>
                        <option value="Ahmadabad" onClick={handleInput}>Ahmadabad</option>
                    </select>
                </div>
                <div className="input-group mb-2 mr-sm-2">
                    {/* Input for travel date */}
                    <input className="my-1 p-2 border border-darken-2 rounded" type="date" value={travelDate} name="travelDate" onChange={handleInput} defaultValue={Date.now()} required />
                </div>
                <button onClick={getFlightsList} className="btn mb-2 mr-sm-2" style={styling.icon}>
                    <img src={search} height="25" alt="Search" />
                </button>
            </div>
            {searched && <FlightList flights={flights} />}
        </div>
    );
};

const styling = {
    heading: {
        color: "midnightblue",
        fontFamily: "fantasy",
        marginBottom: 20
    },
    icon: {
        background: "skyblue"
    }
};

export default SearchFlight;
