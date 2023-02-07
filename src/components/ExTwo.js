import React, { useRef } from "react";

const ExTwo = () => {
	const addExclamation = useRef();
	const textImputRef = useRef();

	const handleFocusOnImput = () => textImputRef.current.focus();
	const handleAddExlamation = () => (addExclamation.current.textContent += "!");
	return (
		<div className='wraper'>
			<h3>Exercise 2 - useRef</h3>
			<input ref={textImputRef} type='text' />
			<br />
			<button onClick={handleFocusOnImput}>Focus on input</button>
			<div className='break'>
				<hr />
			</div>
			<h4 ref={addExclamation}>Well Done</h4>
			<button onClick={handleAddExlamation}>Exclamation</button>
		</div>
	);
};

export default ExTwo;
