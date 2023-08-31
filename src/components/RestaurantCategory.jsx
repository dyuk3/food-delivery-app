import { BsChevronDown } from 'react-icons/bs';

const RestaurantCategory = ({ info }) => {


  return (
    <div className='accordion'>
      <div className='flex items-center justify-between shadow-md w-6/12 my-10 bg-slate-100 p-4 mx-auto'>
        <span className='font-bold'>{info.title} </span>
        <span><BsChevronDown /></span>
      </div>

    </div>
  );
};

export default RestaurantCategory;