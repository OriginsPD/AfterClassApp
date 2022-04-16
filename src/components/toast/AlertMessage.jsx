import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAuth from "../../hooks/useAuth";

toast.configure();
const AlertMessage = () => {
	const { authInfo } = useAuth();

	// console.log(authInfo.username);

	const loginFailed = () => {
		toast.warn("Something when wrong please try again", {
			bodyClassName: "px-5 text-sm text-gray-800",
			autoClose: 4000,
		});
	};
	const loginSuccess = () => {
		toast.success(`Welcome Back`, {
			bodyClassName: "px-5 text-sm text-gray-800",
			autoClose: 4000,
		});
	};
	const signUpFailed = () => {
		toast.warn("Something when wrong please try again", {
			bodyClassName: "px-5 text-sm text-gray-800",
			autoClose: 4000,
		});
	};

	const signUpSuccess = (user) => {
		toast.success(`Welcome`, {
			bodyClassName: "px-5 text-sm text-gray-800",
			autoClose: 4000,
		});
	};

	const CreatedSuccess = () => {
		toast.success(`Your Tread Was Created Successful`, {
			position: toast.POSITION.TOP_RIGHT,
			bodyClassName: "px-5 text-sm font-medium text-gray-800",
			className: "w-[320px]",
			autoClose: 4000,
		});
	};

	const CreatedFailed = () => {
		toast.success(`Your Tread Was Created Successful`, {
			position: toast.POSITION.TOP_RIGHT,
			bodyClassName: "px-5 text-sm font-medium text-gray-800",
			className: "w-[320px]",
			autoClose: 4000,
		});
	};

	const pleaseLogin = () => {
		toast.info(`Please Login or Sign Up Below Taking Action`, {
			position: toast.POSITION.TOP_RIGHT,
			bodyClassName: "px-5 text-sm font-medium text-gray-800",
			className: "w-[320px]",
			autoClose: 4000,
		});
	};

	const configProp = {
		loginFailed,
		loginSuccess,
		signUpFailed,
		signUpSuccess,
		CreatedSuccess,
		CreatedFailed,
		pleaseLogin,
	};

	return { ...configProp };
};

export default AlertMessage;
