import React from 'react'
import '../styles/categoryCard.css'
import { categoryImages } from './imgMapping';
import { Link, useOutletContext } from 'react-router-dom';

export default function CategoryCard({ price, title, location, time, category, index }) {
    const [showFilter, setShowFilter] = useOutletContext()
    const imageSrc = categoryImages[category];

    return (
        <Link to={`/detail?key=${index}&category=${category}`} className='categoryCard' >
            <div className="imgCard">
                <img src={imageSrc} alt="" />
            </div>
            <div className="cardText">
                <div className="priceBox">
                    <h2>RS {Number(price)}</h2>
                    <i className="fa-regular fa-heart"></i>
                </div>
                <p className='cardTitle'>{title}</p>
                <p className='location' style={{ textTransform: 'capitalize' }}>{location}</p>
                <p className='time'>{time}</p>
                <div className="btnBox">
                    <button >call</button>
                    <button style={{ color: 'white', backgroundColor: "#04111c" }}>chat</button>
                </div>
            </div>
        </Link>
    )
}
