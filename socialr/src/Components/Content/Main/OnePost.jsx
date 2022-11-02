import React from 'react'
import arnold2 from '../../../img/pparnold.jpg'

function OP(props) {
	return(
    <div className="OnePost">
  		<img src={arnold2} />

 	 	<span>Arnold Schwarzenegger</span>

  		<p>{props.message}</p>
	</div>
	)
}

export default OP;