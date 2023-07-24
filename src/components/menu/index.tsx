import * as React from "react";
import styled from "styled-components";

import { HiMiniHome } from "react-icons/hi2";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLaptopCode } from "react-icons/fa";
import { BiSolidMessageDetail } from "react-icons/bi";
import { theme } from "../../styles/theme";
import { media } from "../../styles/mixins";
import { useMenuWithIntersection } from "./hooks/useMenuWithIntersection";

export const Menu: React.FC = () => {
  const activeNav = useMenuWithIntersection();

  const handleClick = (e: React.SyntheticEvent<HTMLAnchorElement>) => {
    const sectionId = e.currentTarget.getAttribute("href");

    if (sectionId) {
      const section = document.querySelector(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <MenuWrap id="menu">
      <Link
        href="#hero"
        onClick={(e) => handleClick(e)}
        className={activeNav === "#hero" ? "active" : ""}
      >
        <HiMiniHome />
      </Link>
      <Link
        href="#about"
        onClick={(e) => handleClick(e)}
        className={activeNav === "#about" ? "active" : ""}
      >
        <BsFillPersonLinesFill />
      </Link>
      <Link
        href="#projects"
        onClick={(e) => handleClick(e)}
        className={activeNav === "#projects" ? "active" : ""}
      >
        <FaLaptopCode />
      </Link>
      <Link
        href="#contact"
        onClick={(e) => handleClick(e)}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiSolidMessageDetail />
      </Link>
    </MenuWrap>
  );
};

const MenuWrap = styled.menu`
  display: flex;
  gap: 1.4rem;
  width: max-content;
  padding: 0.7rem 1.7rem;

  backdrop-filter: blur(15px);
  background: ${theme.main.opacities.tertiary_light};
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
  transition: 0.3s;

  &:hover {
    background: ${theme.main.opacities.tertiary_dark};
    color: ${theme.main.colors.bg};
    transition: 0.3s;
  }

  &.active {
    background: ${theme.main.colors.primary};
    color: ${theme.main.colors.bg};
  }
`;
