import styled from "styled-components";

export const ResumeButton = styled.a`
  background: ${({ primary, theme }) =>
    primary ? theme.colors.green : "none"};
  color: ${({ primary, theme }) =>
    primary ? theme.colors.white : "theme.colors.green"};
  padding: 10px 20px;
  margin: ${({ margin }) => margin};
  border: 2px solid ${({ theme }) => theme.colors.green};
  border-radius: 5px;
  font-size: 18px;
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  cursor: pointer;
  display: inline;
`;
