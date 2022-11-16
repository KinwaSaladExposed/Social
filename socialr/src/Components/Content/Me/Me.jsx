import React from "react"
import arnold from '../../../img/arnold.jpg'

function Me(props) {
	return(
	<div className="Me">
        <img src={arnold} />
        <p>{props.name}</p>
    </div>
	)
} 

export default Me;