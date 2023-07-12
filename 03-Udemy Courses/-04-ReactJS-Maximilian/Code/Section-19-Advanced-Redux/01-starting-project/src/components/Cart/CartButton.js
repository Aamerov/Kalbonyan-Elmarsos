import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../store/cart';
const CartButton = (props) => {
  const numberOfCartItems = useSelector(
    (state) => state.cart.listOfItems.length
  );
  const dispatch = useDispatch();

  const cartToggleHandler = () => {
    dispatch(cartActions.toggle());
  };
  return (
    <button onClick={cartToggleHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;
