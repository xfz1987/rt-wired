import React from 'react';
import { WiredIconButton } from "wired-icon-button"
import "./iconButton.css";

export default class extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div style={{marginTop:"50px"}}>
				<wired-icon-button>favorite</wired-icon-button>
  				<wired-icon-button class="red">favorite</wired-icon-button>
  				<wired-icon-button class="pinkbg">favorite</wired-icon-button>
  				<wired-icon-button class="big">favorite</wired-icon-button>
  				<wired-icon-button disabled>favorite</wired-icon-button>
			</div>
		);
	}
}