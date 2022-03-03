import styled from "styled-components";

export const SectionHeading = styled.div`
  text-align: center;
  margin-bottom: 7rem;

  h1 {
    font-size: 5rem;
    text-transform: uppercase;
    display: inline-block;
    margin: 0%.5rem 0 1.5rem 0;
    position: relative;

    p {
      font-family: "Poppins, sans-serif";
      font-size: 16px;
      margin-bottom: 6rem;
    }

    @media (max-width: ${({ theme }) => theme.mobile}) {
      text-align: left;
    }
  }
`;
