import { Navigate } from "react-router-dom";
import { useState } from "react";
import AlertMessage from "../components/toast/AlertMessage";
import { useForms } from "../hooks/useForms";
import useToken from "../hooks/useToken";

// Access Point Url
import { accessPoint } from "../constant/ApiHost";
import CheckAuth from "../auth/CheckAuth";
import { useEffect } from "react";

const DiscussionTopicApi = () => {
	const [load, setLoad] = useState(false);
	const [discussionState, setDiscussionState] = useState([]);
	const { token } = useToken();
	const { CreatedFailed, CreatedSuccess, postDelete } = AlertMessage();

	// Hook Imports Details
	const { credentials } = useForms();

	// Request Option
	const requestOption = {
		method: "",
		headers: {
			"content-Type": "application/json",
			Accept: "application/json",
			"X-XSRF-TOKEN":
				"eyJpdiI6InIwTWxxVGprQktiVU5lWldWS1RiVHc9PSIsInZhbHVlIjoia3FMdlltY09pRDM3b0pnd2xqRGttR2FobzBWZG1CanZvZ2R2U2QwRlQvSkVyOTllTW9xRTJjMG5oSXFhblVwWVhrbGFXc2QxVDZOYVNaL2dtNVN5L0NlUWh3Q1JuMGhUNW93U1JObTVhSVFRcGZzOUhULytQNll6dkhROUpZdFUiLCJtYWMiOiI1NzM2OGMzZWJmMDJkZjY5ODMzODU2ZTdjZjc0OTIwMTljYWQ2MjlkZWQ0OTAyOWMzZDBhN2NhZTUyNTE5YjBiIiwidGFnIjoiIn0%3D",
			Authorization: "Bearer " + token,
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
		setLoad(true);
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
		setLoad(true);
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
			postDelete();
			<Navigate to="/dashboard" />;
		} else {
			CreatedFailed();
		}

		console.log(queryResponse.status);
	};

	useEffect(() => {
		setLoad(false);
	}, []);

	const configProps = {
		// Function
		discussionIndex,
		discussionFind,
		discussionStore,
		discussionDelete,

		// State
		discussionState,
		load,
	};

	return { ...configProps };
};

export default DiscussionTopicApi;
