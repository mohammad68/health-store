import { useAppSelector } from "../store";

const useQuantityItemCart = () => {
  const cart = useAppSelector((state) => state.cart);
  let quantityItems = 0;
  cart.cartItems.forEach((cartItem) => {
    quantityItems += cartItem.quantity;
  });

  return [quantityItems];
};

export default useQuantityItemCart;
