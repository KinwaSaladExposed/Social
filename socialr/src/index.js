import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createCo} from './Data/State'
import {postMsg} from './Data/State'
import {OPC} from './Data/State'
import {NM} from './Data/State'
import state from './Data/State'


export let run = (state) => {
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App 
      state={state}
      createCo={createCo}
      postMsg={postMsg}
      OPC={OPC}
      NM={NM}
    />
  </React.StrictMode>
);
}

run(state);
subscribe(run);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
