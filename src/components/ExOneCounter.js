import React, { createRef, PureComponent } from "react";

class ExOneCounter extends PureComponent {
	state = {
		counter: 0,
	};

	componentRef = createRef();
	render() {
		const { counter } = this.state;
		return (
			<div ref={this.componentRef}>
				<p>Counter Numger: {counter}</p>
				<button onClick={this.handelDownoadAsyncData}>
					Download asynchronous data
				</button>
			</div>
		);
	}

	handelDownoadAsyncData = () =>
		setTimeout(() => {
			if (this.componentRef.current) {
				this.setState((prevState) => ({
					counter: prevState.counter + 1,
				}));
			}
		}, 3000);
}

export default ExOneCounter;
