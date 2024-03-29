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
    <BrowserRouter forceRefresh={true}>
    <Header />
    <Nav FNames={props.state.Friends.FNames}/>
    <Switch>
    <Route exact path='/' render={()=><Content 
    PMsg={props.state.Comment.PMsg} 
    newPosts={props.state.Comment.newPosts}
    dispatch={props.dispatch}
    />} />

    <Route exact path='/ct' render={()=><Content 
    PMsg={props.state.Comment.PMsg} 
    newPosts={props.state.Comment.newPosts}
    dispatch={props.dispatch}
    />} />

    <Route exact path='/da' render={()=><Dialogue 
    Dialogue_Names={props.state.Dial.Dialogue_Names} 
    Message_Obj={props.state.Dial.Message_Obj} 
    dispatch={props.dispatch}
    />} />

    </Switch>
    </BrowserRouter>
    </div>
  );
}

export default App;

