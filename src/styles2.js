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

    background-color: ${(props) => props.theme.backgroundColor};
    color:${(props) => props.theme.mainColor};
  }`;

const ThemeButton = styled.button`
  font-size: 1em;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  font-family: "Aclonica", sans-serif;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;

export { Titale, GlobalStyle, ThemeButton };
