import AvailableMeals from './AvailableMeals/AvailableMeals';
import MealsSummary from './MealsSummary/MealsSummary';
import { FC } from 'react';

const Meals: FC = () => {
  return (
    <>
      <MealsSummary />
      <AvailableMeals />
    </>
  );
};
export default Meals;
