import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header/Header"
import Nav from "./Components/Nav/Nav"
import Content from "./Components/Content/Content"

function App() {
  return (
    <div className="Wrapper">
    <Header />
    <Nav />
    <Content name={"Arnold Schawrtznegger"}/>
    </div>
  );
}

export default App;

///read what props are in react