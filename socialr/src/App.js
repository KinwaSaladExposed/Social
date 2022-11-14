import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header"
import Nav from "./Components/Nav/Nav"
import Content from "./Components/Content/Content"
import Dialogue from "./Components/Dialogue/Dialogue"
import {BrowserRouter, Route, Switch} from "react-router-dom"

function App() {
  return (
    <div className="Wrapper">
    <BrowserRouter>
    <Header />
    <Nav />
    <Switch>
    <Route exact path='/' component={Content} />
    <Route exact path='/ct' component={Content} />
    <Route exact path='/da' component={Dialogue} />
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;

