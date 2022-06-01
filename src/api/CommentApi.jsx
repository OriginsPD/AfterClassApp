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
			"X-XSRF-TOKEN":
				"eyJpdiI6InIwTWxxVGprQktiVU5lWldWS1RiVHc9PSIsInZhbHVlIjoia3FMdlltY09pRDM3b0pnd2xqRGttR2FobzBWZG1CanZvZ2R2U2QwRlQvSkVyOTllTW9xRTJjMG5oSXFhblVwWVhrbGFXc2QxVDZOYVNaL2dtNVN5L0NlUWh3Q1JuMGhUNW93U1JObTVhSVFRcGZzOUhULytQNll6dkhROUpZdFUiLCJtYWMiOiI1NzM2OGMzZWJmMDJkZjY5ODMzODU2ZTdjZjc0OTIwMTljYWQ2MjlkZWQ0OTAyOWMzZDBhN2NhZTUyNTE5YjBiIiwidGFnIjoiIn0%3D",
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
