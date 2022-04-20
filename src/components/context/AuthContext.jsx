import { createContext, useReducer, useEffect } from "react";

export const AuthContext = createContext();

// Constant with Default Action
const ACTION = {
	AUTHORIZE: "auth",
	REAUTHORIZE: "reload-auth",
	UNAUTHORIZE: "unAuth",
	UPDATE_AUTHORIZE: "updateAuthInfo",
};

const initialState = {
	token: 0,
	authInfo: {},
	isAuth: false,
};

const reducer = (state, action) => {
	switch (action.type) {
		case ACTION.AUTHORIZE:
			return {
				...state,
				isAuth: true,
				token: action.payload.token,
				authInfo: action.payload.authInfo,
			};
		case ACTION.REAUTHORIZE:
			return {
				...state,
				token: action.payload.token,
				isAuth: action.payload.isAuth,
				authInfo: action.payload.authInfo,
			};
		case ACTION.UPDATE_AUTHORIZE:
			return {
				...state,
				authInfo: action.payload.authInfo,
				...state.token,
			};
		case ACTION.UNAUTHORIZE:
			return {
				...initialState,
			};

		default:
			return {
				...state,
			};
	}
};

// Stores users information in storage
const localLog = ({ token, authInfo, isAuth }) => {
	localStorage.setItem("token", JSON.stringify(token));
	localStorage.setItem("isAuth", JSON.stringify(isAuth));
	localStorage.setItem("authInfo", JSON.stringify({ ...authInfo }));
};

const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialState);

	// Authorize User
	const authorize = ({ token, authInfo }) => {
		dispatch({ type: ACTION.AUTHORIZE, payload: { token, authInfo } });
	};

	// Reauthorize When Page Reloads
	const reAuthorize = () => {
		const tokenString = localStorage.getItem("token");
		const token = tokenString ? JSON.parse(tokenString) : null;

		const authString = localStorage.getItem("authInfo");
		const authInfo = authString ? JSON.parse(authString) : {};

		const authStateString = localStorage.getItem("isAuth");
		const isAuth = tokenString ? JSON.parse(authStateString) : false;

		const authorizeInfo = {
			token,
			isAuth,
			authInfo,
		};

		dispatch({ type: ACTION.REAUTHORIZE, payload: { ...authorizeInfo } });
	};

	// Update Authorize User
	const updateAuthorize = ({ authInfo }) => {
		dispatch({ type: ACTION.UPDATE_AUTHORIZE, payload: { authInfo } });
	};

	// Unauthorize when user logout
	const unAuthorize = () => {
		dispatch({ type: ACTION.UNAUTHORIZE });
		localStorage.removeItem("token");
		localStorage.removeItem("isAuth");
		localStorage.removeItem("authInfo");
	};

	const configProps = {
		authorize: authorize,
		reAuthorize: reAuthorize,
		updateAuthorize: updateAuthorize,
		unAuthorize: unAuthorize,
		...state,
	};

	useEffect(() => {
		state.token !== 0 ? localLog({ ...state }) : reAuthorize();
	}, [state.token && state.authInfo]);

	return (
		<AuthContext.Provider value={{ ...configProps }}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContextProvider;
