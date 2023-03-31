import { Meal } from '../../../interfaces/types';
import { FC } from 'react';
import MealItemForm from './MealItemForm';
import { useAppDispatch } from '../../../store/hooks';
import { cartActions } from '../../../store/cartSlice';

import classes from './MealItem.module.css';

const MealItem: FC<Meal> = ({ name, description, price, id }) => {
  const formattedPrice = `$${price.toFixed(2)}`;
  const dispatch = useAppDispatch();

  const addToCartHandler = (amount: number) => {
    dispatch(
      cartActions.addItem({
        id,
        price,
        name,
        amount,
      })
    );
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3 className={classes.meal__title}>{name}</h3>
        <p className={classes.meal__description}>{description}</p>
        <p className={classes.meal__price}>{formattedPrice}</p>
      </div>
      <div>
        <MealItemForm id={id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};
export default MealItem;
