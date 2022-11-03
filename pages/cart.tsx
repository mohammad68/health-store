/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { NextPage } from "next";
import Button from "../components/Button";
import CartItemCard from "../components/CartItemCard";
import Divider from "../components/Divider";
import SimpleNavBar from "../components/SimpleNavbar";
import Title from "../components/Title";
import useProductItemCart from "../hooks/useProductItemCart";
import useQuantityItemCart from "../hooks/useQuantityItemCart";
import useTotalCheckoutPirce from "../hooks/useTotalCheckoutPrice";

const Cart: NextPage = () => {
  const [products] = useProductItemCart();
  const [quantityItems] = useQuantityItemCart();
  const [totalPrice] = useTotalCheckoutPirce();
  return (
    <div>
      <SimpleNavBar />
      <main css={main}>
        <Title>سبد خرید</Title>
        <div css={productCartContainer}>
          {products.map((product) => (
            <CartItemCard key={product.id} prodcut={product} />
          ))}
        </div>
        {quantityItems !== 0 ? (
          <div>
            <Divider />
            <div css={productProperty}>
              <span>تعداد کالا</span>
              <span>{quantityItems} عدد</span>
            </div>
            <div css={productProperty}>
              <span>قیمت</span>
              <span>{totalPrice} تومان</span>
            </div>
            <div css={buttonsContainer}>
              <Button onClick={() => {}}>ادامه خرید</Button>
              <Button variant="outline" onClick={() => {}}>
                حذف سبد
              </Button>
            </div>
          </div>
        ) : (
          <div>سبد خرید خالی می باشد</div>
        )}
      </main>
    </div>
  );
};

const main = css`
  margin: 1rem;
`;

const productCartContainer = css`
  margin-top: 2rem;
`;

const productProperty = css`
  display: flex;
  justify-content: space-between;
  color: #464746;
  font-weight: bold;
  font-size: 0.8rem;
  margin: 0.8rem 0;
`;

const buttonsContainer = css`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 5rem;
`;
export default Cart;
