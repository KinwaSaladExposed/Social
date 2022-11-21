import React from 'react'
import './Dialogue.css'
import DI from './DialogueItem/DialogueItem';
import CM from './ChatMessage';

const Dialogue=(props)=> {
	return(
		<div className="da">

			<div className="Ppl_List">
				{props.Dialogue_Names.map((e)=><DI name={e.name} id={e.id} />)}
			</div>

			<div className="ChatBox">
				{props.Message_Obj.map((e)=><CM message={e.message} id={e.id} />)}
			

			<div className="SendMSG">
				<input className="EnterMessage" placeholder="Enter a Message"/>
				<button className="SendBtn">Send</button>
			</div>

			</div>
		</div>
	)
}


export default Dialogue;