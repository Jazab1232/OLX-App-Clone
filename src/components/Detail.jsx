import React, { useEffect, useState } from 'react'
import '../styles/detail.css'
// import mainImg from '../assets/carIMG.jpeg'
import profile from '../assets/profileIMG.png'
import CategoryNav from './CategoryNav';
import { categoryImages } from './imgMapping';
import { Link, useLocation } from 'react-router-dom';

export default function () {
    const [showNum, setShowNum] = useState(false)

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    const query = useQuery();
    const productkey = query.get('key');
    const category = query.get('category');
//
let userAdsData=JSON.parse(localStorage.getItem('userProducts'))
let productData = JSON.parse(localStorage.getItem('products'))
let combinedData=[...productData,...userAdsData]
//
    let detailData = combinedData.filter((data) => {
        return data.key == productkey
    })
    console.log('detail pages',userAdsData);
    const imageSrc = categoryImages[category];

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    function showNumber() {
        setShowNum(true)
    }
    return (
        <div>
            <CategoryNav />
            <div className="topBox">
                <div className="imgContainer">
                    <img src={imageSrc} alt="" />
                </div>
                <div className="topDetails">
                    <div className="contactBox">
                        <div className="contactInfo">
                            <div className="contactImg">
                                <img src={profile} alt="" />
                            </div>
                            <div className="contactText">
                                <h4>Muhammad Ali</h4>
                                <p>Member since 2020</p>
                                <Link to='/user-profile' style={{ textDecoration: 'none', color: '#133035' }}>
                                    See profile <i class="fa-solid fa-chevron-right"></i></Link>

                            </div>
                        </div>
                        <button id='btnDark' onClick={showNumber}><i class="fa-solid fa-phone "></i>Show phone number</button>
                        <p className='showNum' style={{ display: showNum ? 'flex' : 'none' }}><i class="fa-solid fa-phone "></i>+92 345 7777777 </p>
                        <button><i class="fa-regular fa-comment"></i>Chat</button>
                    </div>
                    <div className="locationBox">
                        <h2>Location</h2>
                        <p style={{textTransform:'capitalize'}}><i class="fa-solid fa-location-dot"></i>{productData[0].location}</p>
                    </div>
                </div>
            </div>
            <div className="bottomBox">
                <div className="priceDiv">
                    <div >
                        <h1>RS {detailData[0].price}</h1>
                    </div>
                    <h3>{detailData[0].title}</h3>
                    <p style={{textTransform:'capitalize'}}><i class="fa-solid fa-location-dot" style={{ marginRight: '5px' }}></i>{productData[0].location}</p>
                </div>
                <div className="detailsBox">
                    <h2>Details</h2>
                    <div className="detailsList">
                        <div>
                            <p>Make</p>
                            <p>Price</p>
                            <p>KM's driven</p>
                            <p>Fuel</p>
                            <p>Body Type</p>
                            <p>Registration city</p>
                            <p>Assembly</p>
                        </div>
                        <div>
                            <h5>Honda</h5>
                            <h5>2,600,000</h5>
                            <h5>212,000</h5>
                            <h5>Petrol</h5>
                            <h5>Sedan</h5>
                            <h5>Islamabad</h5>
                            <h5>Local</h5>
                        </div>
                        <div>
                            <p>Make</p>
                            <p>Price</p>
                            <p>KM's driven</p>
                            <p>Fuel</p>
                            <p>Body Type</p>
                            <p>Registration city</p>
                            <p>Assembly</p>
                        </div>
                        <div>
                            <h5>Honda</h5>
                            <h5>2,600,000</h5>
                            <h5>212,000</h5>
                            <h5>Petrol</h5>
                            <h5>Sedan</h5>
                            <h5>Islamabad</h5>
                            <h5>Local</h5>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
