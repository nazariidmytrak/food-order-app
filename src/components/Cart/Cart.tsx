import { useState, FC } from 'react';
import { useAppSelector } from '../../store/hooks';
import Modal from '../UI/Modal/Modal';
import CartItem from './CartItem/CartItem';

import classes from './Cart.module.css';
import CheckoutForm from './CheckoutForm/CheckoutForm';
import { UserDataType } from '../../interfaces/types';

interface Props {
  closeCart: () => void;
}

const Cart: FC<Props> = ({ closeCart }) => {
  const [isCheckoutForm, setIsCheckoutForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [didSubmit, setDidSubmit] = useState(false);

  const meals = useAppSelector((state) => state.cartReducer.items);
  const totalAmount = useAppSelector(
    (state) => state.cartReducer.totalAmount
  ).toFixed(2);
  const hasItems = meals.length > 0;

  const cartItems = (
    <ul className={classes.cart__items}>
      {meals.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          id={item.id}
        />
      ))}
    </ul>
  );

  const orderHandler = () => {
    setIsCheckoutForm(true);
  };

  const submitOrderHandler = async (userData: UserDataType) => {
    setIsSubmitting(true);
    await fetch(
      'https://foodorderapp-58b75-default-rtdb.europe-west1.firebasedatabase.app/orders.json',
      {
        method: 'POST',
        body: JSON.stringify({
          user: userData,
          orderedItems: meals,
        }),
      }
    );
    setIsSubmitting(false);
    setDidSubmit(true);
  };

  const modalActions = (
    <div className={classes.cart__actions}>
      <button className={classes['button--alt']} onClick={closeCart}>
        Close
      </button>
      {hasItems && (
        <button className={classes.button} onClick={orderHandler}>
          Order
        </button>
      )}
    </div>
  );

  const cartModalContent = (
    <div className={classes.cart}>
      {cartItems}
      <div className={classes.cart__total}>
        <span>Total Amount</span>
        <span>${totalAmount}</span>
      </div>
      {isCheckoutForm && (
        <CheckoutForm onClick={closeCart} onConfirm={submitOrderHandler} />
      )}
      {!isCheckoutForm && modalActions}
    </div>
  );

  const isSubmittingModalContent = <p>Sending order data...</p>;

  const didSubmitModalContent = (
    <>
      <p>Successfully sent the order!</p>
      <div className={classes.cart__actions}>
        <button className={classes.button} onClick={closeCart}>
          Close
        </button>
      </div>
    </>
  );

  return (
    <Modal closeCart={closeCart}>
      {!isSubmitting && !didSubmit && cartModalContent}
      {isSubmitting && isSubmittingModalContent}
      {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
  );
};
export default Cart;
