import logo from "./aayedi.png";
import Produclist from "./component/Produclist";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { GlobalStyle, ThemeButton, Titale, AA } from "./styles2";

function App() {
  const theme = {
    light: {
      mainColor: "#242424", // main font color
      backgroundColor: "#fefafb", // main background color
      headersColor: "#473d8b",
    },
    dark: {
      mainColor: "#fefafb", // main font color
      backgroundColor: "#242424", // main background color
      headersColor: "#00d5ff",
    },
  };
  const [currentTheme, setCurrentTheme] = useState("light");
  const toggleTheme = () =>
    setCurrentTheme(currentTheme === "light" ? "dark" : "light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStyle />
      <ThemeButton onClick={toggleTheme}>
        Go {currentTheme === "dark" ? "Light" : "Dark"}
      </ThemeButton>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Titale>{"Wlcome to Ayedi boutique "}</Titale>
      </header>
      <AA>New Items</AA>

      <Produclist />
      <footer>
        <a
          className="App-link"
          href="https://instagram.com/ayedi_boutique?igshid=jxzlrsexlczt"
          target="_blank"
          rel="noopener noreferrer"
        >
          Back To Instagram
        </a>
      </footer>
    </ThemeProvider>
  );
}

export default App;
