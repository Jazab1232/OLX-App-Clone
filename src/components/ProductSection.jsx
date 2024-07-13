import React, { useEffect, useState } from 'react'
import '../styles/mobilePhone.css'
import CategoryNav from './CategoryNav'
import CategoryCard from './CategoryCard'
import FilterTab from './FilterTab';
import { useLocation } from 'react-router-dom';

export default function ProductSection() {
    const [accessories, setAccessories] = useState(false)
    const [minPrice, setMinPrice] = useState([])
    const [maxPrice, setMaxPrice] = useState([])
    const [condition, setCondition] = useState([])
    const [location, setLocation] = useState([])
    const [isDeliverable, setIsDeliverable] = useState([])

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }
    const query = useQuery();
    const category = query.get('category');
    let productData = JSON.parse(localStorage.getItem('products'))
    let filterData = productData.filter((data) => {
        return data.category == category
    })
    let filterData2 = filterData.filter((data) => {
        if (isDeliverable.length === 0) {
            return true;
        } else {
            return isDeliverable.includes(data.isDeliverable);
        }
    }).filter((data) => {
        if (condition.length === 0) {
            return true;
        } else {
            return condition.includes(data.condition);
        }
    }).filter((data) => {
        if (location.length === 0) {
            return true;
        } else {
            return location.includes(data.location);
        }
    }).filter((data) => {
        if (maxPrice == 0 && minPrice == 0) {
            return true;
        } else {
            return (data.price >= minPrice) && (data.price <= maxPrice)
        }
    })


    return (
        <div>
            <CategoryNav />
            <p style={{ opacity: '.8', paddingInline: '36px', marginBottom: '20px', marginTop: '40px', textTransform: 'capitalize' }}>Home / {category}</p>
            <h2 className='title' >{category} in Pakistan <span>{100}+ ads</span></h2>
            <div className="mainPhone">
                <div className="filterBox">
                    <FilterTab
                        condition={condition}
                        location={location}
                        isDeliverable={isDeliverable}
                        setAccessories={setAccessories}
                        setCondition={setCondition}
                        setIsDeliverable={setIsDeliverable}
                        setLocation={setLocation}
                        setMaxPrice={setMaxPrice}
                        setMinPrice={setMinPrice}
                    />
                </div>
                <div className="cardList">
                    {filterData2.map((data) => (
                        <CategoryCard
                            category={category}
                            index={data.key}
                            price={data.price}
                            title={data.title}
                            location={data.location}
                            time={data.time}
                        />
                    ))}


                </div>
            </div>
        </div>
    )
}

