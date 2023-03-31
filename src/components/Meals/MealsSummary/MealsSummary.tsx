import { FC } from 'react';

import classes from './MealsSummary.module.css';

const MealsSummary: FC = () => {
  return (
    <section className={classes.summary}>
      <div className={classes.summary__content}>
        <h2 className={classes.summary__title}>
          Delicious Food, Delivered To You
        </h2>
        <p className={classes.summary__text}>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home.
        </p>
        <p className={classes.summary__text}>
          All our meals are cooked with high-quality ingredients, just-in-time
          and of course by experienced chefs!
        </p>
      </div>
    </section>
  );
};
export default MealsSummary;
