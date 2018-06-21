import React from 'react';
import { WiredSlider } from "wired-slider"
import './slider.css';

export default class extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div style={{marginTop:"50px"}}>
				<wired-slider></wired-slider>
  				<wired-slider value="40"></wired-slider>
  				<wired-slider knobradius="15" value="10" min="5" max="15"></wired-slider>
  				<wired-slider value="60" disabled></wired-slider>
  				<wired-slider class="custom" value="25"></wired-slider>	
			</div>
		);
	}
}