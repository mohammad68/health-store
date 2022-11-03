/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

type Props = {
  children?: React.ReactNode;
  onClick: () => void;
  variant?: VariantProp;
};

export type VariantProp = "primary" | "outline";

const Button: React.FC<Props> = ({
  children,
  onClick,
  variant = "primary",
}) => {
  return (
    <button onClick={onClick} css={variant === "outline" ? outline : primary}>
      {children}
    </button>
  );
};

const primary = css`
  width: 100%;
  max-width: 280px;
  height: 50px;
  font-size: 1.3rem;
  font-weight: bold;
  color: white;
  background-color: var(--primary-color);
  align-self: center;
  cursor: pointer;
  border-radius: 1rem;
  border: none;
`;

const outline = css`
  width: 100%;
  max-width: 280px;
  height: 50px;
  font-size: 1.3rem;
  font-weight: bold;
  background: white;
  color: black;
  border: 1px solid #2b2929;
  align-self: center;
  cursor: pointer;
  border-radius: 1rem;
`;

export default Button;
