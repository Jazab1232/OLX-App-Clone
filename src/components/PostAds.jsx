import React, { useEffect, useState } from 'react'
import '../styles/postAds.css'
import logo from '../assets/logo.png'
import { products } from './products';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';



export default function PostAds() {
  const [brand, setBarnd] = useState('')
  const [condition, setcondition] = useState('')
  const [title, setTitle] = useState('')
  const [productDesc, setProductDesc] = useState('')
  const [location, setLocation] = useState('')
  const [category, setCategory] = useState('')
  const [price, setPrice] = useState([])
  const [userMail, setuserMail] = useState('')
  const [userNumber, setUserNumber] = useState()
  const [addProducts, setAddProducts] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      key: new Date().getTime(), 
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
    products.push(newProduct);

    setAddProducts([...addProducts, newProduct]);
    setBarnd('');
    setcondition('');
    setTitle('');
    setProductDesc('');
    setLocation('');
    setCategory('');
    setPrice('');
    setuserMail('');
    setUserNumber('');


    localStorage.setItem('userProducts', JSON.stringify(products));
    history.push('/');
  };
  localStorage.setItem('userProducts', JSON.stringify(addProducts))




  function handleBrandChange(e) {
    setBarnd(e.target.value)
  }
  function conditionChange(e) {
    setcondition(e.target.value)
  }

  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div className='postAds'>
      <div className="navBar">
        <i class="fa-solid fa-arrow-left" onClick={handleBack}></i>
        <Link to='/'> <img src={logo} alt="" /></Link>
      </div>
      <div className="postMain">
        <h1 style={{ display: 'flex', justifyContent: 'center', margin: '20px' }}>Post Your Ads</h1>
        <div className="adsDetail">
          <div className="adsCategory">
            <h4>Category</h4>
            <select name="" id="" value={category} onChange={(e) => { setCategory(e.target.value) }}>
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
            {/* <div className="categoryImg">
              <img src={mobile} alt="" />
              <div>
                <h5>Mobiles</h5>
                <p>Tablets</p>
              </div>

            </div> */}
            {/* <h5>Change</h5> */}
          </div>
          <div className="uploadImg">
            <h4>Upload Images</h4>
            <div className="uploadBtns">
              <i class="fa-solid fa-plus"></i>
              <i class="fa-solid fa-camera"></i>
              <i class="fa-solid fa-camera"></i>
              <i class="fa-solid fa-camera"></i>
              <i class="fa-solid fa-camera"></i>
              <i class="fa-solid fa-camera"></i>
              <i class="fa-solid fa-camera"></i>
              <i class="fa-solid fa-camera"></i>
              <i class="fa-solid fa-camera"></i>
              <i class="fa-solid fa-camera"></i>
              <i class="fa-solid fa-camera"></i>
              <i class="fa-solid fa-camera"></i>
            </div>
          </div>
          <div className="brandCondition">
            <div className="brand">
              <h4>Brand*</h4>
              <select value={brand} onChange={handleBrandChange}>
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
              {/* <p>Selected Brand: {selectedBrand}</p> */}

            </div>
            <div className="condition">
              <h4>Condition</h4>
              <select value={condition} onChange={conditionChange} >
                <option value="">Select Condition</option>
                <option value="used">Used</option>
                <option value="new">New</option>
                <option value="openBox">Open Box</option>
                <option value="Refurbished">Refurbished</option>
              </select>
            </div>
          </div>
          <div className="descBox ">
            <div className="descTitle inputFields">
              <h4>Add title</h4>
              <input
                type="text"
                value={title}
                placeholder='Enter Title'
                onChange={(e) => { setTitle(e.target.value) }}
              />
            </div>
            <div className="descField">
              <h4>Description</h4>
              <textarea
                value={productDesc}
                onChange={(e) => { setProductDesc(e.target.value) }}
                rows="10" cols="30"
                placeholder="Describe the item you're selling"

              ></textarea>
            </div>
            <div className="descLocation inputFields">
              <h4>Location</h4>
              <input
                value={location}
                onChange={(e) => { setLocation(e.target.value) }}
                type="text"
                placeholder='Type Address & City'
              />
            </div>
          </div>

        </div>

        <div className="descPrice inputFields">
          <h4>Price</h4>
          <input
            value={price}
            onChange={(e) => { setPrice(e.target.value) }}
            type="number"
            placeholder='Enter Price'
          />
        </div>
        <div className='userInfo'>
          <div className="userName inputFields">
            <h4>Email</h4>
            <input
              onChange={(e) => { setuserMail(e.target.value) }}
              value={userMail}
              type="email"
              placeholder='Enter Email'
            />
          </div>
          <div className="phoneNum inputFields">
            <h4>Mobile Phone Number</h4>
            <input
              value={userNumber}
              onChange={(e) => { setUserNumber(e.target.value) }}
              type="number"
              placeholder='Enter Phone Number'
            />
          </div>
          <div className="postBtn">
            <button onClick={handleSubmit}> Post Now </button>
          </div>
        </div>

      </div>
    </div>
  )
}
