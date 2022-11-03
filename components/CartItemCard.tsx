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

const CartItemCard: React.FC<Props> = ({ prodcut }) => {
  const { title, picture } = prodcut;

  return (
    <div css={container}>
      <ProductImage size="sm" url={picture} alt={title} />
      <span css={productTitle}>{title}</span>
    </div>
  );
};

export default CartItemCard;

const container = css`
  background-color: white;
  display: flex;
  border-radius: 0.7rem;
`;

const productTitle = css`
  font-size: 0.9rem;
  font-weight: bold;
  margin-right: 0.8rem;
`;
