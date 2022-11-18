import React from 'react'
import arnold2 from '../../../img/pparnold.jpg'
import './OP.css';

function OP(props) {
	return(
    <div className="OnePost">
  		<img src={arnold2} />

 	 	<span>Arnold Schwarzenegger</span>

  		<p>{props.message} <span className="L">{props.like}</span></p>
	</div>
	)
}

export default OP;