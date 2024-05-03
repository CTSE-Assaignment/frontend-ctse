import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';


const API_BASE = "http://localhost:4000";

const UserLogin = ({ loggedIn, setLoggedIn }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    console.log(loggedIn)

    const loginUser = async () => {
        const user = {
            email: email,
            password: password
        };

        try {
            const response = await axios.post(API_BASE + '/users/login', user);
            const { token, user: loggedInUser } = response.data;
            localStorage.setItem('token', token); // Store token in local storage
            await setLoggedIn(true); // Set logged in state to true
            console.log(loggedIn); // Set logged in state to true
            console.log("User logged in:", loggedInUser);
            localStorage.setItem('email', loggedInUser.email);
            localStorage.setItem('user', loggedInUser._id);
            navigate('/book');
            // Redirect the user or perform any other actions after successful login
        } catch (error) {
            console.error('Error logging in:', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Failed to log in. Please check your credentials and try again.',
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!email || !password) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in all fields',
            });
            return;
        }
        loginUser();
    };

    return (
        <section className="vh-100" style={{ backgroundImage: `url('images/register.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center', height: '100%' }}>
            <div className="container-fluid h-custom h-100 text-dark font-weight-bold">
                <div className="row d-flex justify-content-center align-items-center h-100s h-100 text-light">
                    <div className="col-md-9 col-lg-6 col-xl-5"></div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1" style={{ padding: '80px', borderRadius: '15px', boxShadow: '0 0 20px rgba(0, 0, 0, 0.1)' }}>
                        <div className='bg-primary rounded-top text-center p-2' >Login</div>
                        <form onSubmit={handleSubmit} className="p-4 d-flex flex-column bg-light rounded-bottom">
                        {loggedIn}

                            <div className="form-outline mb-4 bg-light">
                                <input type="email" id="formEmail" className="form-control form-control-lg"
                                    placeholder="Enter Email"
                                    onChange={e => setEmail(e.target.value)}
                                    value={email}
                                    style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
                                />
                            </div>

                           

                            <div className="form-outline mb-3 bg-light">
                                <input type="password" id="formPassword" className="form-control form-control-lg"
                                    placeholder="Enter password"
                                    onChange={e => setPassword(e.target.value)}
                                    value={password}
                                    style={{ boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}
                                />
                            </div>

                            
                            <div className="text-center text-lg-start mt-4 pt-2 bg-light">
                                <button className="btn btn-primary btn-lg rounded-pill"
                                    style={{ paddingLeft: '2.5rem', paddingRight: '2.5rem', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' }} onClick={loginUser}>Login</button>
                                <p className="small fw-bold mt-2 pt-1 mb-0 text-light">Don't have an account? <a href="register"
                                    className="link-primary">Register</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default UserLogin;
