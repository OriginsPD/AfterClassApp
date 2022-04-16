import { Navigate } from "react-router-dom";
import { useState } from "react";
import AlertMessage from "../components/toast/AlertMessage";
import { useForms } from "../hooks/useForms";
import useToken from "../hooks/useToken";

const DiscussionTopicApi = () => {
	const [discussionState, setDiscussionState] = useState([]);
	const { token } = useToken();
	const { CreatedFailed, CreatedSuccess } = AlertMessage();

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

		if (queryResponse.status == 200) {
			CreatedSuccess();
			<Navigate to="/" />;
		} else {
			CreatedFailed();
		}

		console.log(queryResponse.status);

		// console.log(credentials);
	};

	const discussionDelete = async (id) => {
		let { body, ...indexOption } = requestOption;
		const response = await fetch(`${accessPoint}/dtopic/${id}`, {
			...indexOption,
			method: "DELETE",
		});

		const queryResponse = await response.json();

		if (queryResponse.status == 200) {
			CreatedSuccess();
			<Navigate to="/dashboard" />;
		} else {
			CreatedFailed();
		}

		console.log(queryResponse.status);
	};

	const configProps = {
		// Function
		discussionIndex,
		discussionFind,
		discussionStore,
		discussionDelete,

		// State
		discussionState,
	};

	return { ...configProps };
};

export default DiscussionTopicApi;
