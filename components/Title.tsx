/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

type Props = {
  children?: React.ReactNode;
};

const Title: React.FC<Props> = ({ children }) => (
  <h1 css={titleCss}>{children}</h1>
);

const titleCss = css`
  font-size: 1rem;
`;
export default Title;
