import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

let Dialogue_Names = [
  {name:"Mr. Cool",id:1},
  {name:"Mr. Uncool",id:2},
  {name:"Mr. Very Cool",id:3}
]

let Message_Obj = [
  {message:"Hi, How have you been",id:1},
  {message:"Bad",id:2},
  {message:"Thats no good",id:3},
  {message:"Can you stop texting me",id:4}
]

let PMsg = [
  {message:"Today I started my post",like:400,id:1},
  {message:"Yesterday I finished my post",like:2,id:2},
  {message:"Im taking a break from posting",like:69,id:3}
]

root.render(
  <React.StrictMode>
    <App 
      PMsg = {PMsg}
      Dialogue_Names = {Dialogue_Names}
      Message_Obj = {Message_Obj}
    />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
