import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import planeBG from '../assets/images/planebg1.jpg';
import Footer from './Footer';
import Header from './Header';

const Summary = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState(localStorage.getItem('user'));
  const [summary, setSummary] = useState([]);
  const [airplane, setAirplane] = useState({});
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    if (!localStorage.getItem('user')) {
      navigate('/login');
    } else {
      const storedSummary = JSON.parse(localStorage.getItem('sid'));
      const storedAirplane = JSON.parse(localStorage.getItem('plane'));

      setSummary(storedSummary);
      setAirplane(storedAirplane);

      const calculatedAmount = storedSummary.length * storedAirplane.price;
      setAmount(calculatedAmount);
    }
  }, [navigate]);

  const passList = summary.map((p, index) => (
    <tr key={index}>
      <td>{p.pname}</td>
      <td>{p.age}</td>
      <td>{p.gender}</td>
    </tr>
  ));

  return (
    <div className="pt-5">
      <Header />
      <div
        className="py-5"
        style={{
          backgroundImage: `url(${planeBG})`,
          overflow: 'hidden',
          height: '1200px',
        }}
      >
        <div className="row mb-4">
          <div className="col-lg-8 mx-auto text-center">
            {/* <h1 className="display-6">Book My Flight</h1> */}
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <div className="card ">
              <div className="card-header">
                <div className="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                  <div className="tab-content">
                    <div className="tab-pane fade show active pt-3">
                      <div className="container">
                        <h4 align="center">Booking Summary</h4>
                        <br />
                        <div>
                          <table className="table">
                            <h5>Passenger Details</h5>
                            <tr>
                              <th>Name</th>
                              <th>Age</th>
                              <th>Gender</th>
                            </tr>
                            {passList}
                            <br />
                            <h5>Travelling Details</h5>
                            <tr>
                              <th>Flight No.</th>
                              <th>Source</th>
                              <th>Destination</th>
                              <th>Travel Date</th>
                            </tr>
                            <tr>
                              <td>{airplane.flightNumber}</td>
                              <td>{airplane.source}</td>
                              <td>{airplane.destination}</td>
                              <td>{airplane.travelDate}</td>
                            </tr>
                            <br />
                            <tr>
                              <td>
                                <strong>Amount to pay</strong>
                              </td>
                              <td></td>
                              <td>
                                <strong>₹{amount}</strong>
                              </td>
                            </tr>
                          </table>
                          <div className="card-footer">
                            <Link to="/payment">
                              <button
                                type="button"
                                className="subscribe btn btn-primary btn-block shadow-sm"
                              >
                                Make Payment
                              </button>
                            </Link>
                          </div>
                        </div>
                      </div>
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
};

export default Summary;
