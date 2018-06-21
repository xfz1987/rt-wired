import React from 'react';
import { WiredListbox } from "wired-listbox"
import './listbox.css';

export default class extends React.Component {
	constructor(props){
		super(props);
		this.clicked = this.clicked.bind(this);
	}
	render(){
		return (
			<div style={{marginTop:"50px"}}>
 				<wired-listbox>
 				   <wired-item value="one" text="No. one"></wired-item>
 				   <wired-item value="two" text="No. two"></wired-item>
 				   <wired-item value="three" text="No. three"></wired-item>
 				   <wired-item value="four" text="No. four"></wired-item>
 				</wired-listbox>

  				<wired-listbox horizontal class="customListBox" selected="two">
  				  	<wired-item value="one" text="No. one"></wired-item>
  				  	<wired-item value="two" text="No. two"></wired-item>
  				  	<wired-item value="three" text="No. three"></wired-item>
  				  	<wired-item value="four" text="No. four"></wired-item>
  				</wired-listbox>
			</div>
		);
	}
	clicked(){
		alert('haha');
	}
}