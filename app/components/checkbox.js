import React from 'react';
import { WiredCheckbox } from "wired-checkbox"
import { WiredButton } from "wired-button"
import './checkbox.css';

export default class extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			flag: false
		};
		this.changHander = this.changHander.bind(this);
		this.clicked = this.clicked.bind(this);
	}
	render(){
		return (
			<div style={{marginTop:"50px"}}>
				<wired-checkbox text="Checkbox One" onClick={this.changHander}></wired-checkbox>
				<wired-button onClick={this.clicked}>test</wired-button>
				<wired-checkbox text="Checkbox Two" checked></wired-checkbox>
				<wired-checkbox text="Checkbox disabled" disabled></wired-checkbox>
				<wired-checkbox text="Checkbox Custom" class="custom"></wired-checkbox>
			</div>
		);
	}
	changHander(e){
		this.setState({flag: e.target.checked});
	}
	clicked(){
		alert(this.state.flag);
	}
}