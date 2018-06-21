import React from 'react';
import { WiredRadio } from "wired-radio"
import './radio.css';

export default class extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div style={{marginTop:"50px"}}>
  				<wired-radio text="Radio One"></wired-radio>
  				<wired-radio text="Radio Two" checked></wired-radio>
  				<wired-radio text="Radio disabled" disabled></wired-radio>
  				<wired-radio text="Custom radio" class="cradio"></wired-radio>
			</div>
		);
	}
}
