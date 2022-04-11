import { useState } from "react";
import { useForms } from "../hooks/useForms";

const ReplyApi = () => {
	const [replyState, setReplyState] = useState([]);

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

	const replyStore = async () => {
		// console.log(credentials);
		let { ...indexOption } = requestOption;
		const response = await fetch(`${accessPoint}/reply`, {
			...indexOption,
			method: "POST",
		});

		const processQuery = await response.json();

		console.log(processQuery);
	};

	const configProps = {
		// Function
		replyStore,

		// State
		replyState,
	};

	return { ...configProps };
};

export default ReplyApi;
