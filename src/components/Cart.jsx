import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cartSlice";
import { IMAGE_URL } from '../utils/constants';

const Cart = () => {

  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  console.log(cartItems);

  return (
    <div className="max-w-screen-xl mx-auto my-8">
      <h1 className="text-center text-2xl font-bold">Cart</h1>
      <button onClick={() => dispatch(clearCart())} className="bg-slate-500 py-1 px-4 rounded text-white">Clear Cart</button>
      <div>
        {cartItems.map(item => (
          <div className="flex justify-evenly items-center">
            <img className="rounded-lg w-32 h-24 object-cover" src={`${IMAGE_URL}${item.imageId}`} alt="" />
            <h2>{item.name}</h2>
            <span>{item.price / 100}</span>
            <div>
              <span>-</span>
              <span>count</span>
              <span>+</span>

            </div>
          </div>
        ))}

        {cartItems.length === 0 && <div className="font-bold text-3xl text-center my-36">Your cart looks empty!!</div>}
      </div>
      <div className='text-center'>
        <button className="mt-36 py-2 px-6 bg-green-500 rounded-md" >Proceed to Checkout</button>
      </div>
    </div>
  );
};

export default Cart;;