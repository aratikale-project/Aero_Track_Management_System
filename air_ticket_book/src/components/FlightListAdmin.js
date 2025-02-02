import React, { useState, useEffect } from 'react';
import plane from '../assets/images/travel1.jpg';
import Header from './Header';
import FlightServiceRest from '../services/FlightServiceRest';
import { useNavigate } from 'react-router-dom';

const FlightListAdmin = () => {
    const navigate = useNavigate();
    const service = new FlightServiceRest();
    const [flights, setFlights] = useState([]);

    useEffect(() => {
        if (!localStorage.getItem('user')) {
            alert('Please Login');
            navigate('/login');
        } else {
            const user = JSON.parse(localStorage.getItem('user'));
            if (user.isadmin !== 1) {
                alert('Access Denied');
                navigate('/');
            } else {
                getFlights();
            }
        }
    }, [navigate]);

    const getFlights = () => {
        service.getFlights().then(data => {
            setFlights(data);
        });
    };

    const onDelete = (flightNumber) => {
        if (window.confirm(`Are you sure you want to delete the flight ${flightNumber}?`)) {
            service.deleteFlight(flightNumber).then(response => {
                getFlights();
            });
        }
    };

    const onEdit = (flight) => {
        localStorage.setItem('flight', JSON.stringify(flight));
        navigate('/updateFlight');
    };

    const calculateDuration = (f) => {
        // Calculation logic
        let t1 = new Date('1970-01-01T' + f.departureTime + 'Z')
        let t2 = new Date('1970-01-01T' + f.arrivalTime + 'Z')
        let hour = t1.getUTCHours() - t2.getUTCHours()
        let min = t1.getUTCMinutes() - t2.getUTCMinutes()

        if( hour < 0)
        {
            hour = 12+hour
        }
        if(min < 0){
            min = 60+min
        }

        return (hour +'hr '+min + 'min')
    };

    // const flightlist = this.state.flights.map((f) => (
    //     <div key={f.flightNumber} className="card m-4 " style={{ width: 350, height: "fit-content" }}>
    //         {/* ... */}
    //     </div>
    // ));



    const flightList = flights.map(f => (
        <div  key={f.flightNumber} className="card m-4 " style={{ width: 350, height: "fit-content" }}>
            {/* Card content */}
            <div className="card-header">
    <h5>Flight {f.flightNumber}</h5>
</div>
<div className="card-body">
    <div className="row mb-2">
        <div className="col fw-bold">Source</div>
        <div className="col">{f.source}</div>
    </div>
    <div className="row mb-2">
        <div className="col fw-bold">Destination</div>
        <div className="col">{f.destination}</div>
    </div>
    <div className="row mb-2">
        <div className="col fw-bold">Travel Date</div>
        <div className="col">{f.travelDate}</div>
    </div>
    <div className="row mb-2">
        <div className="col fw-bold">Takeoff Time</div>
        <div className="col">{f.arrivalTime}</div>
    </div>
    <div className="row mb-2">
        <div className="col fw-bold">Landing Time</div>
        <div className="col">{f.departureTime}</div>
    </div>
    <div className="row mb-2">
        <div className="col fw-bold">Duration</div>
        <div className="col">{calculateDuration(f)}</div>
    </div>
    <div className="row mb-2">
        <div className="col fw-bold">Fare</div>
        <div className="col">{f.price}</div>
    </div>
    <div className="row mb-2">
        <div className="col fw-bold">Available Seats</div>
        <div className="col">{f.availableSeats}</div>
    </div>
    <br />
    <button className="btn btn-danger mr-3" onClick={() => onDelete(f.flightNumber)}>
        Delete
    </button>
    <button className="btn btn-primary" onClick={() => onEdit(f)}>
        Edit
    </button>
</div>

        </div>
    ));

    return (
        <div style={{ backgroundImage: `url(${plane})`, overflow: 'hidden', height: '20000px' }}>
            <Header />
            <div className="pt-5">
                <div className="pt-3" style={styling.wrapper}>
                    {flightList}
                </div>
            </div>
        </div>
    );
};

const styling = {
    wrapper: {
        height: "700px",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
    },
};

export default FlightListAdmin;
