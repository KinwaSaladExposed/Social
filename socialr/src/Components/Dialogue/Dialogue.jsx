import React from 'react'
import './Dialogue.css'
import DI from './DialogueItem/DialogueItem';
import CM from './ChatMessage';

let MText = React.createRef();

const Dialogue=(props)=> {
	let postMsg = () => {
		props.postMsg(MText.current.value);
	}
	return(
		<div className="da">

			<div className="Ppl_List">
				{props.Dialogue_Names.map((e)=><DI name={e.name} id={e.id} />)}
			</div>

			<div className="ChatBox">
				{props.Message_Obj.map((e)=><CM message={e.message} id={e.id} />)}
			

			<div className="SendMSG">
				<input className="EnterMessage" placeholder="Enter a Message" ref={MText}/>
				<button className="SendBtn" onClick={postMsg}>Send</button>
			</div>

			</div>
		</div>
	)
}


export default Dialogue;