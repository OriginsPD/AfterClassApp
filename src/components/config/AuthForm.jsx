// Hooks
import { useForms } from "../../hooks/useForms";
import useToggle from "../../hooks/useToggle";
import { useAuthApi } from "../../hooks/useAuthApi";

import * as yup from "yup";

const loginSchema = yup.object({
	email: yup.string().email().required("Email is Required"),
	password: yup
		.string()
		.min(4, "Password must be 4 characters or more")
		.max(8, "Password Limit is 8 characters")
		.required("Password is Required"),
});

const signUpSchema = yup.object({
	username: yup.string().required("Username is required"),
	email: yup.string().email().required("Email is required"),
	password: yup
		.string()
		.min(4, "Password must be 4 characters or more")
		.max(8, "Password Limit is 8 characters")
		.required("Password is Required"),
	confirmPassword: yup.string().oneOf([yup.ref("password"), null]),
});

const AuthForm = () => {
	// Hooks
	const { loginForm, signUpForm, dispatch, credentials, CHANGE } = useForms();

	const { login, register } = useAuthApi();

	const { isOpen, toggleModal } = useToggle();

	// Schema
	const schema = credentials.mode ? loginSchema : signUpSchema;

	// Form Personalization Details
	const formBody = credentials.mode ? loginForm : signUpForm;
	const formSubmit = credentials.mode ? login : register;
	const formLabel = {
		name: credentials.mode ? "Login" : "Register",
		button: credentials.mode ? "Login" : "Register now",
	};

	// Toggle Function For Form Mode
	const loginToggle = () => {
		dispatch({ type: CHANGE, payload: true });
		toggleModal();
	};

	const signUpToggle = () => {
		dispatch({ type: CHANGE, payload: false });
		toggleModal();
	};

	// Exporting Function and States
	const defaultProps = {
		// Form Details
		formBody,
		formLabel,
		formSubmit,

		// Schema
		schema,

		// Props for functionality
		show: isOpen,
		toggle: toggleModal,

		// Toggle For Form Type
		loginToggle,
		signUpToggle,
	};

	return { defaultProps };
};

export default AuthForm;
