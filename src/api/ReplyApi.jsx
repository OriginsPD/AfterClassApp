import { useState } from "react";
import { useForms } from "../hooks/useForms";
import useToken from "../hooks/useToken";

// Access Point Url
import { accessPoint } from "../constant/ApiHost";
import AlertMessage from "../components/toast/AlertMessage";
import useAuth from "../hooks/useAuth";

const ReplyApi = () => {
	const { authInfo } = useAuth();
	const { pleaseLogin } = AlertMessage();
	const [replyState, setReplyState] = useState([]);
	const { token } = useToken();

	// Hook Imports Details
	const { credentials } = useForms();

	// Request Option
	const requestOption = {
		method: "",
		headers: {
			"content-Type": "application/json",
			Accept: "application/json",
			"X-XSRF-TOKEN":
				"eyJpdiI6InIwTWxxVGprQktiVU5lWldWS1RiVHc9PSIsInZhbHVlIjoia3FMdlltY09pRDM3b0pnd2xqRGttR2FobzBWZG1CanZvZ2R2U2QwRlQvSkVyOTllTW9xRTJjMG5oSXFhblVwWVhrbGFXc2QxVDZOYVNaL2dtNVN5L0NlUWh3Q1JuMGhUNW93U1JObTVhSVFRcGZzOUhULytQNll6dkhROUpZdFUiLCJtYWMiOiI1NzM2OGMzZWJmMDJkZjY5ODMzODU2ZTdjZjc0OTIwMTljYWQ2MjlkZWQ0OTAyOWMzZDBhN2NhZTUyNTE5YjBiIiwidGFnIjoiIn0%3D",
			Authorization: "Bearer " + token,
		},
		body: JSON.stringify(credentials),
	};

	const replyStore = async () => {
		// console.log(credentials);
		if (Object.keys(authInfo).length > 0) {
			let { ...indexOption } = requestOption;
			const response = await fetch(`${accessPoint}/reply`, {
				...indexOption,
				method: "POST",
			});

			const processQuery = await response.json();
			console.log(processQuery);
		} else {
			pleaseLogin();
		}
	};

	const configProps = {
		// Function
		replyStore,

		// State
		replyState,
	};

	return { ...configProps };
};

export default ReplyApi;
