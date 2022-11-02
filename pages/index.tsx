import type { NextPage } from "next";
import styles from "../styles/Home.module.css";
import { useAppDispatch, useAppSelector } from "../store";
import { addToCart } from "../slices/cartSlice";
import IProduct from "../types/IProduct";

const Home: NextPage = () => {
  const dispatcher = useAppDispatch();
  const cart = useAppSelector((state) => state.cart);

  console.log(cart);
  const handleOnClick = () => {
    const aProduct: IProduct = {
      id: 1,
      title: "",
      price: 1200,
      picture: "",
    };

    dispatcher(addToCart(aProduct));
  };

  return (
    <div className={styles.container}>
      I am store
      <button onClick={handleOnClick}>Do that</button>
    </div>
  );
};

export default Home;
