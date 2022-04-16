import React from "react";
import { useState } from "react";

const MemberAPi = () => {
	const [member, setMember] = useState([]);

	// Access Point Url
	const accessPoint = "http://127.0.0.1:8000/api";

	// Request Option
	const requestOption = {
		method: "",
		headers: {
			"content-Type": "application/json",
			Accept: "application/json",
		},
	};

	const memberIndex = async () => {
		let { ...indexOption } = requestOption;
		const response = await fetch(`${accessPoint}/member`, {
			...indexOption,
			method: "GET",
		});

		const queryResponse = await response.json();

		setMember(queryResponse);
		// console.log(queryResponse);
	};

	const configProps = {
		// Function
		memberIndex,

		//state
		member,
	};

	return { ...configProps };
};

export default MemberAPi;
