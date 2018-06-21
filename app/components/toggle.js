import React from 'react';
import { WiredToggle } from "wired-toggle"
import './toggle.css';

export default class extends React.Component {
	constructor(props){
		super(props);
		this.clicked = this.clicked.bind(this);
	}
	render(){
		return (
			<div style={{marginTop:"50px"}}>
  				<wired-toggle></wired-toggle>
  				<wired-toggle class="cust" checked></wired-toggle>
  				<wired-toggle disabled></wired-toggle>
			</div>
		);
	}
	clicked(){
		alert('haha');
	}
}