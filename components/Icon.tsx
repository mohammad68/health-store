/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Badge from "./Badge";

type Props = {
  icon: IconDefinition;
  hasBadge?: boolean;
  badgeCount?: number;
  size?: SizeProp;
};

export type SizeProp = "xs" | "sm" | "lg";

const Icon: React.FC<Props> = ({
  icon,
  hasBadge = false,
  badgeCount = 0,
  size = "lg",
}) => (
  <div css={container}>
    <div css={iconContainer}>
      <FontAwesomeIcon size={size} icon={icon} />
    </div>
    {hasBadge && <Badge count={badgeCount} />}
  </div>
);

const container = css`
  position: relative;
`;

const iconContainer = css`
  padding: 0.5rem;
`;

export default Icon;
