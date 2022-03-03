import styled, { keyframes } from "styled-components";

const text = keyframes`
    0%{
        width: 0ch;
        }

    100%{width: 27ch;
       }
     
`;
const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    -webkit-transform: translateY(0)
  }
  40% {
    transform: translateY(-30px)
  }

  60% {
    transform: translateY(-15px)
  }
`;
export const StyledMainMiddlesSection = styled.section`
  width: 100%;
  height: 100vh;
  background: linear-gradient(
      150deg,
      rgba(0, 64, 77, 0.9) 0%,
      rgba(2, 12, 27, 0.8) 100%
    ),
    url("./images/background.jpeg") center no-repeat;
  background-size: 100% 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const MainContent = styled.div`
  width: 100%;
  max-width: 58rem;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;

  h1 {
    letter-spacing: 1.2rem;
    font-size: 4rem;
    font-weight: 800;
    overflow: hidden;
    white-space: nowrap;
    width: 27ch;
    margin: auto;
    animation: ${text} 5s steps(27);
  }
  h3 {
    font-size: 3.8rem;
    color: white;
    margin: 2rem 0;
    background: linear-gradient(
      to right,
      ${({ theme }) => theme.colors.white} -40%,
      ${({ theme }) => theme.colors.purple} 100%
    );
  }

  p {
    font-size: 1.7rem;
    margin: 2rem 0;
  }

  div {
    margin: 2.5rem 2.5rem;
    font-size: 4rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    h1 {
      letter-spacing: 1rem;
      font-size: 1.5rem;
      width: 29ch;
    }

    h3 {
      font-size: 1.5rem;
      margin: 3rem 0;
    }
    p {
      font-size: 1rem;
    }
  }
`;
export const StyledArrowDown = styled.a`
  position: absolute;
  bottom: 50px;
  svg {
    font-size: 30px;
    color: ${({ theme }) => theme.colors.white};
    animation: ${bounce} 2s infinite;
    &:hover {
      color: ${({ theme }) => theme.colors.purple};
    }
  }
`;
export const HeroSocialIcons = styled.div`
  position: fixed;
  right: 20px;
`;
export const SocialIcon = styled.a`
  height: 4rem;
  width: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background-color: rgba(102, 51, 153, 1);
  cursor: pointer;
  font-size: 20px;
  margin-bottom: 10px;
`;
