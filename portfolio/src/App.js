import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./pages/About";
import {BrowserRouter as Router, Route} from "react-router-dom"

function App() {
  return (
    <Router >
    <div className="App">
      <Route exact path = "/" component = {About} />
    </div>
    </ Router>
  );
}

export default App;
