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
			Authorization: `Bearer ${token}`,
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
