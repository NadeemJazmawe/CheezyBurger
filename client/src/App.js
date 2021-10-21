import { Helmet } from 'react-helmet'
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

// Pages:-
import NavBar from './component/navBarPage/navBar.js';
import Home from './component/homePage/home.js'
import Contact from './component/contact/contact.js';
import Menu from './component/menuPage/menu.js';
import SocialMedia from './component/socialMedia/socialMedia.js';

function App() {
  return (
    <Router className='h'>
      <Helmet>
        <title> CheezyBurger </title>
      </Helmet>
      <NavBar />

      <Route
        exact={true}      
        path="/"
        component={Home}
      />

      <Route
        exact={true}      
        path="/menu"
        component={Menu}
      />

      <Route
        exact={true}      
        path="/contact"
        component={Contact}
      />

      <SocialMedia />

    </Router>
  );
}

export default App;
