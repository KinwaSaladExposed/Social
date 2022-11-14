import React from 'react'
import {NavLink} from 'react-router-dom'

const DI=(props)=> {
	return(
		<div className="Ppl_List">
			<div className="Person"> <NavLink to={`/da/${props.id}`}>{props.name}</NavLink> </div>
		</div>
	)
}

export default DI;