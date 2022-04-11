import useAuth from "../hooks/useAuth";
import { useForms } from "../hooks/useForms";

const AuthApi = () => {
	// Hook Imports Details
	const { authorize, unAuthorize } = useAuth();
	const { credentials } = useForms();

	// Access Point Url
	const accessPoint = "http://127.0.0.1:8000/api";

	// Request Option
	const requestOption = {
		method: "",
		headers: {
			"content-Type": "application/json",
			Accept: "application/json",
		},
		body: JSON.stringify(credentials),
	};

	const login = async () => {
		let { ...indexOption } = requestOption;
		const response = await fetch(`${accessPoint}/login`, {
			...indexOption,
			method: "POST",
		});

		const authResponse = await response.json();

		console.log(authResponse.body);

		authorize(authResponse.body);
	};

	const register = async () => {
		let { ...indexOption } = requestOption;
		const response = await fetch(`${accessPoint}/register`, {
			...indexOption,
			method: "POST",
		});

		const authResponse = await response.json();

		authorize(authResponse.body);
	};

	const logout = async () => {
		let { body, ...indexOption } = requestOption;
		await fetch(`${accessPoint}/logout`, {
			...indexOption,
			method: "POST",
		});

		unAuthorize();
	};

	const configProps = {
		// Function
		login,
		logout,
		register,
	};

	return { ...configProps };
};

export default AuthApi;
