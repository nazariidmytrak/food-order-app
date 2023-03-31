import { FC } from 'react';
import { cartActions } from '../../../store/cartSlice';
import { useAppDispatch } from '../../../store/hooks';
import { Item } from '../../../interfaces/types';

import classes from './CartItem.module.css';

const CartItem: FC<Item> = ({ name, amount, price, id }) => {
  const updatedPrice = `$${price.toFixed(2)}`;
  const dispatch = useAppDispatch();

  const onRemove = () => {
    dispatch(cartActions.removeItem(id));
  };

  const onAdd = () => {
    dispatch(cartActions.addItem({ name, amount: 1, price, id }));
  };

  return (
    <li className={classes['cart-item']}>
      <div>
        <h2>{name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{updatedPrice}</span>
          <span className={classes.amount}>x {amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={onRemove}>−</button>
        <button onClick={onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
