import logo from './aayedi.png';
import './App.css';
import products from './products'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>



         Welcome to Ayedi Botique 
        </p>
        

        <a
          className="App-link"
          href="https://instagram.com/ayedi_boutique?igshid=jxzlrsexlczt"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>
          Instagram
          </button>
        </a>
        <a
          className="index"
          href="public\index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button>
          Home
          </button>
        </a>
      </header>
    </div>
  );
}

export default App;
