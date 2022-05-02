import { useEffect, useState } from "react";
// Check the Current State of the isAuth value in LocalStorage
const CheckAuth = () => {
	const [authState, setAuthState] = useState(null);

	const checkAuthState = () => {
		const authBoolean = localStorage.getItem("isAuth");
		setAuthState(() => JSON.parse(authBoolean));
	};

	useEffect(() => {
		const authBoolean = localStorage.getItem("isAuth");
		setAuthState(() => JSON.parse(authBoolean));
	}, []);

	useEffect(() => {
		const authBoolean = localStorage.getItem("isAuth");
		setAuthState(() => JSON.parse(authBoolean));
	}, [authState]);

	// console.log(authState);
	return { authState, setAuthState, checkAuthState };
};

export default CheckAuth;
