import React from 'react';
import './Content.css'
import Posts from './Posts/Posts'
import arnold from '../../img/arnold.jpg'

function Content(props) {
  return (
    <div className="ct">
      <div className="Me">
        <img src={arnold} />
        <p>{props.name}</p>
      </div>
      <Posts message={props.message} />
    </div>
  );
}

export default Content;