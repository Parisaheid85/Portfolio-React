import styled from "styled-components";

export const StyledProjectSection = styled.section`
  width: 100%;
  background: linear-gradient(
      150deg,
      rgba(0, 64, 77, 0.9) 0%,
      rgba(2, 12, 27, 0.8) 100%
    ),
    url("./images/background.jpeg") center no-repeat;
  background-size: 100% 100%;
  min-height: 100vh;
  /* padding: 10rem 0 5rem 0; */
`;

export const SingleProject = styled.div`
  display: flex;
  align-items: center;

  &:nth-child(even) {
    flex-direction: row-reverse;
    margin: 5rem 0;
    /* alternative rotating btw images of projects */
    a {
      img {
        transform: rotateY(-30deg);
      }
      div {
        transform: skew(3deg, -3deg) rotateY(-30deg);
      }
      &:hover {
        img {
          transform: rotateY(0deg);
        }
        div {
          transform: skew(-3deg, 3deg) rotateY(0deg);
        }
      }
    }
  }
  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;

    &:nth-child(even) {
      flex-direction: column;
      margin: 10rem 0;
      /* alternative rotating btw images of projects */
      a {
        img {
          transform: rotateY(0deg);
        }
        div {
          transform: skew(-3deg, 3deg) rotateY(0deg);
        }
        &:hover {
          div {
            transform: skew(3deg, -3deg) rotateY(0deg);
          }
        }
      }
    }
  }
`;

export const ProjectImageContainer = styled.a`
  display: flex;
  flex: 1;
  position: relative;
  align-items: center;
  justify-content: center;
  /* rotate the project images */
  perspective: 1000px;

  img {
    width: 90%;
    border-radius: 20px;
    transform: rotateY(50deg);
    transition: ${({ theme }) => theme.transition};
    border-radius: 10%;
    border: 8px double rgba(147, 112, 219, 0.8);
  }
  /* rotating project images */
  &:hover {
    img {
      transform: rotateY(20deg);
    }
    div {
      transform: skew() (-3deg, 3deg) rotateY(0deg);
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 3rem;
    justify-content: flex-start;
    img {
      transform: rotateY(0deg);
      width: 80%;
      border-radius: 9px;
    }
  }
`;

export const ProjectDescription = styled.div`
  flex: 1;

  h1 {
    font-size: 5rem;
    margin: 0 5rem 2rem 0;
    color: rgba(147, 112, 219, 0.8);

    /* text-shadow: 2px 2px; */
    /* background-clip: text; */
    transform: rotateY(50deg);
  }
  &:hover {
    h1 {
      transform: rotateY(10deg);
    }
  }
  p {
    font-family: "Poppins, sans-serif";
    font-size: 18px;
    text-align: justify;
    margin-bottom: 1rem;
  }

  div {
    display: flex;
    align-items: center;
  }
  a {
    display: flex;
    align-items: center;
    margin: 2rem 3rem 2rem 0;
    font-size: 1.5rem;
  }
  svg {
    margin-right: 0.5rem;
  }
`;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
  span {
    margin-bottom: 0.5rem;
    background: #0e213c;
    display: inline-block;
    padding: 10px;
    border-radius: 5px;
    font-size: 25px;
    margin-right: 1rem;
  }
`;
