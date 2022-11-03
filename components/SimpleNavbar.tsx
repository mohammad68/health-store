/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import Icon from "./Icon";
import NavBar from "./Navbar";

type Props = {};

const SimpleNavBar: React.FC<Props> = () => {
  const router = useRouter();
  return (
    <NavBar>
      <div css={container} onClick={() => router.back()}>
        <Icon icon={faArrowRight} />
      </div>
    </NavBar>
  );
};

const container = css`
  display: flex;
  justify-content: space-between;
  height: 100%;
  align-items: center;
`;

const arrow = css`
  cursor: pointer;
`;
export default SimpleNavBar;
