import useToken from "../hooks/useToken";

// Access Point Url
import { accessPoint } from "../constant/ApiHost";

const ViewApi = () => {
	const { token } = useToken();
	// Request Option
	const requestOption = {
		method: "",
		headers: {
			"content-Type": "application/json",
			Accept: "application/json",
			Authorization: `Bearer ${token}`,
		},
	};

	const viewCount = async (id) => {
		const response = await fetch(`${accessPoint}/viewCount/${id}`, {
			...requestOption,
			method: "GET",
		});

		const queryResponse = await response.json();

		// console.log(queryResponse);
	};

	return { viewCount };
};

export default ViewApi;
