import { useState } from "react";

// Access Point Url
import { accessPoint } from "../constant/ApiHost";

const MemberAPi = () => {
	const [member, setMember] = useState([]);

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
