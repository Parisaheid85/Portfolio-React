import styled, { keyframes, css } from "styled-components";
import { useState } from "react";
import { NavItems } from "../../data/NavItems";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ResumeButton } from "../styles/Resume.styled";
import { HiOutlineMail } from "react-icons/hi";

const openResume = () => {
  window.open("/images/res.png", "_blank");
};
export const navItemFade = keyframes`
  from{
    opacity: 0;
    transform: translate(50px);
    
  }
  to{
    opacity: 1;
    transform: translate(0px);
  }
`;
const navItemAnimation = ({ index }) => css`
  ////////navitems appear one by one in our side bar/////
  animation: ${navItemFade} 0.5s ease forwards ${index / 7 + 0.5}s;
`;

const Nav = styled.nav`
  width: 100%;
  height: 80px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  position: fixed;
  justify-content: space-between;
  // above all elements
  z-index: 98;
  background: rgba(151, 112, 219, 0.8);
  // animate and move the Nav
  transition: all 2s ease-in-out;
`;

const Menu = styled.div`
  cursor: pointer;
  background: ${({ theme, menuOpen }) =>
    menuOpen ? "none" : theme.colors.lightNavyBlue};
  transition: ${({ theme }) => theme.transition};
  padding: 0.7rem;
  border-radius: 5px;
  display: none;
  position: absolute;
  right: 20px;
  z-index: 999;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: inline-block;
  }
`;

const LineOne = styled.div`
  width: 15px;
  height: 3px;
  margin: 5px 0;
  background: linear-gradient(
    135deg,
    rgbargba(147, 112, 219, 0.8) 0,
    rgba(240, 247, 255, 1) 100%
  );
  transition: ${({ theme }) => theme.transition};
  transform: ${({ menuOpen }) =>
    menuOpen ? "rotate(-45deg) translate(-5px, 6px) scaleX(3)" : "none"};
`;
const LineTwo = styled.div`
  width: 30px;
  height: 3px;
  margin: 5px 0;
  background: linear-gradient(
    135deg,
    rgba(147, 112, 219, 0.8) 0,
    rgba(240, 247, 255, 1) 100%
  );
  opacity: ${({ menuOpen }) => (menuOpen ? 0 : 1)};
  transition: ${({ theme }) => theme.transition};
`;
const LineThree = styled.div`
  width: 15px;
  height: 3px;
  margin: 5px 0;
  margin-left: 15px;
  background: linear-gradient(
    135deg,
    rgba(147, 112, 219, 0.8) 0,
    rgba(240, 247, 255, 1) 100%
  );
  transition: ${({ theme }) => theme.transition};
  transform: ${({ menuOpen }) =>
    menuOpen ? "rotate(+45deg) translate(-5px, 6px) scaleX(3)" : "none"};
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 16px;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 24rem;
    height: 100vh;
    background: ${({ theme }) => theme.colors.purple};
    position: fixed;
    top: 0;
    right: ${({ menuOpen }) => (menuOpen ? "0" : "-24rem")};
    padding-top: 3rem;
    justify-content: flex-start;
    flex-direction: column;
    z-index: 998;
    transition: ${({ theme }) => theme.transition};
  }
`;

export const NavItemStyled = styled.li`
  margin: 0.5rem 0.7rem;
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    opacity: 0;
    margin: 1.2rem 0;
    ${({ menuOpen }) => (menuOpen ? navItemAnimation : null)}
  }
`;

export const NavLink = styled.a`
  text-transform: uppercase;
  color: white;
  letter-spacing: 1px;

  &::after {
    content: "";
    display: block;
    height: 4px;
    width: 0%;
    background: ${({ theme }) => theme.colors.white};
    transition: all ease-in-out 300ms;
  }
  &:hover {
    &::after {
      width: 100%;
    }
  }
`;

const Profile = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      height: 20rem;
      width: auto;
      border-radius: 50%;
      display: block;
      margin: 1.5rem 0;
    }
  }
`;

const SocialIcons = styled.div`
  display: none;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      margin: 0 0.5rem;
      font-size: 2rem;
    }
  }
`;

export const NavBar = () => {
  /////////// function to open nav side bar/////////////
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      <Nav>
        <div>
          {/* <a href="#logo section">
            <Logo src="./" />
          </a> */}
        </div>

        <Menu menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <LineOne menuOpen={menuOpen} />
          <LineTwo menuOpen={menuOpen} />
          <LineThree menuOpen={menuOpen} />
        </Menu>
        <NavList menuOpen={menuOpen}>
          {NavItems &&
            NavItems.map((navItem, index) => (
              <NavItemStyled
                key={index}
                index={index}
                menuOpen={menuOpen}
                onClick={() => setMenuOpen(false)}
              >
                {navItem.isProfile ? (
                  <NavLink>
                    <Profile>
                      <img src="./images/unnamed.jpeg" />
                      <span>Parisa Heyd</span>
                    </Profile>
                  </NavLink>
                ) : null}
                {navItem.text ? (
                  <NavLink href={navItem.href}>{navItem.text}</NavLink>
                ) : null}
                {navItem.hasSocialIcons ? (
                  <SocialIcons>
                    <NavLink
                      href="https://github.com/Parisaheid85"
                      target="_blank"
                    >
                      <FaGithub />
                    </NavLink>
                    <NavLink
                      href="https://www.linkedin.com/in/parisa-heydarzadeh/"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </NavLink>
                    <NavLink
                      href="mailto:parisaheid85@gmail.com"
                      target="_blank"
                    >
                      <HiOutlineMail />
                    </NavLink>
                  </SocialIcons>
                ) : null}
                {navItem.hasResume ? (
                  /// target=_blank open the page in a new tab////
                  <ResumeButton onClick={openResume} target="_blank">
                    Resume
                  </ResumeButton>
                ) : null}
              </NavItemStyled>
            ))}
        </NavList>
      </Nav>
    </>
  );
};
