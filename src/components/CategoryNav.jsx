import React from 'react'
import '../styles/categoryNav.css';
import { Link } from 'react-router-dom';

export default function CategoryNav() {
    return (
        <div>
            <div className='categoryNav'>
                <h5>ALL CATEGORIES</h5>
                <Link to={`/product-section?category=mobiles`} className='ctglinks'>Mobiles </Link>
                <Link to={`/product-section?category=cars`} className='ctglinks'>Cars</Link>
                <Link to={`/product-section?category=bikes`} className='ctglinks'>Motorcycle</Link>
                <Link to={`/product-section?category=houses`} className='ctglinks'>House</Link>
                <Link to={`/product-section?category=dresses`} className='ctglinks'>Fashion</Link>
                <Link to={`/product-section?category=tablets`} className='ctglinks'>Tablets</Link>
                <Link to={`/product-section?category=electronics`} className='ctglinks'>Electronics</Link>
            </div>
        </div>
    )
}
