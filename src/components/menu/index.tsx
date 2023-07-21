import * as React from "react";
import styled from "styled-components";

import { HiMiniHome } from "react-icons/hi2";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { BiSolidMessageDetail } from "react-icons/bi";
import { theme } from "../../styles/theme";
import { media } from "../../styles/mixins";

export const Menu: React.FC = () => {
  return (
    <MenuWrap id="menu">
      <Link href="#hero">
        <HiMiniHome />
      </Link>
      <Link href="#about">
        <BsFillPersonLinesFill />
      </Link>
      <Link href="#projects">
        <FaLaptopCode />
      </Link>
      <Link href="#contact">
        <BiSolidMessageDetail />
      </Link>
    </MenuWrap>
  );
};

const MenuWrap = styled.menu`
  display: flex;
  gap: 0.8rem;
  width: max-content;
  padding: 0.7rem 1.7rem;

  backdrop-filter: blur(15px);
  background: ${theme.main.gradients.tertiary_2};
  border-radius: 50px;

  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0rem;
  z-index: 999;

  ${media.md`
    bottom: 1rem;
  `}

  ${media.xl`
    bottom: 2rem;
  `}
`;

const Link = styled.a`
  color: ${theme.main.colors.primary};
  background: transparent;
  padding: 1rem;
  border-radius: 50%;
  font-size: 1.1rem;
  width: 50px;
  height: 50px;

  &:hover {
    background: ${theme.main.gradients.tertiary_2};
  }
`;
