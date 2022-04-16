import React from "react";
import { useForms } from "../hooks/useForms";

const ProfileApi = () => {
	const { credentials } = useForms();
	// Access Point Url
	const accessPoint = "http://127.0.0.1:8000/api";

	// Request Option
	const requestOption = {
		method: "",
		headers: {
			// "content-Type": "multipart/form-data",
			Accept: "application/json",
		},
		body: JSON.stringify(credentials),
	};

	const updateProfile = async () => {
		var data = new FormData();
		data.append("image", credentials.image, credentials.image.name);
		data.append("username", credentials.username);

		let { ...indexOption } = requestOption;

		const response = await fetch(`${accessPoint}/userProfile`, {
			...indexOption,
			method: "POST",
			body: data,
		});

		const queryResponse = await response.json();

		console.log(queryResponse);
	};

	const configProps = {
		updateProfile,
	};

	return { ...configProps };
};

export default ProfileApi;
