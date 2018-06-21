import React from 'react';
import { WiredButton } from "wired-button"

export default class extends React.Component {
	constructor(props){
		super(props);
		this.clicked = this.clicked.bind(this);
	}
	render(){
		return (
			<div style={{marginTop:"50px"}}>
				<wired-button onClick={this.clicked}>Click Me</wired-button>
				<wired-button disabled>Disabled</wired-button>
				<wired-button elevation="3">Elevation</wired-button>	
			</div>
		);
	}
	clicked(){
		alert('haha');
	}
}