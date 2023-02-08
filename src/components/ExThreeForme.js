import React, { useState } from "react";

const ExThreeForme = ({ handleAddForme }) => {
	const [inputData, setInputData] = useState("");

	const handleOnChange = (event) => setInputData(event.target.value);
	const handleOnClick = () => {
		const newCourse = {
			id: Math.floor(Math.random() * 1000),
			title: inputData,
		};

		handleAddForme({ type: "ADD", newCourse });
		setInputData("");
	};

	return (
		<div>
			<input type='text' onChange={handleOnChange} value={inputData} />
			<button onClick={handleOnClick}>Add</button>
		</div>
	);
};

export default ExThreeForme;
