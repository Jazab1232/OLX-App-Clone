import React, { useState } from 'react'
import '../styles/filterTab.css'
import { useLocation } from 'react-router-dom';

export default function FilterTab({ price, condition, location, isDeliverable, setAccessories,
    setPrice, setCondition, setLocation, setIsDeliverable, setMaxPrice, setMinPrice }) {


    const handleCondition = (event) => {
        const { value, checked } = event.target;

        if (checked) {
            setCondition([...condition, value]);
        } else {
            setCondition(condition.filter(option => option !== value));
        }
    };
    const handleDeliverable = (event) => {
        const { value, checked } = event.target;

        if (checked) {
            setIsDeliverable([...isDeliverable, value]);
        } else {
            setIsDeliverable(isDeliverable.filter(option => option !== value));
        }
    };
    // console.log(isDeliverable);
    const handleLocation = (event) => {
        const { value, checked } = event.target;

        if (checked) {
            setLocation([...location, value]);
        } else {
            setLocation(location.filter(option => option !== value));
        }
    };
    function clearFilter() {
        setAccessories(''),
            setPrice(''),
            setCondition([]),
            setLocation([]),
            setIsDeliverable([])
    }

    function useQuery() {
        return new URLSearchParams(useLocation().search);

    }

    const query = useQuery();
    const category = query.get('category');

    return (
        <div className='filterTab'>
            <h3>Filters</h3>
            <div className="categoriesTab">
                <h2>Categories</h2>
                <ul>
                    <p style={{ textTransform: 'capitalize' }}>{category}</p>
                    {/* <p>Mobile Phones</p> */}
                    <p style={{ textTransform: 'capitalize' }}> {category} accessories</p>
                    {/* <p>Smart Watches</p> */}
                    {/* <p>Tablets</p> */}
                </ul>
            </div>
            <div className="locationTab">
                <h2>Location</h2>
                <ul>
                    <p><input type="checkbox" onChange={handleLocation} value='punjab' />Punjab</p>
                    <p><input type="checkbox" onChange={handleLocation} value='islaitmabad' />Islamabad</p>
                    <p><input type="checkbox" onChange={handleLocation} value='kpk' />KPK</p>
                    <p><input type="checkbox" onChange={handleLocation} value='sindh' />Sindh</p>
                </ul>

            </div>
            <div className="priceTab">
                <h2>price</h2>
                <div className="priceinput">
                    <input
                        type="number" placeholder='Min'
                        onChange={(e) => { setMinPrice(e.target.value) }}
                    />
                    <input
                        type="number" placeholder='Max'
                        onChange={(e) => { setMaxPrice(e.target.value) }}
                    />
                </div>
            </div>

            <div className="deliverableTab">
                <h2>Is Deliverable</h2>
                <ul>
                    <p><input type="checkbox" onChange={handleDeliverable} value='deliverable' />Yes</p>
                    <p><input type="checkbox" onChange={handleDeliverable} value='notDeliverable' />No</p>
                </ul>
            </div>
            <div className="conditionTab">
                <h2>Condition</h2>
                <ul>
                    <p><input type="checkbox" onChange={handleCondition} value='used' />Used</p>
                    <p><input type="checkbox" onChange={handleCondition} value='new' />New</p>
                    <p><input type="checkbox" onChange={handleCondition} value='openBox' />Open Box</p>
                    <p><input type="checkbox" onChange={handleCondition} value='refurbished' />Refurbished</p>
                </ul>
            </div>
            {/* <button className='clearBtn' onClick={clearFilter}> Clear Filters</button> */}
        </div>
    )
}
