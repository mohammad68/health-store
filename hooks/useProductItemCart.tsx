import { useAppSelector } from "../store";
import IProduct from "../types/IProduct";

const useProductItemCart = () => {
  const cart = useAppSelector((state) => state.cart);
  let products = new Array<IProduct>();
  cart.cartItems.forEach((cartItem) => {
    products.push(cartItem.product);
  });

  return [products];
};

export default useProductItemCart;
