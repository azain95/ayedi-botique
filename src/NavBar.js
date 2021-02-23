import react from "react";
import { Link } from "react-router-dom";
import { NavStyled, ThemeButton, Titale, AA } from "./styles2";
import logo from "./pics/aayedi.png";
import theme from "./App"


      const NavBar = (props)=> {
         return (
         <NavStyled className="navbar navbar-expand-lg navbar-light bg-light">
         <AA className="navbar-brand" to="/">
         <img
         src={logo} 
    // src={props.currentTheme === "light" ? lightLogo : darkLogo}
    alt="logo"
  />
</AA>

         <div className="ml-auto" id="navbarNavAltMarkup">
           <div className="navbar-nav">
             <a className="nav-item nav-link active" href="/"
               >Home <span className="sr-only">(current)</span></a
             >
             <a className="nav-item nav-link" href="/Productlist">Items</a>
             <a className="nav-item nav-link" href="/Productlist">Items</a>

           </div>
         </div>
       </NavStyled> );


       
        
    };


    export default NavBar


    