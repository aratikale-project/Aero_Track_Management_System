import React, { useState } from 'react';
import UserService from '../services/UserService';
import planeBG from "../assets/images/planebg1.jpg";
import Footer from './Footer';
import Header from './Header';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const service = new UserService();
    const navigate = useNavigate();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errormsg, setErrormsg] = useState("");
    const [flag, setFlag] = useState(false);
    const [btn, setBtn] = useState(false);

    const validateUser = () => {
        if (username !== '' && password !== '') {
            service.validateUser(username, password)
                .then(response => {
                    if (response.status === 200) {
                        localStorage.setItem('user', JSON.stringify(response.data));
                        if (response.data.isadmin === 0)
                            navigate('/booking');
                        else
                            navigate('/admin');
                    }
                })
                .catch(error => {
                    console.log(error);
                    setErrormsg('Invalid username or password.');
                    setPassword("");
                    setFlag(true);
                });
        } else {
            alert('All fields are required');
        }
    };

    return (
        <div className='pt-5'>
            <Header />
            <div className="py-5" style={{ backgroundImage: `url(${planeBG})`, overflow: 'hidden', height: '600px' }}>
                <div className="row mb-4">
                    <div className="col-lg-8 mx-auto text-center">
                        <h1 className="display-6" style={{ color: 'white', fontWeight: '50pt' }}>Login</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6 mx-auto">
                        <div className="card ">
                            <div className="card-header">
                                <div className="bg-white shadow-sm pt-4 pl-2 pr-2 pb-2">
                                    <div className="tab-content">
                                        <div className="tab-pane fade show active pt-3">
                                            <form>
                                                <div className="form-group">
                                                    <h6><span className="form-label">Username</span></h6>
                                                    <input
                                                        type="text"
                                                        name="username"
                                                        value={username}
                                                        onChange={e => setUsername(e.target.value)}
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <h6><span className="form-label">Password</span></h6>
                                                    <input
                                                        type="password"
                                                        name="password"
                                                        value={password}
                                                        onChange={e => {
                                                            setPassword(e.target.value);
                                                            setFlag(false);
                                                            setBtn(true);
                                                        }}
                                                        className="form-control"
                                                    />
                                                </div>

                                                <div className="card-footer">
                                                    <button
                                                        type="button"
                                                        disabled={!btn}
                                                        onClick={validateUser}
                                                        className="subscribe btn btn-primary btn-block shadow-sm"
                                                    >
                                                        Login
                                                    </button>
                                                </div>
                                            </form>
                                            <br />
                                            {flag && <div style={{ textAlign: 'center' }} className="alert alert-danger"> {errormsg} </div>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="form-group">
                                <div >
                                    <Link className="card-link" to="/register">
                                        <button type="button" className="btn btn-link btn-block">
                                            New User? Register Now!
                                        </button>
                                    </Link>
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

export default Login;
