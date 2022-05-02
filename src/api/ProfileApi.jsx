import React from "react";
import AlertMessage from "../components/toast/AlertMessage";
import useAuth from "../hooks/useAuth";
import { useForms } from "../hooks/useForms";
import useToken from "../hooks/useToken";

// Access Point Url
import { accessPoint } from "../constant/ApiHost";

const ProfileApi = () => {
	const { loginFailed, profileUpdated } = AlertMessage();
	const { updateAuthorize } = useAuth();
	const { token } = useToken();
	const { credentials } = useForms();

	// Request Option
	const requestOption = {
		method: "",
		headers: {
			// "content-Type": "multipart/form-data",
			Accept: "application/json",
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(credentials),
	};

	const updateProfile = async () => {
		var data = new FormData();
		// data.append("image", credentials.image, credentials.image.name);
		data.append("username", credentials.username);
		data.append("about", credentials.about);

		let { ...indexOption } = requestOption;

		const response = await fetch(`${accessPoint}/userProfile`, {
			...indexOption,
			method: "POST",
			body: data,
		});

		const queryResponse = await response.json();

		console.log(queryResponse.body);

		if (queryResponse.body?.status == 200) {
			updateAuthorize(queryResponse.body);
			profileUpdated();
		} else {
			loginFailed();
		}
	};

	const configProps = {
		updateProfile,
	};

	return { ...configProps };
};

export default ProfileApi;
