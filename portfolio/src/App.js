import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./pages/About";
import Portfolio from "./pages/Portfolio"
import Contact from "./pages/Contact"
import {BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  return (
    <Router >
    <div className="App">
      <Route exact path = "/" component = {About} />
      <Route exact path = "/portfolio" component = {Portfolio} />
      <Route exact path = "/contact" component = {Contact} />
    </div>
    </ Router>
  );
}

export default App;
