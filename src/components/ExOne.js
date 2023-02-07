import React, { createRef, PureComponent } from "react";
import ExOneCounter from "./ExOneCounter";

class ExOne extends PureComponent {
	textImput = createRef();
	addExclamation = createRef();
	state = {
		counterVisibility: true,
	};

	render() {
		const counterElement = this.state.counterVisibility ? (
			<ExOneCounter />
		) : (
			"Counter has been hidden"
		);
		return (
			<div className='wraper'>
				<h3>Exercise 1 - createRef</h3>
				<input ref={this.textImput} type='text' />
				<br />
				<button onClick={this.handleFocusOnImput}>Focus on Input</button>
				<div className='break'>
					<hr />
				</div>
				<h4 ref={this.addExclamation}>Well Done</h4>
				<button onClick={this.handleAddExlamation}>Exclamation</button>
				<div className='break'>
					<hr />
				</div>
				<button onClick={this.handleToggleVisibilityCounter}>
					Show / Hide Counter
				</button>
				<div className='hideBox'>{counterElement}</div>
			</div>
		);
	}
	handleFocusOnImput = () => this.textImput.current.focus();

	handleAddExlamation = () => (this.addExclamation.current.textContent += "!");

	handleToggleVisibilityCounter = () =>
		this.setState((prevState) => ({
			counterVisibility: !prevState.counterVisibility,
		}));
}

export default ExOne;
