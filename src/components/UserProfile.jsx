import React from 'react'
import '../styles/profile.css'
import profile from '../assets/profileIMG.png'
import { Link } from 'react-router-dom'
import CategoryNav from './CategoryNav';

export default function UserProfile() {
  return (
    <div>

      <CategoryNav />
      <div className='userProfile'>
        <div className="profileBox">
          <h3>Edit Profile</h3>
          <div className="userImg">
            <h4>Profile Photo</h4>
            <img src={profile} alt="" />
            <button>Upload Photo</button>
          </div>
          <div className="profileInfo">
            <div className="profileName">
              <h5>Name</h5>
              <input type="text" placeholder='Name' />
            </div>
            <div className="profileGender">
              <h5>Gender</h5>
              <select name="" id="">
                <option value="">Male</option>
                <option value="">Female</option>
                <option value="">Prefer not to say</option>
              </select>
            </div>
            <textarea name="" id="" placeholder='About me (optional)'></textarea>
          </div>
          <div className="profileContact">
            <h5>Contact Info</h5>
            <input type="number" placeholder='Enter phone number' />
            <input type="email" placeholder='Enter Email address' />
          </div>
          <div className="saveBtn">
            <button>Save Changes</button>
          </div>
        </div>
      </div >
    </div>
  )
}
