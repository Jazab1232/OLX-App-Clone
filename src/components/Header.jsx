import React, { useEffect, useState } from 'react';
import '../styles/header.css';
import profile from '../assets/profileIMG.png'
import logo from '../assets/logo2.png';
import { Link } from 'react-router-dom';

export default function Header({ disOption, setDisOption, setInputVal }) {
    const [logedIn, setLogedIn] = useState(false);
    const [input, setInput] = useState('');

    function handleChange() {
        setInputVal(input);
    }

    useEffect(() => {
        const storedLoggedIn = localStorage.getItem('logedIn') === 'true';
        setLogedIn(storedLoggedIn);
    }, []);

    return (
        <div className='header'>
            <div className="nav">
                <i class="fa-solid fa-bars" onClick={() => setDisOption(!disOption)} ></i>
                <Link to='/' className="logo1">
                    <img src={logo} alt="" />
                </Link>
                <div className="cars">
                    <i className="fa-solid fa-car"></i>
                    <span>Motors</span>
                </div>
                <div className="property">
                    <i className="fa-regular fa-building"></i>
                    <span>Property</span>
                </div>
            </div>
            <div className="nav2">
                <div className="location">
                    <select name="" id="location">
                        <option value="">Pakistan</option>
                        <option value="">Punjab,Pakistan</option>
                        <option value="">Islamabad,Pakistan</option>
                        <option value="">Sindh,Pakistan</option>
                        <option value="">KPK,Pakistan</option>
                    </select>
                </div>
                <div className="searchBox">
                    <input type="text" onChange={(e) => setInput(e.target.value)} placeholder='Find Cars, Mobile Phones and more...' />
                    <button onClick={handleChange}>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </div>
                <div className="navIcons">
                    <i className="fa-regular fa-comment"></i>
                    <i className="fa-regular fa-bell"></i>
                    <div className="profileIcon" onClick={() => setDisOption(!disOption)} style={{ display: logedIn ? 'inline-block' : 'none' }}>
                        <img src={profile} alt="" />
                    </div>
                    <Link to='login' style={{ display: logedIn ? 'none' : 'inline-block', textDecoration: 'none', color: 'black' }}>
                        <h3>Login</h3>
                    </Link>
                    <Link to={logedIn ? 'post-ads' : 'login'} className="sellButton">
                        <p>+ Sell</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
