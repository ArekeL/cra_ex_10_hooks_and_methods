import { useState } from "react";

import ExFourCounter from "./ExFourCounter";

const ExFour = () => {
	const [firstCounter, setFirestCounter] = useState(0);
	const [secondCounter, setSecondCounter] = useState(0);

	const increaseFirstCounter = () => setFirestCounter(firstCounter + 1);
	const increaseSecondtCounter = () => setSecondCounter(secondCounter + 1);
	return (
		<div className='wraper'>
			<h3>React.memo</h3>
			<p>First counter value: {firstCounter}</p>
			<p>Second counter value: {secondCounter}</p>
			<ExFourCounter counter={firstCounter} index={1} />
			<ExFourCounter counter={secondCounter} index={2} />
			<button onClick={increaseFirstCounter}>First Counter + 1</button>
			<button onClick={increaseSecondtCounter}>Second Counter + 1</button>
		</div>
	);
};

export default ExFour;
