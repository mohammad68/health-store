/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const Divider: React.FC = () => <div css={container} />;

const container = css`
  font-size: 1rem;
  width: 100%;
  height: 0.1rem;
  margin: 1.3rem 0;
  background-color: #adadad;
`;
export default Divider;
