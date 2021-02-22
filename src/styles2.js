import styled, { createGlobalStyle } from "styled-components";
const Titale = styled.h1`
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.headersColor};
  font-family: "Aclonica", sans-serif;
  font-size: calc(25px + 7vmin);
`;
const GlobalStyle = createGlobalStyle`

  body {
    font-family: "Aclonica", sans-serif;
    
    background-color: ${(props) => props.theme.backgroundColor};
    color:${(props) => props.theme.mainColor};
  }`;

const AA = styled.a`
  color: ${(props) => props.theme.headersColor};
`;

const ThemeButton = styled.button`
  font-size: 1em;
  align-items: center;
  align-items: right;
  margin: 1.25em;
  padding: 0.25em 1em;
  border-radius: 3px;
  font-family: "Aclonica", sans-serif;
  background-color: ${(props) => props.theme.mainColor};
  color: ${(props) => props.theme.backgroundColor};
`;
const logoheader = styled.header`
  background-color: ${(props) => props.theme.mainColor};
  min-height: 75vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(25px + 2vmin);
`;

const SearchBarStyled = styled.input`
  padding: 0.5rem;
  margin: 1rem auto;
  display: block;
  width: 25%;
  justify-content: center;
  align-items: center;
`;

export { Titale, GlobalStyle, ThemeButton, AA, SearchBarStyled };
