import React from 'react'
import '../styles/card.css'
import bike from '../assets/motorBike.jpg'
import { Link } from 'react-router-dom'
import { categoryImages } from './imgMapping';

export default function ProductCard({ price, title, location, time, index, category }) {
    const imageSrc = categoryImages[category];

    return (
        <Link to={`/detail?key=${index}&category=${category}`} className='productCard'>
            <div className="cardImg">
                <img src={imageSrc} alt="" />
            </div>
            <div className="cardContent">
                <div className="cardPrice">
                    <h4>RS {price}</h4>
                    <i className="fa-regular fa-heart" ></i>
                </div>
                <p className='cardTitle'>{title}</p>
                <p className='cardLocation' style={{textTransform:'capitalize'}}>{location}</p>
                <p className='cardTime'>{time}</p>
            </div>
        </Link>
    )
}
