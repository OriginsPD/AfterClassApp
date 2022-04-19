import React from "react";
import useToken from "../hooks/useToken";

const ViewApi = () => {
	const { token } = useToken();
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
	};

	const viewCount = async (id) => {
		const response = await fetch(`${accessPoint}/viewCount/${id}`, {
			...requestOption,
			method: "GET",
		});

		const queryResponse = await response.json();

		console.log(queryResponse);
	};

	return { viewCount };
};

export default ViewApi;
