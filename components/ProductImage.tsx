/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import Image from "next/image";

type Props = {
  url: string;
  alt: string;
  size?: sizeProp;
};

type sizeProp = "sm" | "md";

const ProductImage: React.FC<Props> = ({ url, alt, size = "md" }) => {
  const imageSize = size === "sm" ? 80 : 100;
  return <Image src={url} width={imageSize} height={imageSize} alt={alt} />;
};

const container = css``;

export default ProductImage;
