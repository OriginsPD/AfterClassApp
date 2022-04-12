import { useState } from "react";

const CategoryApi = () => {
	const [category, setCategories] = useState([]);

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

	const categoryIndex = async () => {
		let { ...indexOption } = requestOption;
		const response = await fetch(`${accessPoint}/category`, {
			...indexOption,
			method: "GET",
		});

		const queryResponse = await response.json();

		setCategories(queryResponse);

		// console.log(queryResponse);
	};

	return { categoryIndex, category };
};

export default CategoryApi;
