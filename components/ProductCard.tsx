/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import IProduct from "../types/IProduct";
import ProductImage from "./ProductImage";
import Icon from "./Icon";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch } from "../store";
import { addToCart } from "../slices/cartSlice";

type Props = {
  prodcut: IProduct;
};

const ProductCard: React.FC<Props> = ({ prodcut }) => {
  const { title, price, picture } = prodcut;
  const dispatcher = useAppDispatch();

  const handleAddToCart = () => {
    dispatcher(addToCart(prodcut));
  };

  return (
    <div css={container}>
      <ProductImage url={picture} alt={title} />
      <div css={productInfo}>
        <span css={productTitle}>{title}</span>
        <span css={productPrice}>{price} تومان</span>
      </div>
      <div css={addProductContainer}>
        <div onClick={handleAddToCart} css={addProduct}>
          <Icon icon={faAdd} size={"xs"} /> <span>افزودن</span>
        </div>
      </div>
    </div>
  );
};

const container = css`
  background-color: white;
  border: 0.1rem solid #333333;
  margin: 2rem;
  display: flex;
  border-radius: 0.7rem;
  padding: 0.7rem;
`;

const productInfo = css`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-grow: 1;
  padding: 0 2rem;
`;

const addProductContainer = css`
  display: flex;
  align-items: flex-end;
  cursor: pointer;
  color: var(--primary-color);
  font-size: 0.9rem;
  font-weight: bold;
`;

const addProduct = css`
  display: flex;
  padding: 0.1rem;
  align-items: center;
`;

const productTitle = css`
  font-size: 1.2rem;
  font-weight: bold;
`;

const productPrice = css`
  font-size: 0.8rem;
  font-weight: bold;
  color: gray;
`;
export default ProductCard;
