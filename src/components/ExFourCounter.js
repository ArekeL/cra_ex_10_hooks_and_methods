import React from "react";

const ExFourCounter = ({ counter, index }) => {
	console.log(`render counter ${index}`);
	return (
		<div className='hideBox App'>
			<h4>Component {index}</h4>
			<p>
				Counter no. {index} value: {counter}{" "}
			</p>
		</div>
	);
};

export default React.memo(ExFourCounter);
