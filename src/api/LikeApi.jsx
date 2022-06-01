import useAuth from "../hooks/useAuth";
import useToken from "../hooks/useToken";

// Access Point Url
import { accessPoint } from "../constant/ApiHost";

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

		// console.log(item);
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
