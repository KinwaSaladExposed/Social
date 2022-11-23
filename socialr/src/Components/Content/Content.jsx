import React from 'react';
import './Content.css'
import Posts from './Posts/Posts'
import arnold from '../../img/arnold.jpg'
import Me from './Me/Me'

function Content(props) {
  return (
    <div className="ct">
        <Me />
        <Posts PMsg={props.PMsg} createCo={props.createCo}/>
    </div>
    
  );
}

export default Content;