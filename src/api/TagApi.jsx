import { useState } from "react";

const TagApi = () => {
	const [tags, setTags] = useState([]);

	// Access Point Url
	const accessPoint = "http://127.0.0.1:8000/api";

	// Request Option
	const requestOption = {
		method: "",
		headers: {
			"content-Type": "application/json",
			Accept: "application/json",
		},
		// body: JSON.stringify(credentials),
	};

	const tagIndex = async () => {
		let { ...indexOption } = requestOption;
		const response = await fetch(`${accessPoint}/tag`, {
			...indexOption,
			method: "GET",
		});

		const queryResponse = await response.json();

		setTags(queryResponse);

		// console.log(queryResponse);
	};

	return { tagIndex, tags };
};

export default TagApi;
