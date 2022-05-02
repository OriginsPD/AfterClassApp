import React from "react";
import { useForms } from "../hooks/useForms";
import useToken from "../hooks/useToken";

// Access Point Url
import { accessPoint } from "../constant/ApiHost";

const CommentApi = () => {
	const { credentials } = useForms();
	const { token } = useToken();

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

	const commentStore = async () => {
		const response = await fetch(`${accessPoint}/comment`, {
			...requestOption,
			method: "POST",
		});

		const queryResponse = await response.json();

		console.log(queryResponse);
	};

	const configProps = {
		// Functions
		commentStore,
	};

	return { ...configProps };
};

export default CommentApi;
