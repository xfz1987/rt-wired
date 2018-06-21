import React from 'react';
import { WiredProgress } from "wired-progress"

export default class extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			total: 0
		}
	}
	render(){
		return (
			<div style={{marginTop:"50px"}}>
				<wired-progress value="25"></wired-progress>
  				<wired-progress value="10" min="5" max="15"></wired-progress>
  				<wired-progress value="65" percentage></wired-progress>
  				<wired-progress class="custom" value={this.state.total}></wired-progress>
			</div>
		)
	}
	componentDidMount(){
		var timer = setInterval(() => {
			this.setState({total: this.state.total+1});
			if(this.state.total >= 100) clearInterval(timer);
		}, 100);
	}
}