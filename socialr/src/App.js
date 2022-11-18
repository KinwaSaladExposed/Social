import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header"
import Nav from "./Components/Nav/Nav"
import Content from "./Components/Content/Content"
import Dialogue from "./Components/Dialogue/Dialogue"
import {BrowserRouter, Route, Switch} from "react-router-dom"

function App(props) {
  return (
    <div className="Wrapper">
    <BrowserRouter>
    <Header />
    <Nav />
    <Switch>
    <Route exact path='/' render={()=><Content />} />
    <Route exact path='/ct' render={()=><Content PMsg={props.PMsg}/>} />
    <Route exact path='/da' render={()=><Dialogue Dialogue_Names={props.Dialogue_Names} Message_Obj={props.Message_Obj}/>} />
    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;

