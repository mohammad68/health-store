/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import IProduct from "../types/IProduct";
import ProductCart from "./ProductCard";

type Props = {
  prodcuts: IProduct[];
};

const ProductList: React.FC<Props> = ({ prodcuts }) => (
  <div>
    {prodcuts.map((product) => (
      <ProductCart key={product.id} prodcut={product} />
    ))}
  </div>
);
const productListSection = css``;

export default ProductList;
