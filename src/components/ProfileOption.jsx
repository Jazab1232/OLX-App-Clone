import React from 'react';
import '../styles/profileOption.css';
import profile from '../assets/profileIMG.png';
import { Link, useOutletContext } from 'react-router-dom';

export default function ProfileOption() {
    const [disOption, setDisOption, logedIn, setLogedin] = useOutletContext();

    function handleLogOut() {
        setLogedin(false);
        localStorage.setItem('logedIn', 'false');
        setDisOption(false);
    }

    return (
        <div className="profileOptions" style={{ display: disOption ? 'flex' : 'none' }}>
            <div className="profile">
                <div className="profileImg">
                    <img src={profile} alt="" />
                </div>
                <div className="userContent">
                    <p>Hello,</p>
                    <h3>Jazab Shoukat</h3>
                </div>
            </div>
            <Link to={logedIn ? `/user-profile` : `/login`} onClick={() => { setDisOption(false); }} className='btnProfile'>
                View and edit your profile
            </Link>
            <div className="otherOption">
                <Link to={logedIn ? `/my-ads` : `/login`} onClick={() => { setDisOption(false); }} style={{ textDecoration: 'none', color: 'black', display: 'flex', paddingLeft: '20px', gap: '10px' }} >
                    <i className="fa-regular fa-file"></i>My ads
                </Link>
                <Link to={logedIn ? `/post-ads` : `/login`} onClick={() => { setDisOption(false); }} style={{ textDecoration: 'none', color: 'black', display: 'flex', paddingLeft: '20px', gap: '10px' }} >
                    <i className="fa-solid fa-camera"></i>Start Selling
                </Link>
                <Link to={`favorites`} onClick={() => { setDisOption(false); }} style={{ textDecoration: 'none', color: 'black', display: 'flex', paddingLeft: '20px', gap: '10px' }} >
                    <i className="fa-regular fa-heart"></i>Favorites and Saved
                </Link>
                <p><i className="fa-regular fa-eye"></i>Public profile</p>
                {logedIn ?
                    <p onClick={handleLogOut}><i className="fa-solid fa-arrow-right-from-bracket"></i>Log Out</p>
                    : <Link to={`/login`} onClick={() => { setDisOption(false); }} style={{ textDecoration: 'none', color: 'black', display: 'flex', paddingLeft: '20px', gap: '10px' }} >
                        <i className="fa-solid fa-arrow-right-from-bracket"></i>Log In
                    </Link>
                }
            </div>
        </div>
    );
}
