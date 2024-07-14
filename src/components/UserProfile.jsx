
import React, { useState, useEffect } from 'react';
import '../styles/profile.css';
import profile from '../assets/profileIMG.png';
import { Link } from 'react-router-dom';
import CategoryNav from './CategoryNav';

export default function UserProfile() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const [about, setAbout] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem('userProfile'));
    if (storedProfile) {
      setName(storedProfile.name );
      setGender(storedProfile.gender );
      setAbout(storedProfile.about );
      setPhoneNumber(storedProfile.phoneNumber );
      setEmail(storedProfile.email );
    }
  }, []);

  const handleSaveChanges = () => {
    const userProfile = {
      name,
      gender,
      about,
      phoneNumber,
      email,
    };
    localStorage.setItem('userProfile', JSON.stringify(userProfile));
    alert('Profile Updated successfully!');

  };

  return (
    <div>
      <CategoryNav />
      <div className='userProfile'>
        <div className="profileBox">
          <h3>Edit Profile</h3>
          <div className="userImg">
            <h4>Profile Photo</h4>
            <img src={profile} alt="Profile" />
            <button>Upload Photo</button>
          </div>
          <div className="profileInfo">
            <div className="profileName">
              <h5>Name</h5>
              <input
                type="text"
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="profileGender">
              <h5>Gender</h5>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="preferNotToSay">Prefer not to say</option>
              </select>
            </div>
            <textarea
              placeholder='About me (optional)'
              value={about}
              onChange={(e) => setAbout(e.target.value)}
            ></textarea>
          </div>
          <div className="profileContact">
            <h5>Contact Info</h5>
            <input
              type="number"
              placeholder='Enter phone number'
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <input
              type="email"
              placeholder='Enter Email address'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="saveBtn">
            <button onClick={handleSaveChanges}>Save Changes</button>
          </div>
        </div>
      </div>
    </div>
  );
}




// import React from 'react'
// import '../styles/profile.css'
// import profile from '../assets/profileIMG.png'
// import { Link } from 'react-router-dom'
// import CategoryNav from './CategoryNav';

// export default function UserProfile() {
//   return (
//     <div>

//       <CategoryNav />
//       <div className='userProfile'>
//         <div className="profileBox">
//           <h3>Edit Profile</h3>
//           <div className="userImg">
//             <h4>Profile Photo</h4>
//             <img src={profile} alt="" />
//             <button>Upload Photo</button>
//           </div>
//           <div className="profileInfo">
//             <div className="profileName">
//               <h5>Name</h5>
//               <input type="text" placeholder='Name' />
//             </div>
//             <div className="profileGender">
//               <h5>Gender</h5>
//               <select name="" id="">
//                 <option value="">Male</option>
//                 <option value="">Female</option>
//                 <option value="">Prefer not to say</option>
//               </select>
//             </div>
//             <textarea name="" id="" placeholder='About me (optional)'></textarea>
//           </div>
//           <div className="profileContact">
//             <h5>Contact Info</h5>
//             <input type="number" placeholder='Enter phone number' />
//             <input type="email" placeholder='Enter Email address' />
//           </div>
//           <div className="saveBtn">
//             <button>Save Changes</button>
//           </div>
//         </div>
//       </div >
//     </div>
//   )
// }
