import React from 'react';
import './Content.css'
import Posts from './Posts/Posts'
import arnold from '../../img/arnold.jpg'
import Me from './Me/Me'

function Content(props) {
  return (
    <div className="ct">
        <Me name={props.name}/>
        <Posts message={props.message} />
    </div>
  );
}

export default Content;