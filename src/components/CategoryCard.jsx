import React, { useEffect, useState } from 'react'
import '../styles/categoryCard.css'
import { categoryImages } from './imgMapping';
import { Link } from 'react-router-dom';

export default function CategoryCard({ price, title, location, time, category, index }) {
    const [isFavorited, setIsFavorited] = useState(false);
    const imageSrc = categoryImages[category];

    useEffect(() => {
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const isAlreadyFavorited = favorites.some(fav => fav.index === index && fav.category === category);
        setIsFavorited(isAlreadyFavorited);
    }, [index, category]);

    const addToFavorites = (e) => {
        e.preventDefault();
        const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const newFavorite = { price, title, location, time, index, category, imageSrc };

        const isAlreadyFavorited = favorites.some(fav => fav.index === index && fav.category === category);
        let updatedFavorites;

        if (isAlreadyFavorited) {
            updatedFavorites = favorites.filter(fav => fav.index !== index || fav.category !== category);
            setIsFavorited(false);
        } else {
            updatedFavorites = [...favorites, newFavorite];
            setIsFavorited(true);
        }

        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    };

    return (
        <Link to={`/detail?key=${index}&category=${category}`} className='categoryCard' >
            <div className="imgCard">
                <img src={imageSrc} alt="" />
            </div>
            <div className="cardText">
                <div className="priceBox">
                    <h2>RS {Number(price)}</h2>
                    <i
                        className={`fa-${isFavorited ? 'solid' : 'regular'} fa-heart`}
                        onClick={addToFavorites}>

                    </i>
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
