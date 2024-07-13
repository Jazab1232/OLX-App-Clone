import React from 'react'
import '../styles/profileOption.css'
import profile from '../assets/profileIMG.png'
import { Link, useOutletContext } from 'react-router-dom'

export default function ProfileOption() {
    const [disOption, setDisOption, logedIn, setLogedin] = useOutletContext();
    function handleLogOut() {
        setLogedin(false)
        localStorage.setItem('logedIn', 'false');
        setDisOption(false);
    }

    return (
        <div className="profileOptions" style={{ display: disOption ? 'block' : 'none' }}>
            <div className="profile">
                <div className="profileImg">
                    <img src={profile} alt="" />
                </div>
                <div className="userContent">
                    <p>Hello,</p>
                    <h3>Jazab Shoukat</h3>
                </div>
            </div>
            <Link to='/user-profile' className='btnProfile'>View and edit your profile</Link>
            <div className="otherOption">
                <Link to={`my-ads`} onClick={() => { setDisOption(false) }} style={{ textDecoration: 'none', color: 'black', display: 'flex', paddingLeft: '20px', gap: '10px' }} ><i className="fa-regular fa-file"></i>My ads</Link>
                <p><i className="fa-regular fa-heart"></i>Favourite & Saved</p>
                <p><i className="fa-regular fa-eye"></i>Public profile</p>
                {/* <p><i className="fa-solid fa-question" style={{ border: "2px solid black", borderRadius: '50%', height: '25px' }}></i>Help</p> */}
                <p><i className="fa-solid fa-gear"></i>Setting</p>
                <p onClick={handleLogOut}><i className="fa-solid fa-arrow-right-from-bracket"></i>Log Out</p>
            </div>
        </div>
    )
}
