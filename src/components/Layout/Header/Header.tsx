import HeaderCartButton from '../HeaderCartButton/HeaderCartButton';
import { FC } from 'react';

import classes from './Header.module.css';
import mealsImg from '../../../assets/meals.jpg';

interface Props {
  showCart: () => void;
}

const Header: FC<Props> = ({ showCart }) => {
  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.header__title}>ReactMeals</h1>
        <HeaderCartButton onClick={showCart} />
      </header>
      <div className={classes['header__image']}>
        <img src={mealsImg} alt='table with the meals' />
      </div>
    </>
  );
};
export default Header;
