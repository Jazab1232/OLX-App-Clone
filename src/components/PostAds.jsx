import React, { useState } from 'react';
import '../styles/postAds.css';
import logo from '../assets/logo.png';
import { Link, useNavigate } from 'react-router-dom';

export default function PostAds() {
  const [brand, setBrand] = useState('');
  const [condition, setCondition] = useState('');
  const [title, setTitle] = useState('');
  const [productDesc, setProductDesc] = useState('');
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [userMail, setUserMail] = useState('');
  const [userNumber, setUserNumber] = useState('');
  const [addProducts, setAddProducts] = useState(
    JSON.parse(localStorage.getItem('userProducts')) || []
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      key: new Date().getTime(), // Use 'id' instead of 'key'
      brand,
      condition,
      title,
      productDesc,
      location,
      category,
      price,
      userMail,
      userNumber,
    };

    const updatedProducts = [...addProducts, newProduct];
    setAddProducts(updatedProducts);
    localStorage.setItem('userProducts', JSON.stringify(updatedProducts));

    setBrand('');
    setCondition('');
    setTitle('');
    setProductDesc('');
    setLocation('');
    setCategory('');
    setPrice('');
    setUserMail('');
    setUserNumber('');
  };

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className='postAds'>
      <div className="navBar">
        <i className="fa-solid fa-arrow-left" onClick={handleBack}></i>
        <Link to='/'>
          <img src={logo} alt="Logo" />
        </Link>
      </div>
      <div className="postMain">
        <h1 style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>Post Your Ads</h1>
        <div className="adsDetail">
          <div className="adsCategory">
            <h4>Category</h4>
            <select value={category} onChange={(e) => setCategory(e.target.value)}>
              <option value="">Select Category</option>
              <option value="mobiles">Mobiles</option>
              <option value="cars">Cars</option>
              <option value="bikes">Bikes</option>
              <option value="dress">Dress</option>
              <option value="kids">Kids</option>
              <option value="houses">Houses</option>
              <option value="electronics">Electronics</option>
              <option value="books">Books</option>
              <option value="furniture">Furniture</option>
            </select>
          </div>
          <div className="uploadImg">
            <h4>Upload Images</h4>
            <div className="uploadBtns">
              <i className="fa-solid fa-plus"></i>
              <i className="fa-solid fa-camera"></i>
              {/* Add more icons as needed */}
            </div>
          </div>
          <div className="brandCondition">
            <div className="brand">
              <h4>Brand*</h4>
              <select value={brand} onChange={(e) => setBrand(e.target.value)}>
                <option value="">Select Brand</option>
                <option value="Apple">Apple</option>
                <option value="Samsung">Samsung</option>
                <option value="Huawei">Huawei</option>
                <option value="Infinix">Infinix</option>
                <option value="Redmi">Redmi</option>
                <option value="Realme">Realme</option>
                <option value="Lenovo">Lenovo</option>
                <option value="Asus">Asus</option>
                <option value="Tecno">Tecno</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div className="condition">
              <h4>Condition</h4>
              <select value={condition} onChange={(e) => setCondition(e.target.value)}>
                <option value="">Select Condition</option>
                <option value="used">Used</option>
                <option value="new">New</option>
                <option value="openBox">Open Box</option>
                <option value="Refurbished">Refurbished</option>
              </select>
            </div>
          </div>
          <div className="descBox">
            <div className="descTitle inputFields">
              <h4>Add title</h4>
              <input
                type="text"
                value={title}
                placeholder='Enter Title'
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="descField">
              <h4>Description</h4>
              <textarea
                value={productDesc}
                onChange={(e) => setProductDesc(e.target.value)}
                rows="10"
                placeholder="Describe the item you're selling"
              ></textarea>
            </div>
            <div className="descLocation inputFields">
              <h4>Location</h4>
              <input
                type="text"
                value={location}
                placeholder='Type Address & City'
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="descPrice inputFields">
          <h4>Price</h4>
          <input
            type="number"
            value={price}
            placeholder='Enter Price'
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className='userInfo'>
          <div className="userName inputFields">
            <h4>Email</h4>
            <input
              type="email"
              value={userMail}
              placeholder='Enter Email'
              onChange={(e) => setUserMail(e.target.value)}
            />
          </div>
          <div className="phoneNum inputFields">
            <h4>Mobile Phone Number</h4>
            <input
              type="number"
              value={userNumber}
              placeholder='Enter Phone Number'
              onChange={(e) => setUserNumber(e.target.value)}
            />
          </div>
          <div className="postBtn">
            <button onClick={handleSubmit}>Post Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}
