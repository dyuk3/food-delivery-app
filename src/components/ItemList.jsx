import { useDispatch } from "react-redux";
import { addItem } from "../features/cartSlice";
import { IMAGE_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  // console.log(items);

  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };


  return (
    <div>
      {items.map(item => (
        <div key={item.card.info.id} className=" my-4 flex justify-between items-center border-b-2 pb-8 ">
          <div className="flex-intital w-3/4 flex flex-col gap-4">
            <div>
              <div>{item.card.info.name}</div>
              <div>₹{item.card.info.price / 100}</div>
            </div>
            <p className="text-xs">{item.card.info.description}</p>
          </div>
          <div className="relative">
            <img className="rounded-lg w-32 h-24 object-cover  " src={`${IMAGE_URL}${item.card.info.imageId}`} alt="" />
            <button onClick={() => handleAddItem(item.card.info)} className="py-1 px-5 text-green-400 font-semibold bg-white shadow-xl rounded-xl absolute -bottom-2 left-[15%]" >Add +</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;