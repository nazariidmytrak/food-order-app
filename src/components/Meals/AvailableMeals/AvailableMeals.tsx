import { MealArray } from '../../../interfaces/types';
import { useEffect, useState, FC } from 'react';
import Card from '../../UI/Card/Card';
import MealItem from '../MealItem/MealItem';

import classes from './AvailableMeals.module.css';

const AvailableMeals: FC = () => {
  const [meals, setMeals] = useState<MealArray>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [httpError, setHttpError] = useState(false);

  useEffect(() => {
    const fetchMeals = async () => {
      const response = await fetch(
        'https://foodorderapp-58b75-default-rtdb.europe-west1.firebasedatabase.app/meals.json'
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const responseData = await response.json();

      const loadedMeals = [];

      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          description: responseData[key].description,
          name: responseData[key].name,
          price: responseData[key].price,
        });
      }

      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((error) => {
      setIsLoading(false);
      setHttpError(error.message);
    });
  }, []);

  let mealsList;

  let content = isLoading ? (
    <li className={classes['meals--loading']}>Loading meals...</li>
  ) : httpError ? (
    <li className={classes['meals--error']}>{httpError}</li>
  ) : (
    (mealsList = meals.map((meal) => (
      <MealItem
        key={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
        id={meal.id}
      />
    )))
  );

  return (
    <section className={classes.meals}>
      <Card>
        <ul className={classes.meals__list}>{content}</ul>
      </Card>
    </section>
  );
};
export default AvailableMeals;
