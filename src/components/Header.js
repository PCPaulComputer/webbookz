/**
 * @author Paul M
 * Header component
 */

//Imports required for responsive navigation
import { Link } from 'react-router-dom';
import  logo from '../assets/bookstore_logo.png';
import "../../node_modules/jquery/dist/jquery.min.js";
import "../../node_modules/bootstrap/dist/js/bootstrap.min.js";
import "../../node_modules/bootstrap/js/src/collapse.js";

const Header = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <Link className="navbar-brand" to="/"><img src={logo} alt="logo" className="w-50 h-50"/></Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link font-weight-bold" to="/">Home <span class="sr-only">(current)</span></Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link font-weight-bold" to="/shop">Shop</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link font-weight-bold" to="/contact">Contact</Link>
              </li>            
            </ul>
          </div>
      </nav>
    </header>
  );
}

export default Header;