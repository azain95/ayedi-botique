import styled, { createGlobalStyle } from "styled-components";
const Titale = styled.h1`
  align-items: center;
  justify-content: center;
  color: darkslateblue;
  font-family: "Aclonica", sans-serif;
  font-size: calc(25px + 7vmin);
`;
const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Aclonica", sans-serif;

  }
`;


export { Titale,createGlobalStyle };
