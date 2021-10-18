import { Helmet } from 'react-helmet'
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

// Pages:-
import NavBar from './component/navBarPage/navBar'
import Contact from './component/contact/contact';

function App() {
  return (
    <Router>
      <Helmet>
        <title> CheezyBurger </title>
      </Helmet>

      <Route
        path="/contact"
        component={Contact}
      />

    </Router>
  );
}

export default App;
