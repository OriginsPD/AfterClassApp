import { useState } from "react";

// Access Point Url
import { accessPoint } from "../constant/ApiHost";

const TagApi = () => {
	const [tags, setTags] = useState([]);

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
