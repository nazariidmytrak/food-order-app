import { useAppSelector } from '../../../store/hooks';
import { useEffect, useState, FC } from 'react';

import CartIcon from '../../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';

interface Props {
  onClick: () => void;
}

const HeaderCartButton: FC<Props> = ({ onClick }) => {
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const meals = useAppSelector((state) => state.cartReducer.items);
  const numberOfMeals = meals.reduce(
    (curNumber, item) => curNumber + item.amount,
    0
  );

  const btnClasses = `${classes.button} ${
    btnIsHighlighted ? classes.bump : ''
  }`;

  useEffect(() => {
    if (meals.length === 0) {
      return;
    }
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [meals]);

  return (
    <>
      <button onClick={onClick} className={btnClasses}>
        <span className={classes.button__icon}>
          <CartIcon />
        </span>
        <span>Your Cart</span>
        <span className={classes.button__badge}>{numberOfMeals}</span>
      </button>
    </>
  );
};
export default HeaderCartButton;
