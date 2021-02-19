import logo from "./aayedi.png";
import Produclist from "./component/Produclist";
import "./App.css";

import { Titale } from "./styles2";

function App() {
  return (
    <div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Titale>{"Wlcome to Ayedi boutique "}</Titale>
      </header>
      <a>New Items</a>

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
    </div>
  );
}

export default App;
