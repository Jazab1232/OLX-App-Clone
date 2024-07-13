import React from 'react';
import CategoryCard from './CategoryCard';

export default function MyAds() {
  const myProduct = JSON.parse(localStorage.getItem('userProducts')) || [];

  return (
    <div style={{padding:'20px'}}>
      <h2>My Ads</h2>
      <div>
        {myProduct.length > 0 ? (
          myProduct.map((data, index) => (
            <div style={{width:'70%',margin:'10px'}}>
              <CategoryCard
                key={index}
                category={data.category}
                price={data.price}
                title={data.title}
                location={data.location}
                time={data.time}
              />
            </div>
          ))
        ) : (
          <p>No ads found</p>
        )}
      </div>
    </div>
  );
}
