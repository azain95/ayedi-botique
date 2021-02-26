import React from "react";

import logo from "../pics/aayedi.png";
import { Titale } from "../styles2";

function Home(params) {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />


      
      <Titale>{"Wlcome to Ayedi boutique "}</Titale>
    </header>
  );
}

export default Home;
