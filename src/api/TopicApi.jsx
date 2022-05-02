import { useState } from "react";

// Access Point Url
import { accessPoint } from "../constant/ApiHost";

const TopicApi = () => {
	const [topics, setTopics] = useState([]);

	// Request Option
	const requestOption = {
		method: "",
		headers: {
			"content-Type": "application/json",
			Accept: "application/json",
		},
		// body: JSON.stringify(credentials),
	};

	const topicIndex = async () => {
		let { ...indexOption } = requestOption;
		const response = await fetch(`${accessPoint}/topic`, {
			...indexOption,
			method: "GET",
		});

		const queryResponse = await response.json();

		setTopics(queryResponse);

		// console.log(queryResponse);
	};

	return { topicIndex, topics };
};

export default TopicApi;
