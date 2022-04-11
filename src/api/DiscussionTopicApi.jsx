import { useState } from "react";
import { useForms } from "../hooks/useForms";

const DiscussionTopicApi = () => {
	const [discussionState, setDiscussionState] = useState([]);

	// Hook Imports Details
	const { credentials } = useForms();

	// Access Point Url
	const accessPoint = "http://127.0.0.1:8000/api";

	// Request Option
	const requestOption = {
		method: "",
		headers: {
			"content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify(credentials),
	};

	const discussionIndex = async () => {
		let { body, ...indexOption } = requestOption;
		const response = await fetch(`${accessPoint}/dtopic`, {
			...indexOption,
			method: "GET",
		});

		const processQuery = await response.json();

		setDiscussionState(processQuery);
	};

	const discussionFind = async (id) => {
		let { body, ...indexOption } = requestOption;
		const response = await fetch(`${accessPoint}/dtopic/${id}`, {
			...indexOption,
			method: "GET",
		});

		const processQuery = await response.json();

		// console.log(processQuery);
		setDiscussionState(processQuery);
	};

	const configProps = {
		// Function
		discussionIndex,
		discussionFind,

		// State
		discussionState,
	};

	return { ...configProps };
};

export default DiscussionTopicApi;
