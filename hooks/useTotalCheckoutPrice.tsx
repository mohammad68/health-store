import { useAppSelector } from "../store";

// Just for test :)
const useTotalCheckoutPirce = () => {
  const cart = useAppSelector((state) => state.cart);
  let total = 0;
  cart.cartItems.forEach((cartItem) => {
    total = cartItem.quantity * cartItem.product.price;
  });

  return [total];
};

export default useTotalCheckoutPirce;
