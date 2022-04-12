import { useState } from "react";
import { useForms } from "../hooks/useForms";
import useToken from "../hooks/useToken";

const DiscussionTopicApi = () => {
	const [discussionState, setDiscussionState] = useState([]);
	const { token } = useToken();

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
			Authorization: `Bearer ${token}`,
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

	const discussionStore = async () => {
		const response = await fetch(`${accessPoint}/dtopic`, {
			...requestOption,
			method: "POST",
		});

		const queryResponse = await response.json();

		console.log(queryResponse);

		// console.log(credentials);
	};

	const configProps = {
		// Function
		discussionIndex,
		discussionFind,
		discussionStore,

		// State
		discussionState,
	};

	return { ...configProps };
};

export default DiscussionTopicApi;
