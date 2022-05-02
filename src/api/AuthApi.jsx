import AlertMessage from "../components/toast/AlertMessage";
import useAuth from "../hooks/useAuth";
import { useForms } from "../hooks/useForms";

// Access Point Url
import { accessPoint } from "../constant/ApiHost";
import CheckAuth from "../auth/CheckAuth";

const AuthApi = () => {
	const { setAuthState, checkAuthState } = CheckAuth();
	const { loginSuccess, loginFailed } = AlertMessage();
	// Hook Imports Details
	const { authorize, unAuthorize } = useAuth();
	const { credentials } = useForms();

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

		// console.log(authResponse.body?.status);

		if (authResponse.body?.status == 200) {
			authorize(authResponse.body);
			loginSuccess();
		} else {
			loginFailed();
		}
	};

	const register = async () => {
		let { ...indexOption } = requestOption;

		const response = await fetch(`${accessPoint}/register`, {
			...indexOption,
			method: "POST",
		});

		const authResponse = await response.json();

		if (authResponse.body?.status == 200) {
			authorize(authResponse.body);
			loginSuccess();
		} else {
			loginFailed();
		}
	};

	const logout = async () => {
		let { body, ...indexOption } = requestOption;
		await fetch(`${accessPoint}/logout`, {
			...indexOption,
			method: "POST",
		});

		unAuthorize();
		setAuthState(false);
		checkAuthState();
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
