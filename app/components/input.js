import React from 'react';
import { WiredInput } from "wired-input"

export default class extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			name: 'xfz'
		}
	}
	render(){
		return (
			<div style={{marginTop:"50px"}}>
				<wired-input value={this.state.name}></wired-input>
  				<wired-input type="password"></wired-input>
  				<wired-input placeholder="Enter name"></wired-input>
  				<wired-input placeholder="Disabled" disabled></wired-input>
			</div>
		);
	}
}