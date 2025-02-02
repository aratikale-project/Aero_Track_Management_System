
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import UserService from '../services/UserService';
import planeBG from "../assets/images/planebg1.jpg";
import Footer from './Footer';
import Header from './Header';

const Register = () => {
    const service = new UserService();
    const navigate = useNavigate(); // Initialize useNavigate

    const [userData, setUserData] = useState({
        userId: 0,
        fname: "",
        email: "",
        phone: null,
        username: "",
        password: "",
        isadmin: 0
    });

    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [registrationFlag, setRegistrationFlag] = useState(false);

    const handleInput = (event) => {
        const { name, value } = event.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handlePass = (event) => {
        const confirmPassword = event.target.value;
        setPasswordConfirm(confirmPassword);

        if (confirmPassword !== userData.password) {
            setPasswordError("Invalid Password!!");
            setRegistrationFlag(false);
        } else {
            setPasswordError("");
            setRegistrationFlag(true);
        }
    };

    const registerUser = () => {
        service.addUser(userData)
            .then((response) => {
                if (response.status === 200) {
                    console.log(response.data);
                    navigate('/login/'); // Use useNavigate to navigate
                }
            })
            .catch((error) => {
                console.log(error);
                alert('Registration failed');
            });

        setUserData({
            userId: 0,
            fname: "",
            email: "",
            phone: 0,
            username: "",
            password: "",
            isadmin: 0
        });

        setPasswordConfirm("");
        setPasswordError("");
    };

    return (
		<div className='pt-5'>
		<Header />
		<div className="py-5" style={{ backgroundImage: `url(${planeBG})`, overflow: 'hidden', height: '1000px' }}>
			<div className="row mb-4">
				<div className="col-lg-8 mx-auto text-center">
					<h1 className="display-6" style={{ color: 'white', fontWeight: '50pt' }}>Registration</h1>
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
												<h6><span className="form-label">Name</span></h6>
												<input type="text" name="fname" value={userData.fname} onChange={handleInput} required className="form-control" />
											</div>
											<div className="form-group">
												<h6><span className="form-label">Email</span></h6>
												<input type="email" name="email" value={userData.email} onChange={handleInput} required className="form-control" />
											</div>
											<div className="form-group">
												<h6><span className="form-label">Contact</span></h6>
												<input name="phone" pattern="[6-9][0-9]{9}" maxLength="10" value={userData.phone || ""} onChange={handleInput} required className="form-control" />
											</div>
											<div className="form-group">
												<h6><span className="form-label">Username</span></h6>
												<input type="text" name="username" value={userData.username} onChange={handleInput} required className="form-control" />
											</div>
											<div className="form-group">
												<h6><span className="form-label">Password</span></h6>
												<input type="password" name="password" value={userData.password} onChange={handleInput} required className="form-control" />
											</div>
											<div className="form-group">
												<h6><span className="form-label">Confirm Password</span></h6>
												<input type="password" name="cpasswd" onChange={handlePass} className="form-control" required />
												<div className="text-danger">{passwordError} </div>
											</div>
											<div className="card-footer">
												<button onClick={registerUser} className="subscribe btn btn-primary btn-block shadow-sm" disabled={!registrationFlag}>Register</button>
											</div>
										</form>
									</div>
								</div>
								<div className="form-group">
									<div ><Link className="card-link" to="/login"><button type="button" className="btn btn-link btn-block">Already registered? Login Now!</button></Link> </div>
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

export default Register;



