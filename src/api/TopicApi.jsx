import { useState } from "react";

const TopicApi = () => {
	const [topics, setTopics] = useState([]);

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
