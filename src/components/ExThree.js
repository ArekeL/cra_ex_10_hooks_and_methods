import React, { useEffect, useReducer } from "react";
import ExThreeCourseInfo from "./ExThreeCourseInfo";
import ExThreeForme from "./ExThreeForme";

const courses = [
	{
		id: "aa2561a3-861a-4d3b-bf32-deeca65c1dab",
		title: "Web developer for beginners",
	},
	{
		id: "d257b2cf-5200-46d4-8889-d7d9cd0cfa86",
		title: "Advanced front-end",
	},
	{
		id: "7bd99654-d51d-4d62-ad66-353866d4bd01",
		title: "Programming in JavaScript",
	},
	{
		id: "3cae4405-bc0d-459e-abd7-3fcef7fcc3a5",
		title: "React from scratch",
	},
	{
		id: "f8c28740-0184-423c-ad03-018496946179",
		title: "Backend - Node.js",
	},
	{
		id: "20557edc-c01e-48a4-814f-61c9c7f0850a",
		title: "Advanced Designs in CSS and JavaScript",
	},
];

const coursesReduser = (state, action) => {
	switch (action.type) {
		case "ADD":
			return [...state, action.newCourse];
		case "REMOVE":
			return state.filter((courses) => courses.id !== action.id);
		case "FETCH":
			return action.data;
		default:
			throw new Error("Ooops something went wrong!");
	}
};

const fetchAsyncData = async () => {
	await new Promise((resolve) => setTimeout(resolve, 3000));
};

const ExThree = () => {
	const [state, dispatch] = useReducer(coursesReduser, []);

	const asyncFetch = async () => {
		await fetchAsyncData();
		dispatch({ type: "FETCH", data: courses });
	};

	useEffect(() => {
		asyncFetch();
	}, []);

	const coursesElement = state.map((course) => (
		<ExThreeCourseInfo key={course.id} onClickHandler={dispatch} {...course} />
	));
	return (
		<div className='wraper'>
			<h3>Exercise 3 - useReducer</h3>
			<h2 className='exThreeTitle'>Courses</h2>
			<ExThreeForme handleAddForme={dispatch} />
			{coursesElement}
		</div>
	);
};

export default ExThree;
