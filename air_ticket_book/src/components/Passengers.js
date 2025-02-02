import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingService from '../services/BookingService';
import planeBG from '../assets/images/planebg1.jpg';
import Footer from './Footer';
import Header from './Header';

const Passengers = () => {
    const navigate = useNavigate();

  const [user, setUser] = useState(localStorage.getItem('user'));
  const [npsgn, setNpsgn] = useState(parseInt(localStorage.getItem('nop')));
  const [values, setValues] = useState([]);
  const [pname, setPname] = useState('');
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [id, setId] = useState(1);
  const [btn, setBtn] = useState(false);
  const [info, setInfo] = useState(false);

  const gen = ['Select', 'Male', 'Female'];

  const service = new BookingService();

  const handleClick = (i) => {
    const updatedValues = [
      ...values,
      { id: id + i, pname, gender, age },
    ];
    setValues(updatedValues);
    setInfo(true);
    if (updatedValues.length === npsgn) {
      setBtn(true);
    }
  };

  const savePassenger = () => {
    console.log("Values save :"+ JSON.stringify(values))
    localStorage.setItem('sid', JSON.stringify(values));
    service.addPassengers({ pass1: values });
    // You need to use the navigate function here to redirect.
    //Example:
     navigate('/summary');
  };

  const fieldsArray = [];
  for (let i = 0; i < npsgn; i++) {
    fieldsArray.push(
      <tr key={i}>
        <td>
          <input
            className="form-control"
            type="text"
            name="pname"
            onChange={(e) => setPname(e.target.value)}
          />
        </td>
        <td>
          <select
            className="btn btn-info"
            name="gender"
            onChange={(e) => setGender(e.target.value)}
          >
            {gen.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </td>
        <td>
          <input
            className="form-control"
            type="text"
            name="age"
            onChange={(e) => setAge(e.target.value)}
            maxLength="2"
          />
        </td>
        <td align="center">
          <button
            disabled={btn}
            className="btn btn-warning "
            onClick={() => handleClick(i)}
          >
            Add Passenger
          </button>
        </td>
      </tr>
    );
  }

  return (
    <div className="pt-5">
      <Header />
      <div
        className="py-5"
        style={{
          backgroundImage: `url(${planeBG})`,
          overflow: 'hidden',
          height: '900px',
        }}
      >
        <div className="row mb-4">
          <div className="col-lg-8 mx-auto text-center">
            <h1 className="display-6" style={{ color: 'white', fontWeight: '50px' }}>
              Add Passenger Details
            </h1>
          </div>
        </div>

        <div className="row">
          <div className="col-md-10  mx-auto">
            <div className="card">
              <div className="card-header">
                <div className="alert alert-info">
                  <strong>Note: </strong> Please add passengers individually
                </div>
                <div className="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                  <div className="tab-content">
                    {info && (
                      <div className="alert alert-success">
                        <strong>Success!</strong>&nbsp; Passenger added with name : &nbsp;{' '}
                        {pname}
                      </div>
                    )}
                    <div className="tab-pane fade show active pt-3">
                      <form>
                        <table className="table">
                          <thead>
                            <tr align="center">
                              <th>Name</th>
                              <th>Gender</th>
                              <th>Age</th>
                              <th>Add Passenger</th>
                            </tr>
                          </thead>
                          <tbody>{fieldsArray}</tbody>
                        </table>
                        <div className="checkbox">
                          <label>
                            <input type="checkbox" value="" required />
                            &nbsp; <a href="#" data-toggle="modal" data-target="#myModal">
                              Agree Terms and Conditions
                            </a>
                          </label>
                        </div>
                        <div className="card-footer">
                          <button
                            onClick={savePassenger}
                            type="button"
                            disabled={!btn}
                            className="subscribe btn btn-primary btn-block shadow-sm"
                          >
                            Book Ticket
                          </button>
                        </div>
                      </form>
                      {/* Rest of your JSX */}
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

export default Passengers;
