import React from "react";
import AlertMessage from "../components/toast/AlertMessage";
import useAuth from "../hooks/useAuth";
import { useForms } from "../hooks/useForms";
import useToken from "../hooks/useToken";

const ProfileApi = () => {
	const { loginFailed, loginSuccess } = AlertMessage();
	const { updateAuthorize } = useAuth();
	const { token } = useToken();
	const { credentials } = useForms();
	// Access Point Url
	const accessPoint = "http://127.0.0.1:8000/api";

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
			loginSuccess();
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
