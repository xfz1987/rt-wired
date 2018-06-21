import React from 'react';
import { WiredCard } from "wired-card";

export default class extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div style={{marginTop:"50px"}}>
				<wired-card>
	 	 			<p>Elevation: 1</p>
				</wired-card>
				<wired-card elevation="3">
  					<p>Elevation: 3</p>
  					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. </p>
				</wired-card>
			</div>
		);
	}
}