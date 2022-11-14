import React from 'react'

const CM=(props)=> {
	return(
		<div className="ChatBox">
			<p className="Message">{props.message}</p>
		</div>
	)
}

export default CM;