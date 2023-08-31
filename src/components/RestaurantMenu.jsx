import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantSubCategory from "./RestaurantSubCategory";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {

  const [showIndex, setShowIndex] = useState(0);
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;


  const { name, cuisines, costForTwoMessage } = resInfo?.cards[0]?.card?.card?.info;

  // const { itemCards, title } = (resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card);


  const subCategory = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(item => item.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');

  const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(item => item.card?.card?.['@type'] === 'type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory');


  return (
    <div >
      <div className="text-center">
        <h1 className="text-2xl font-bold my-5">{name}</h1>
        <p>{cuisines.join(', ')}</p>
        <p>{costForTwoMessage}</p>
      </div>


      {/* Categories Accordion */}

      {subCategory.map((subCategory, index) => (
        <RestaurantSubCategory key={subCategory.card.card.title}
          info={subCategory.card.card}
          showItems={index === showIndex ? true : false}
          setIndex={() => setShowIndex(showIndex === index ? null : index)}
        />
      ))}


      {categories.map((category) => (
        <RestaurantCategory info={category.card.card} />
      ))}





      {/* <h4>{title}</h4>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.defaultPrice / 100 || item.card.info.price / 100}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default RestaurantMenu;