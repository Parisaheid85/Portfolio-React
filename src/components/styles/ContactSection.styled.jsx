import styled, { keyframes } from "styled-components";

export const float = keyframes`
from{
transform: translate(0px, 0px)
}
55%{
transform: translate(0px, 20px)
}
to{   
transform: translate(0px, 0px)
}`;

export const StyledContactSection = styled.section`
  padding: 10rem 0 5rem 0;
  min-height: 40vh;
  width: 90%;
`;

export const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column-reverse;
  }
`;
export const ContactInfo = styled.div`
  flex: 1;
  font-family: "Poppins", sans-serif;
  font-size: 15px;

  p {
    /* padding-left: 30rem; */
    /* padding: 0; */
    margin: 2rem 2rem 2rem 10rem;
    /* margin-bottom: 2rem; */
    text-align: justify;
  }
  h3 {
    text-align: center;
  }

  div {
    display: flex;
    align-items: center;
  }
  a {
    display: flex;
    align-items: center;
    margin: 0 0 8rem 10rem;
    font-size: 3rem;
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    align-items: flex-start;
    flex-direction: column;
  }
  a {
    margin: 0 0 8rem 10rem;
    font-size: 20px;
  }
  svg {
    margin-right: 0.5rem;
  }
`;

export const ImageWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  img {
    width: 70%;
    animation: ${float} 3s ease-in-out infinite;
    border-radius: 50%;
    /* padding-right: 20px; */
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    justify-content: flex-start;
    margin-bottom: 2rem;
  }
`;
