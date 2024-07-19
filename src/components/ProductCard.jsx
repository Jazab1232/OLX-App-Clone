import React, { useState, useEffect } from 'react';
import '../styles/card.css';
import { Link } from 'react-router-dom';
import { categoryImages } from './imgMapping';

export default function ProductCard({ price, title, location, time, index, category }) {
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
        <Link to={`/detail?key=${index}&category=${category}`} className='productCard'>
            <div className="cardImg">
                <img src={imageSrc} alt="" />
            </div>
            <div className="cardContent">
                <div className="cardPrice">
                    <h4>RS {price}</h4>
                    <i 
                        className={`fa-${isFavorited ? 'solid' : 'regular'} fa-heart`} 
                        onClick={addToFavorites}
                    ></i>
                </div>
                <p className='cardTitle'>{title}</p>
                <p className='cardLocation' style={{ textTransform: 'capitalize' }}>{location}</p>
                <p className='cardTime'>{time}</p>
            </div>
        </Link>
    );
}
