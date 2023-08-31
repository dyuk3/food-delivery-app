import React from 'react';
import imgLink from '../utils/constants';
import { LiaStar } from 'react-icons/lia';

const RestaurantCard = ({ restaurant }) => {

  const restaurantName = restaurant.name;
  const rating = restaurant.avgRating;
  const cuisines = restaurant.cuisines;
  const imgId = restaurant.cloudinaryImageId;
  const areaName = restaurant.areaName;



  return (
    <div className='flex flex-col gap-3 relative overflow-hidden hover:scale-[0.9] transition ease-in-out duration-300 '>
      <div className="w-full h-auto rounded-xl overflow-hidden">
        <img className='w-full h-52 object-cover' src={`${imgLink}/${imgId}`} alt={restaurantName} />
      </div>
      <div className="ml-3">
        <h3 className='wrap'>{restaurantName}</h3>
        <div className="rating">
          <LiaStar className='bg-green-800 rounded-[50%]' />
          <span className='desc'>Rating: {rating}</span>
        </div>
        <h4 className='wrap desc'>{cuisines.join(', ')}</h4>
        <h4 className='desc'>{areaName}</h4>
      </div>
    </div>
  );
};


//Higher Order Component

// Input - RestaurantCard & output - PromotedRestaurantCard

export const WithPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label >Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;