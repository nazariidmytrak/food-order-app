import { useState, FC, ChangeEvent, FormEvent } from 'react';
import Input from '../../UI/Input/Input';

import classes from './MealItemForm.module.css';

interface Props {
  id: string;
  onAddToCart: (amount: number) => void;
}

const MealItemForm: FC<Props> = ({ id, onAddToCart }) => {
  const [inputIsValid, setInputIsValid] = useState(true);
  const [enteredAmount, setEnteredAmount] = useState('1');

  const amountChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setEnteredAmount(event.target.value);
    setInputIsValid(true);
  };

  const submitHandler = (event: FormEvent) => {
    event.preventDefault();
    const enteredAmountNumber = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setInputIsValid(false);
      return;
    }
    onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label='Amount'
        input={{
          id: 'amount_' + id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          value: enteredAmount,
          onChange: amountChangeHandler,
        }}
        variant='secondary'
      />
      {!inputIsValid && (
        <p style={{ marginBottom: '0.7rem' }}>
          Please enter a valid amount(1-5)
        </p>
      )}
      <button className={classes.form__button}>Add</button>
    </form>
  );
};

export default MealItemForm;
