import React from 'react';
import { WiredTextarea } from "wired-textarea"
import './slider.css';

export default class extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div style={{marginTop:"50px"}}>
				<wired-textarea placeholder="placeholder" maxrows="10"></wired-textarea>
  				<wired-textarea placeholder="Enter text" rows="3"></wired-textarea>
  				<wired-textarea disabled placeholder="disabled" rows="2"></wired-textarea>
			</div>
		);
	}
}