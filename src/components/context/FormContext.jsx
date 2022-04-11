import { useReducer } from "react";
import { createContext } from "react";
// import useAuth from "../../hooks/useAuth";

export const FormContext = createContext();

//  Constant Actions
const ACTION = {
	UPDATE: "update_input",
	CHANGE: "form_mode_toggle",
	RESET: "reset_form",
	LOAD: "load_authInfo",
	SET_ID: "set_id",
};

const initialStateValue = {
	// Default Form Details
	name: "",
	email: "",
	username: "",
	password: "",
	confirmPassword: "",

	// Id
	id: "",

	// Topic Form
	topic: "",

	// Category
	category: "",

	// Tag
	tag: "",

	// Reply TextArea
	comment: "",

	//  Form Type
	mode: false,
};

//  Reducer Functions
const reducer = (state, action) => {
	switch (action.type) {
		case ACTION.UPDATE:
			return {
				...state,
				[action.key]: action.value,
			};
		case ACTION.CHANGE:
			return {
				...state,
				mode: action.payload,
			};
		case ACTION.RESET:
			return {
				...initialStateValue,
			};
		case ACTION.LOAD:
			return {
				...state,
				...action.value,
			};
		case ACTION.SET_ID:
			return {
				...state,
				id: action.value,
			};
		default:
			return {
				...state,
			};
	}
};

const FormContextProvider = ({ children }) => {
	const [credentials, dispatch] = useReducer(reducer, initialStateValue);
	// const { authInfo } = useAuth();

	const loginForm = [
		{
			name: "email",
			type: "text",
			label: "Email",
			value: credentials.email,
			select: false,
		},
		{
			name: "password",
			type: "password",
			label: "Password",
			value: credentials.password,
			select: false,
		},
	];

	const signUpForm = [
		{
			name: "username",
			type: "text",
			label: "Username",
			value: credentials.username,
			select: false,
		},
		{
			name: "email",
			type: "text",
			label: "Email",
			value: credentials.email,
			select: false,
		},
		{
			name: "password",
			type: "password",
			label: "Password",
			value: credentials.password,
			select: false,
		},
		{
			name: "confirmPassword",
			type: "password",
			label: "Password Confirmation",
			value: credentials.confirmPassword,
			select: false,
		},
	];

	const profileForm = [
		{
			name: "username",
			type: "text",
			label: "Username",
			value: credentials.username,
			select: false,
		},
		{
			name: "email",
			type: "text",
			label: "Email",
			value: credentials.email,
			select: false,
		},
	];

	const discussionForm = [
		{
			name: "name",
			type: "text",
			label: "Discussion Name",
			value: credentials.name,
			select: false,
		},
		{
			name: "topic",
			type: "select",
			label: "Topic",
			value: credentials.topic,
			select: true,
		},
		{
			name: "category",
			type: "select",
			label: "Category",
			value: credentials.category,
			select: true,
		},
		{
			name: "tag",
			type: "select",
			label: "Tags",
			value: credentials.tag,
			select: true,
		},
	];

	// Function

	const storeInfo = (event) => {
		const { name, value } = event.target;
		dispatch({ type: ACTION.UPDATE, key: [name], value });
	};

	const loadInfo = (authInfo) => {
		// console.log(authInfo);
		dispatch({ type: ACTION.LOAD, value: authInfo });
	};

	const defaultProps = {
		// State & Dispatch
		credentials,
		dispatch,

		// Forms
		loginForm,
		signUpForm,
		profileForm,
		discussionForm,

		// Function
		storeInfo,
		loadInfo,

		// Action Object for dispatch
		...ACTION,
	};

	// console.log(credentials);

	return (
		<FormContext.Provider value={{ ...defaultProps }}>
			{children}
		</FormContext.Provider>
	);
};

export default FormContextProvider;
