import { useState, FC, ChangeEvent } from 'react';
import CheckoutFormInput from '../../UI/Input/Input';
import { UserDataType } from '../../../interfaces/types';
import classes from './CheckoutForm.module.css';

interface Props {
  onClick: () => void;
  onConfirm: (userData: UserDataType) => void;
}

const CheckoutForm: FC<Props> = ({ onClick, onConfirm }) => {
  const [formData, setFormData] = useState<UserDataType>({
    name: '',
    city: '',
    street: '',
    postal: '',
  });

  const inputsArray = [
    {
      label: 'Name',
      input: { id: 'name', type: 'text', name: 'name' },
    },
    {
      label: 'City',
      input: { id: 'city', type: 'text', name: 'city' },
    },
    {
      label: 'Street',
      input: { id: 'street', type: 'text', name: 'street' },
    },
    {
      label: 'Postal',
      input: { id: 'postal', type: 'number', name: 'postal' },
    },
  ];

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    onConfirm(formData);
  };

  const inputs = inputsArray.map((inputObj) => (
    <CheckoutFormInput
      key={inputObj.input.id}
      label={inputObj.label}
      input={{
        id: inputObj.input.id,
        type: inputObj.input.type,
        name: inputObj.input.name,
        onChange: handleInputChange,
      }}
      variant='primary'
    />
  ));

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      {inputs}
      <div className={classes.actions}>
        <button type='button' onClick={onClick}>
          Cancel
        </button>
        <button className={classes.submit}>Confirm</button>
      </div>
    </form>
  );
};
export default CheckoutForm;
