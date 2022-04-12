import useAuth from "../hooks/useAuth";
import useToken from "../hooks/useToken";

// Action
const ACTION = {
	LIKE: "like_post",
	UNLIKE: "unlike_post",
};

const LikeApi = () => {
	const { authInfo } = useAuth();
	const { token } = useToken();

	// State for Creating Like
	const initialState = {
		id: 0,
		itemID: 0,
		itemTopic: "",
	};

	// Access Point Url
	const accessPoint = "http://127.0.0.1:8000/api";

	// Request Option
	const requestOption = {
		method: "",
		headers: {
			"content-Type": "application/json",
			Accept: "application/json",
			Authorization: `Bearer ${token}`,
		},
		body: JSON.stringify(),
	};

	const like = async (id, item) => {
		let { ...newState } = initialState;
		let { ...indexRequest } = requestOption;
		const response = await fetch(`${accessPoint}/like`, {
			...indexRequest,
			method: "POST",
			body: JSON.stringify({
				...newState,
				id: authInfo.id,
				itemID: id,
				itemTopic: item,
			}),
		});

		// let { ...newState } = initialState;

		console.log(item);
	};

	const unLike = async (id, item) => {
		let { ...newState } = initialState;
		let { ...indexRequest } = requestOption;
		await fetch(`${accessPoint}/unLike`, {
			...indexRequest,
			method: "POST",
			body: JSON.stringify({
				...newState,
				id: authInfo.id,
				itemID: id,
				itemTopic: item,
			}),
		});
		// console.log(authInfo.id);
	};

	const configProps = {
		// Functional
		like,
		unLike,

		// Actions
		...ACTION,
	};

	return { ...configProps };
};

export default LikeApi;
