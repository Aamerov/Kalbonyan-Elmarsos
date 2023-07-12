import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart';
import ProductItem from './ProductItem';
import classes from './Products.module.css';

const items = [
  {
    title: 'Test1',
    price: 1,
    description: 'This is a first product - amazing!',
  },
  {
    title: 'Test2',
    price: 2,
    description: 'This is a first product - amazing!',
  },
  {
    title: 'Test3',
    price: 3,
    description: 'This is a first product - amazing!',
  },
  {
    title: 'Test4',
    price: 4,
    description: 'This is a first product - amazing!',
  },
  {
    title: 'Test5',
    price: 5,
    description: 'This is a first product - amazing!',
  },
];

const Products = (props) => {
  const dispatch = useDispatch();
  const addToCartHandler = (item) => {
    dispatch(cartActions.addToCart(item));
  };
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {items.map((item) => (
          <ProductItem
            key={item.title}
            title={item.title}
            price={item.price}
            description={item.description}
            add={() => {
              addToCartHandler(item);
            }}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
