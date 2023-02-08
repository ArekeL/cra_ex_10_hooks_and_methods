import React from "react";

const ExThreeCourseInfo = ({ id, onClickHandler, title }) => {
	const handleOnClick = () =>
		onClickHandler({
			id,
			type: "REMOVE",
		});

	return (
		<div>
			<h4>{title}</h4>
			<button onClick={handleOnClick}>Remove</button>
		</div>
	);
};

export default ExThreeCourseInfo;
