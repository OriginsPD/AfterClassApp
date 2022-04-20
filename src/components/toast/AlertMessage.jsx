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
			autoClose: 2500,
		});
	};
	const loginSuccess = () => {
		toast.success(`Welcome Back`, {
			bodyClassName: "px-5 text-sm text-gray-800",
			autoClose: 2500,
		});
	};
	const signUpFailed = () => {
		toast.warn("Something when wrong please try again", {
			bodyClassName: "px-5 text-sm text-gray-800",
			autoClose: 2500,
		});
	};

	const signUpSuccess = () => {
		toast.success(`Welcome`, {
			bodyClassName: "px-5 text-sm text-gray-800",
			autoClose: 2500,
		});
	};

	const CreatedSuccess = () => {
		toast.success(`Your Tread Was Created Successful`, {
			position: toast.POSITION.TOP_RIGHT,
			bodyClassName: "px-5 text-sm font-medium text-gray-800",
			className: "w-[320px] mt-8",
			autoClose: 2500,
		});
	};

	const CreatedFailed = () => {
		toast.error(`Your Tread Failed TO Be Created `, {
			position: toast.POSITION.TOP_RIGHT,
			bodyClassName: "px-5 text-sm font-medium text-gray-800",
			className: "w-[320px] mt-8",
			autoClose: 2500,
		});
	};

	const pleaseLogin = () => {
		toast.info(`Please Login or Sign Up Below Taking Action`, {
			position: toast.POSITION.TOP_RIGHT,
			bodyClassName: "px-5 text-sm font-medium text-gray-800",
			className: "w-[320px] mt-8",
			autoClose: 2000,
		});
	};

	const postDelete = () => {
		toast.success(`Post Delete Success`, {
			bodyClassName: "px-5 text-sm text-gray-800",
			autoClose: 2000,
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
		postDelete,
	};

	return { ...configProp };
};

export default AlertMessage;
