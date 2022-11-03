/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { faCartShopping, faBars } from "@fortawesome/free-solid-svg-icons";
import useQuantityItemCart from "../hooks/useQuantityItemCart";
import Icon from "./Icon";
import NavBar from "./Navbar";

type Props = {};
const HomeNavBar: React.FC<Props> = () => {
  const [quantity] = useQuantityItemCart();
  return (
    <NavBar>
      <div css={container}>
        <Icon icon={faBars} />
        <Icon icon={faCartShopping} hasBadge={true} badgeCount={quantity} />
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

export default HomeNavBar;
