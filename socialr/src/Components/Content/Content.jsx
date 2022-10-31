import React from 'react';
import './Content.css'
import arnold from '../../img/arnold.jpg'
import arnold2 from '../../img/pparnold.jpg'

function Content() {
  return (
    <div className="ct">
      <div className="Me">
        <img src={arnold} />
        <p>Arnold Schwarzenegger</p>
      </div>

      <div className="Posts">
        <input placeholder="Enter the post" />
        <button>Add the Post</button>

        <div className="OnePost">
          <img src={arnold2} />

          <span>Arnold Schwarzenegger</span>

          <p></p>
        </div>
      </div> 
    </div>
  );
}

export default Content;