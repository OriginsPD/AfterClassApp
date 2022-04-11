import { useEffect, useState } from "react";
// Check the Current State of the isAuth value in LocalStorage
const CheckAuth = () => {
	const [authState, setAuthState] = useState();

	useEffect(() => {
		const authBoolean = localStorage.getItem("isAuth");
		setAuthState(() => authBoolean);
	}, [authState]);

	// console.log(authState);
	return { authState };
};

export default CheckAuth;
