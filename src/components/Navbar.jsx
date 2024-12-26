import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FaSun, FaMoon, FaMusic, FaBars, FaTimes } from "react-icons/fa";

const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.backgroundDark};
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const TopBar = styled.div`
  background: ${({ theme }) => theme.gradient};
  padding: 0.5rem 2rem;
  text-align: right;
`;

const MainNav = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled(Link)`
  font-size: 2.4rem;
  font-weight: 800;
  color: ${({ theme }) => theme.accent};
  text-transform: uppercase;
  letter-spacing: 1px;

  span {
    color: ${({ theme }) => theme.secondary};
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 2rem;
  align-items: center;

  @media (max-width: 1123px) {
    display: none;

    &.active {
      display: flex;
      flex-direction: column;
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      background: ${({ theme }) => theme.backgroundDark};
      padding: 2rem;
      gap: 1rem;
    }
  }
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.textLight};
  font-weight: 600;
  text-transform: uppercase;
  font-size: 1.4rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.textLight};
  }

  &.active {
    background: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.textLight};
  }
`;

const Controls = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const IconButton = styled.button`
  color: ${({ theme }) => theme.textLight};
  font-size: 1.8rem;
  padding: 0.5rem;
  border-radius: 50%;
  transition: all 0.3s ease;

  &:hover {
    background: ${({ theme }) => theme.primary};
  }

  &.active {
    color: ${({ theme }) => theme.accent};
  }
`;

const MenuButton = styled(IconButton)`
  display: none;

  @media (max-width: 1123px) {
    display: block;
  }
`;

function Navbar({ toggleDarkMode, toggleMusic, isPlaying, isDarkMode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <HeaderWrapper>
      <TopBar>
        <Controls>
          <IconButton onClick={toggleDarkMode}>
            {isDarkMode ? <FaSun /> : <FaMoon />}
          </IconButton>
          <IconButton
            onClick={toggleMusic}
            className={isPlaying ? "active" : ""}
          >
            <FaMusic />
          </IconButton>
        </Controls>
      </TopBar>
      <MainNav>
        <Logo to="/">
          Unwanted<span>Boys</span>
        </Logo>
        <Nav className={isMenuOpen ? "active" : ""}>
          <StyledLink to="/">Bosh sahifa</StyledLink>
          <StyledLink to="/matches">O'yinlar</StyledLink>
          <StyledLink to="/videos">Videolar</StyledLink>
          <StyledLink to="/players">O'yinchilar</StyledLink>
          {/* <StyledLink to="/donation">Qullab quvatlash</StyledLink> */}
          <StyledLink to="/museum">Do'kon</StyledLink>
          <StyledLink to="/about">Biz haqimizda</StyledLink>
          <StyledLink to="/news">Yangiliklar</StyledLink>
        </Nav>
        <MenuButton onClick={toggleMenu}>
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </MenuButton>
      </MainNav>
    </HeaderWrapper>
  );
}

export default Navbar;
