import Produclist from "./component/Produclist";
import "./App.css";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { GlobalStyle, ThemeButton, Titale, AA } from "./styles2";
import Home from "./component/Home";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import NavBar from "./NavBar";

function App() {
  const theme = {
    light: {
      mainColor: "#242424", // main font color
      backgroundColor: "#fefafb", // main background color
      headersColor: "#473d8b",
      linksColor: "#00d5ff",
    },
    dark: {
      mainColor: "#fefafb", // main font color
      backgroundColor: "#242424", // main background color
      headersColor: "#00d5ff",
      linksColor: "#fc037f",
    },
  };

  const [isDark, setisDark] = useState(true);
  const toggleTheme = () =>
    setisDark(!isDark);

    const createProduct = (newProduct) => {
      const updatedProduct = _products;
      updatedProducts.push(newProduct);
      setProducts(updatedProduct)

    };

  return (
    <ThemeProvider theme={theme[isDark ? 'dark' : 'light']}>
      <GlobalStyle />
      <NavBar isDark={isDark} toggleTheme={toggleTheme} />



      <Switch>
        <Route path="/Productlist">
          <Produclist
            products={_products}
            createProduct={createProduct}
           
          />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>

      <AA
        className="App-link"
        href="https://instagram.com/ayedi_boutique?igshid=jxzlrsexlczt"
        target="_blank"
        rel="noopener noreferrer"
      >
        Back To Instagram
      </AA>
    </ThemeProvider>
  );
}

export default App;
