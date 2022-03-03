import styled, { keyframes } from "styled-components";

// wave of hand Emoji
const wave = keyframes`
  0%{
transform: rotate(0deg)
  }
  10%{
transform: rotate(14deg)
  }
  20%{
transform: rotate(-8deg)
  }
  30%{
transform: rotate(14deg)
  }
  40%{
transform: rotate(-4deg)
  }
  50%{
transform: rotate(10deg)
  }
  60%{
transform
: rotate(0deg)
  }
  100%{
transform
: rotate(0deg)
  }
`;
export const StyledAboutSection = styled.section`
  min-height: 60vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10rem 0 5rem 0;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    /* align-items: flex-start; */
  }
`;

export const ImageContainer = styled.div`
  height: 16rem;
  width: 16rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2.5rem;
  position: relative;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 7rem;
  }
`;

export const StyledImage = styled.img`
  height: 30rem;
  width: 25rem;
  border-radius: 50%;
  border: 2px solid rgba(102, 51, 153, 1);
  position: absolute;
  z-index: 4;
`;
export const AboutContent = styled.div`
  font-size: 1.7rem;
  font-family: "Poppins", sans-serif;
  text-align: justify;
  padding-left: 110px;
  padding-bottom: 80px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    p {
      font-size: 1.2rem;
      align-items: flex-start;
    }
  }
`;

export const StyledHeading = styled.div`
  font-size: 5rem;
  margin-bottom: 20px;
`;

export const StyledEmoji = styled.span`
  display: inline-block;
  animation: ${wave} 3s infinite;
  transform-origin: 70% 70%;
`;
