import React from 'react'
import './Dialogue.css'
import DI from './DialogueItem/DialogueItem';
import CM from './ChatMessage';

const Dialogue=(props)=> {
	return(
		<div className="da">

			<div className="Ppl_List">
				<DI name={"Mr. Cool"} id={"1"}/>
				<DI name={"Mr. Uncool"} id={"2"}/>
				<DI name={"Mr. Very Cool"} id={"3"}/>
			</div>

			<div className="ChatBox">
				<CM message={"Hi, How have you been"}/>
				<CM message={"Bad"}/>
				<CM message={"Thats no good"}/>
				<CM message={"Can you stop texting me"}/>
			</div>

			<div className="SendMSG">
				<input className="EnterMessage" placeholder="Enter a Message"/>
				<button className="SendBtn">Send</button>
			</div>
		</div>
	)
}


export default Dialogue;