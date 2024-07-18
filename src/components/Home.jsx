import React, { useEffect, useState } from 'react';
import '../styles/home.css';
import mobile from '../assets/mobiles.png';
import books from '../assets/books.png';
import electronics from '../assets/electronics.png';
import furniture from '../assets/furniture.png';
import fashion from '../assets/fashion.png';
import key from '../assets/key.png';
import kids from '../assets/kids.png';
import vehicles from '../assets/vehicles.png';
import ProductCard from './ProductCard';
import ProfileOption from './ProfileOption';
import CategoryNav from './CategoryNav';
import { products } from './products';
import { Link, useOutletContext } from 'react-router-dom';

export default function Home() {
    const [disOption, setDisOption, logedIn, setLogedin,
        cardData, setCardData, inputVal, setInputVal] = useOutletContext()

    let userAdsData = JSON.parse(localStorage.getItem('userProducts')) || []
    let fetchProducts = JSON.parse(localStorage.getItem('products')) || []
    let combinedData = [...products, ...userAdsData]
    localStorage.setItem('products', JSON.stringify(combinedData))
    let filterProducts = combinedData.filter((data) => {
        return data.category.includes(inputVal)
    })
    // localStorage.setItem('products', JSON.stringify(products))
    // let fetchProducts = JSON.parse(localStorage.getItem('products'))
    // let filterProducts = products.filter((data) => {
    //     return data.category.includes(inputVal) 
    // })



    return (
        <div className='home'>
            <CategoryNav />
            <h2 style={{ marginTop: '20px' }}>All categories</h2>
            <div className="homeLinksContainer">
                <div className="homeLinks">
                    <div className="link">
                        <Link to={`/product-section?category=mobiles`} className="img">
                            <img src={mobile} alt="" />
                        </Link>
                        <p>Mobiles</p>
                    </div>
                    <div className="link">
                        <Link to={`/product-section?category=cars`} className="img">
                            <img src={vehicles} alt="" />
                        </Link>
                        <p>Vehicles</p>
                    </div>
                    <div className="link">
                        <Link to={`/product-section?category=dresses`} className="img">
                            <img src={fashion} alt="" />
                        </Link>
                        <p>Fashion & Beauty</p>
                    </div>
                    <div className="link">
                        <Link to={`/product-section?category=houses`} className="img">
                            <img src={key} alt="" />
                        </Link>
                        <p>Property For Sale</p>
                    </div>
                    <div className="link">
                        <Link to={`/product-section?category=electronics`} className="img">
                            <img src={electronics} alt="" />
                        </Link>
                        <p>Electronics</p>
                    </div>
                    <div className="link">
                        <Link to={`/product-section?category=books`} className="img">
                            <img src={books} alt="" />
                        </Link>
                        <p>Books</p>
                    </div>
                    <div className="link">
                        <Link to={`/product-section?category=kids`} className="img">
                            <img src={kids} alt="" />
                        </Link>
                        <p>Kids</p>
                    </div>
                    <div className="link">
                        <Link to={`/product-section?category=furniture`} className="img">
                            <img src={furniture} alt="" />
                        </Link>
                        <p>Furniture & Home decor</p>
                    </div>
                </div>
            </div>

            <div className="adList">
                <h2>Mobile Phones</h2>
                <div className="cardBox">
                    {filterProducts.filter((product) => {
                        return product.category.includes('mobiles')
                    }).map((data) => (
                        <ProductCard
                            index={data.key}
                            category={data.category}
                            price={data.price}
                            title={data.title}
                            location={data.location}
                            time={data.time}
                        />
                    ))}
                </div>
            </div>
            <div className="adList">
                <h2>Cars</h2>
                <div className="cardBox">
                    {filterProducts.filter((product) => {
                        return product.category.includes("cars")
                    }).map((data, index) => (
                        <ProductCard
                            // index={index + (new Date().getTime())}
                            index={data.key}
                            category={data.category}
                            price={data.price}
                            title={data.title}
                            location={data.location}
                            time={data.time}

                        />
                    ))}
                </div>
            </div>
            <div className="adList">
                <h2>Bikes and Motorcycles</h2>
                <div className="cardBox">
                    {filterProducts.filter((product) => {
                        return product.category.includes("bikes")
                    }).map((data, index) => (
                        <ProductCard
                            // index={index + (new Date().getTime())}
                            index={data.key}
                            category={data.category}
                            price={data.price}
                            title={data.title}
                            location={data.location}
                            time={data.time}
                        />
                    ))}
                </div>
            </div>
            <div className="adList">
                <h2>Houses</h2>
                <div className="cardBox">
                    {filterProducts.filter((product) => {
                        return product.category.includes("houses")
                    }).map((data, index) => (
                        <ProductCard
                            // index={index + (new Date().getTime())}
                            index={data.key}
                            category={data.category}
                            price={data.price}
                            title={data.title}
                            location={data.location}
                            time={data.time}
                        />
                    ))}
                </div>
            </div>
            <div className="adList">
                <h2>Tablets</h2>
                <div className="cardBox">
                    {filterProducts.filter((product) => {
                        return product.category.includes("tablets")
                    }).map((data, index) => (
                        <ProductCard
                            // index={index + (new Date().getTime())}
                            index={data.key}
                            category={data.category}
                            price={data.price}
                            title={data.title}
                            location={data.location}
                            time={data.time}
                        />
                    ))}
                </div>
            </div>
            <ProfileOption />
        </div>
    );
}
