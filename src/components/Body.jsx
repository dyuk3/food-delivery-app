import React, { useEffect, useState } from 'react';
// import './body.css';
import RestaurantCard, { WithPromotedLabel } from './RestaurantCard';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';

const Body = () => {
  const [listofRestaurant, setListofRestaurant] = useState(null);
  const [filteredRestaurant, setFilteredRestaurant] = useState(null);
  const [searchInput, setSetsearchInput] = useState('');
  const onlineStatus = useOnlineStatus();

  const promotedRestaurantCard = WithPromotedLabel(RestaurantCard);

  // fetching the API data

  const fetchData = async () => {
    const fetchedData = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.415728&lng=72.824622&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    const jsonData = await fetchedData.json();

    setListofRestaurant(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurant(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

  };

  console.log(listofRestaurant);

  useEffect(() => {
    fetchData();
  }, []);







  // To filter the restaurants on the basis of rating
  const filterRestaurants = () => {
    const filteredList = listofRestaurant.filter(res => res.info.avgRating >= 4);
    setFilteredRestaurant(filteredList);
  };

  // To search the restaurants by input values
  const searchRest = (e) => {
    e.preventDefault();
    console.log(searchInput);
    const searchByValue = listofRestaurant.filter((res) => res.info.name.toLowerCase().includes(searchInput.toLowerCase()));
    setFilteredRestaurant(searchByValue);
  };

  if (listofRestaurant === null) return <Shimmer />;


  // if (onlineStatus === false) return <h1>Looks like you are not connected to internet!!</h1>;





  return (
    <div className='mx-40 px-4 '>
      <form className="my-8 mx-auto flex justify-center gap-1" onSubmit={searchRest}>
        <input className='px-4 py-2 w-96 border-black rounded border ' name='searchQuery' onChange={(e) => { setSetsearchInput(e.target.value); }} type="search" placeholder='Search here' />
        <button className='bg-cyan-600 px-4 border-none rounded'>Search</button>
      </form>

      <button className='p-4 mb-4 bg-slate-500 rounded ' onClick={filterRestaurants}>Top rated Restaurant</button>

      <div className="grid  grid-rows-rest grid-cols-rest gap-4 my-8 mx-4">
        {
          filteredRestaurant.map(restaurant => {
            return (
              <Link key={restaurant.info.id} to={`/restaurants/${restaurant.info.id}`} >
                {/* {restaurant.data.promoted ? <promotedRestaurantCard restaurant={restaurant.info} /> : <RestaurantCard restaurant={restaurant.info} />} */}
                <RestaurantCard restaurant={restaurant.info} />
              </Link>
            );
          })
        }
      </div>
    </div>
  );
};

export default Body;;