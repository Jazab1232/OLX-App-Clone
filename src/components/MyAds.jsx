import React from 'react';
import ProfileOption from './ProfileOption';
import CategoryCard from './CategoryCard';

export default function MyAds() {
  const myProduct = JSON.parse(localStorage.getItem('userProducts'));
  // console.log(myProduct);
  return (
    <div style={{ padding: '10px' }}>
      <h2>My Ads</h2>
      <div>
        {myProduct ? (
          myProduct.map((data) => (
            <div style={{ width: '100%' }}>
              <CategoryCard
                index={data.key}
                category={data.category}
                price={data.price}
                title={data.title}
                location={data.location}
                time={data.time}
              />
            </div>
          ))
        ) :
          <p>No ads found</p>
        }
      </div>
      <ProfileOption />
    </div>
  );
}
