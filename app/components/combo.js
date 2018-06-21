import React from 'react';
import { WiredCombo } from "wired-combo"

export default class extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			list: [
				{txt: 'Number one', val: 'one'},
				{txt: 'Number two', val: 'two'},
				{txt: 'Number three', val: 'three'},
			],
			cur: undefined
		}
	}
	render(){
		return (
			<div style={{marginTop:"50px"}}>
				<wired-combo>
  					<wired-item value="one" text="Number one"></wired-item>
  					<wired-item value="two" text="Number two"></wired-item>
  					<wired-item value="three" text="Number three"></wired-item>
				</wired-combo>
  
				<wired-combo selected="one" disabled>
				  	<wired-item value="one" text="Number one"></wired-item>
				  	<wired-item value="two" text="Number two"></wired-item>
				</wired-combo>
			</div>
		);
	}
}