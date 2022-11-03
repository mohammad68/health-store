/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";

type Props = {
  count: number;
};

const Badge: React.FC<Props> = ({ count = 0 }) => {
  return (
    <div>
      <span css={container}>{count}</span>
    </div>
  );
};

const container = css`
  border-radius: 50%;
  width: 10px;
  height: 10px;
  padding: 8px;
  font-size: 0.6rem;
  color: white;
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
`;

export default Badge;
