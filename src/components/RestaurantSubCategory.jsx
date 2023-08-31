import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import ItemList from "./ItemList";


const RestaurantSubCategory = ({ info, showItems, setIndex }) => {

  const handleClick = () => {
    setIndex();
  };


  return (
    <div className='w-6/12 mx-auto my-10 p-4 shadow-md '>
      <div className='flex items-center justify-between mx-auto cursor-pointer' onClick={handleClick}>
        <span className='font-bold'>{info.title} ({info.itemCards.length}) </span>
        {showItems ? <BsChevronUp /> : <BsChevronDown />}
      </div>

      {showItems && <ItemList items={info.itemCards} />}

    </div>
  );
};

export default RestaurantSubCategory;