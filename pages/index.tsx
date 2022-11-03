import type { GetServerSideProps, NextPage } from "next";
import styles from "../styles/Home.module.css";
import IProduct from "../types/IProduct";
import HomeNavBar from "../components/HomeNavbar";
import ProductList from "../components/ProductList";
import Button from "../components/Button";
import { useRouter } from "next/router";

export const getServerSideProps = () => {
  return {
    props: {
      products: fakeProducts,
    },
  };
};

type Props = {
  products: IProduct[];
};

const Home: NextPage<Props> = ({ products }) => {
  const router = useRouter();

  const handleOnClick = () => {
    router.push("/cart");
  };

  return (
    <div className={styles.container}>
      <HomeNavBar />
      <div className={styles.product_section}>
        <ProductList prodcuts={products} />
        <Button onClick={handleOnClick}>تکمیل خرید</Button>
      </div>
    </div>
  );
};

export default Home;

const fakeProducts: IProduct[] = [
  {
    id: 0,
    title: "قرص",
    price: 22000,
    picture: "/images/1.jpg",
  },
];
