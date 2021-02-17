import logo from "./aayedi.png";
import Produclist from "./component/Produclist";
import './App.css';



function App() {
  return (
    <div>
            <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Wlcome to Ayedi Botique
        </p>
       
      </header>
 <a>New Items</a> 
      <Produclist />
    <footer>
    <a
          className="App-link"
          href="https://reactjs.org"
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
