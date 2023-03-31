export type Meal = {
  id: string;
  name: string;
  description: string;
  price: number;
};

export interface MealArray extends Array<Meal> {}

export type InputType = {
  label: string;
  input: {
    id: string;
    type: string;
    min?: string;
    max?: string;
    step?: string;
    value?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    name?: string;
  };
  variant?: 'primary' | 'secondary';
};

export type UserDataType = {
  name: string;
  city: string;
  street: string;
  postal: string;
};

export type CartInitialState = {
  items: Item[];
  totalAmount: number;
};

export type Item = {
  id: string;
  name: string;
  price: number;
  amount: number;
};
