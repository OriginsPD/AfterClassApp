import { useReducer, useState } from "react";
import { createContext } from "react";
import useAuth from "../../hooks/useAuth";
// import useAuth from "../../hooks/useAuth";

export const FormContext = createContext();

//  Constant Actions
const ACTION = {
	UPDATE: "update_input",
	CHANGE: "form_mode_toggle",
	RESET: "reset_form",
	LOAD: "load_authInfo",
	SET_ID: "set_id",
	REPLY_ID: "reply_id",
	PROFILE: "upload image",
	UPDATE_TAG: "update_checkbox",
};

const initialStateValue = {
	// Default Form Details
	name: "",
	email: "",
	username: "",
	password: "",
	confirmPassword: "",
	image: "",
	about: "",

	// Id
	id: "",

	// Topic Form
	topic: "",

	// Category
	category: "",

	// Tag
	tag: "",

	// Reply TextArea
	content: "",
	replyId: "",

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
				about: action.about,
			};
		case ACTION.SET_ID:
			return {
				...state,
				id: action.value,
			};
		case ACTION.REPLY_ID:
			return {
				...state,
				replyId: action.value,
			};
		case ACTION.PROFILE:
			return {
				...state,
				image: action.payload,
			};
		case ACTION.UPDATE_TAG:
			return {
				...state,
				tag: action.payload,
			};

		default:
			return {
				...state,
			};
	}
};

const FormContextProvider = ({ children }) => {
	const { authInfo } = useAuth();
	const [credentials, dispatch] = useReducer(reducer, initialStateValue);

	const [arr, setArr] = useState([]);

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
		{
			name: "about",
			type: "textarea",
			label: "Tell Us About Your Self",
			value: credentials.about,
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
			name: "content",
			type: "text",
			label: "Content",
			value: credentials.content,
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

	const commentForm = [
		{
			name: "content",
			label: "Add your comment",
			value: credentials.content,
			select: false,
		},
	];

	// Function

	const storeInfo = (event) => {
		const { name, value } = event.target;
		dispatch({ type: ACTION.UPDATE, key: [name], value });
	};

	const storeInfoCheck = (event) => {
		// console.log(event.target.checked);
		const { name, value } = event.target;
		if (event.target.checked) {
			arr.push(value);
			// setArr((previousState) => arr.concat([value]));
			// setArr
		} else {
			setArr(arr.filter((tagId) => tagId !== value));
		}

		// console.log(arr);
		dispatch({ type: ACTION.UPDATE_TAG, payload: arr });
	};

	const loadInfo = (authInfo) => {
		// console.log(authInfo);
		dispatch({
			type: ACTION.LOAD,
			value: authInfo,
			about: authInfo.profile?.about,
		});
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
		commentForm,

		// Function
		storeInfoCheck,
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
