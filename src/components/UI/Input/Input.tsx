import { FC } from 'react';
import { InputType } from '../../../interfaces/types';
import classes from './Input.module.css';

const Input: FC<InputType> = ({ input, label, variant }) => {
  return (
    <div className={classes.control}>
      <label className={classes.control__label} htmlFor={input.id}>
        {label}
      </label>
      <input
        className={`${classes.control__input} ${
          variant === 'primary'
            ? classes.control__input_big
            : classes.control__input_small
        }`}
        /* className={updatedInputClasses} */
        {...input}
        required
        onChange={input.onChange}
      />
    </div>
  );
};
export default Input;
