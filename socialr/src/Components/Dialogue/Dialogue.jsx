import React from 'react'
import './Dialogue.css'
import DI from './DialogueItem/DialogueItem';
import CM from './ChatMessage';

let Dialogue_Names = [
{name:"Mr. Cool",id:1},
{name:"Mr. Uncool",id:2},
{name:"Mr. Very Cool",id:3}
]

let Message_Obj = [
{message:"Hi, How have you been",id:1},
{message:"Bad",id:2},
{message:"Thats no good",id:3},
{message:"Can you stop texting me",id:4}
]

const Dialogue=(props)=> {
	return(
		<div className="da">

			<div className="Ppl_List">
				{/*<DI name={Dialogue_Names[0].name} id={Dialogue_Names[0].id}/>
				<DI name={Dialogue_Names[1].name} id={Dialogue_Names[1].id}/>
				<DI name={Dialogue_Names[2].name} id={Dialogue_Names[2].id}/>*/}
				{Dialogue_Names.map((e)=><DI name={e.name} id={e.id} />)}
			</div>

			<div className="ChatBox">
				{/*<CM message={Message_Obj[0].message} id={Message_Obj[0].id}/>
				<CM message={Message_Obj[1].message} id={Message_Obj[1].id}/>
				<CM message={Message_Obj[2].message} id={Message_Obj[2].id}/>
				<CM message={Message_Obj[3].message} id={Message_Obj[3].id}/>*/}
				{Message_Obj.map((e)=><CM message={e.message} id={e.id} />)}
			

			<div className="SendMSG">
				<input className="EnterMessage" placeholder="Enter a Message"/>
				<button className="SendBtn">Send</button>
			</div>

			</div>
		</div>
	)
}


export default Dialogue;