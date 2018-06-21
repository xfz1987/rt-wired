import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Redirect, HashRouter, MemoryRouter} from 'react-router-dom';
import NAV from './components/nav';
import Button from './components/button';
import Card from './components/card';
import Checkbox from './components/checkbox';
import Combo from "./components/combo";
import IconButton from "./components/iconButton";
import Input from "./components/input";
import Listbox from "./components/listbox";
import Progress from "./components/progress";
import Radio from "./components/radio";
import RadioGroup from "./components/radioGroup";
import Textarea from "./components/textarea";
import Slider from "./components/slider";
import Toggle from "./components/toggle";
import Tooltip from "./components/toolTip";

render(
	<Router>
		<div>
			<NAV />
			<Switch>
				<Route exact path="/" component={Button} />	
				<Route path="/card" component={Card}></Route>
				<Route path="/checkbox" component={Checkbox}></Route>
				<Route path="/combo" component={Combo}></Route>
				<Route path="/iconbutton" component={IconButton}></Route>
				<Route path="/input" component={Input}></Route>
				<Route path="/listbox" component={Listbox}></Route>
				<Route path="/progress" component={Progress}></Route>
				<Route path="/radio" component={Radio}></Route>
				<Route path="/radiogroup" component={RadioGroup}></Route>
				<Route path="/slider" component={Slider}></Route>
				<Route path="/textarea" component={Textarea}></Route>
				<Route path="/toggle" component={Toggle}></Route>
				<Route path="/tooltip" component={Tooltip}></Route>
			</Switch>
		</div>
	</Router>,
	document.getElementById('app')
);