import { useEffect } from "react";
import { useReducer } from "react";
import useAuth from "../hooks/useAuth";

// Action
const ACTION = {
	LIKE: "like_post",
	UNLIKE: "unlike_post",
};

// State for Creating Like
const initialState = {
	id: 0,
	itemID: 0,
	itemTopic: "",
};

const reducer = (state, action) => {
	switch (action.type) {
		case ACTION.LIKE:
			return {
				...state,
				...action.payload,
			};
		case ACTION.UNLIKE: {
			return {
				...initialState,
			};
		}
		default:
			return {
				...state,
			};
	}
};

const LikeApi = () => {
	const { authInfo } = useAuth();

	// Hook Imports Details
	const [columnState, dispatch] = useReducer(reducer, initialState);

	// Access Point Url
	const accessPoint = "http://127.0.0.1:8000/api";

	// // Request Option
	// const requestOption = {
	// 	method: "",
	// 	headers: {
	// 		"content-Type": "application/json",
	// 		Accept: "application/json",
	// 	},
	// 	body: JSON.stringify(columnState),
	// };

	let requestOption = {};

	useEffect(() => {
		// Request Option
		requestOption = {
			method: "",
			headers: {
				"content-Type": "application/json",
				Accept: "application/json",
			},
			body: JSON.stringify(columnState),
		};
	}, [columnState]);

	const likeReply = async () => {
		// let { body, ...indexRequest } = requestOption;
		// const response = await fetch(`${accessPoint}/like`, {
		// 	...indexRequest,
		// 	method: "POST",
		// });
		// const query = await response.json();
		console.log(columnState);
		// console.log(query);
	};

	const likeDiscussion = async () => {
		let { ...indexOption } = requestOption;
		await fetch(`${accessPoint}/like`, {
			...indexOption,
			method: "POST",
		});
	};

	const configProps = {
		// Functional
		likeReply,

		// Actions
		...ACTION,

		// Dispatch Function
		dispatch,
	};

	return { ...configProps };
};

export default LikeApi;
