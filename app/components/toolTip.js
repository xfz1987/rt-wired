import React from 'react';
import { WiredTooltip } from "wired-tooltip"
import './toolTip.css';

export default class extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		return (
			<div style={{marginTop:"50px"}}>
				<div class="container">
    				<div class="inline">
    				  	<button>Click me!</button>
    				  	<wired-tooltip text="Below"></wired-tooltip>
    				</div>
    				<button id="btn">Click me!</button>
    				<wired-tooltip position="top" for="btn" text="Above"></wired-tooltip>
    				<button id="lb">Click me!</button>
    				<wired-tooltip position="left" for="lb" text="Left"></wired-tooltip>
    				<button id="rb">Click me!</button>
    				<wired-tooltip position="right" for="rb" text="Right"></wired-tooltip>
  				</div>

  				<div class="container">
  				  	<div class="inline">
  				  	  	<button>Click me!</button>
  				  	  	<wired-tooltip class="colored" text="Fancy tooltip"></wired-tooltip>
  				  	</div>
  				</div>
			</div>
		);
	}
}