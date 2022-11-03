/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

type Props = {
  children?: React.ReactNode;
};

const NavBar: React.FC<Props> = ({ children }) => (
  <header css={container}>{children}</header>
);

const container = css`
  height: 50px;
  width: 100%;
  background-color: #b9b9b9;
  padding: 1rem;
`;
export default NavBar;
