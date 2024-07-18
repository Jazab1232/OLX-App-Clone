import React, { useState, useEffect } from 'react';
import '../styles/login.css';
import logo from '../assets/logo2.png';
import { Link, useLocation, useNavigate, useOutletContext } from 'react-router-dom';

export default function AddLoginInfo() {
    const [logedIn, setLogedin] = useOutletContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        const storedLoggedIn = localStorage.getItem('logedIn') === 'true';
        setLogedin(storedLoggedIn);
    }, []);

    useEffect(() => {
        localStorage.setItem('logedIn', logedIn);
    }, [logedIn]);

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    const handleSignUp = () => {
        if (validateEmail(email)) {

            const LogInInfo = { email, password };
            localStorage.setItem('LogInInfo', JSON.stringify(LogInInfo));
            setLogedin(true);
            alert('Your acoound is created ');
            console.log('Email is valid!')
        } else {
            alert('Invalid email address.');
        }

    };
    function handleLogin() {
        let loginInfo = JSON.parse(localStorage.getItem('LogInInfo'));
        if (loginInfo.email == email && loginInfo.password == password) {
            setLogedin(true);
            alert('You are Logged in');
        } else if (loginInfo.email !== email && loginInfo.password !== password) {

            alert('Email and Password is incorrect');
        } else if (!email && !password) {
            alert('Enter Email and Password')
        }
    }
    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    const query = useQuery();
    const method = query.get('method');
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="AddLoginInfo">
            <div className="loginInfo">
                <Link className="xMark">
                    <i className="fa-solid fa-xmark" onClick={handleBack}></i>
                </Link>
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <h2>{method === 'signup' ? 'Create Your Account' : 'Login with Email'}</h2>
                <div className="mailbox">
                    <h5>Email Address:</h5>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="passBox">
                    <h5>Password: </h5>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <h4>{method === 'signup' ? '' : 'Forget Your Password?'}</h4>
                <button onClick={handleLogin} style={{ display: method == 'login' ? 'flex' : "none" }}>Login</button>
                <button onClick={handleSignUp} style={{ display: method == 'signup' ? 'flex' : "none" }}>Create Account</button>
            </div>
        </div>
    );
}
