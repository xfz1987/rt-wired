import React from 'react';
import { WiredRadioGroup } from "wired-radio-group";
import './radioGroup.css';

export default class extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div style={{marginTop:"50px"}}>
				<wired-radio-group selected="two">
    				<wired-radio name="one" text="Radio One"></wired-radio>
    				<wired-radio name="two" text="Radio Two"></wired-radio>
    				<wired-radio name="three" text="Radio Three" class="cradio"></wired-radio>
  				</wired-radio-group>	
			</div>
		);
	}
}