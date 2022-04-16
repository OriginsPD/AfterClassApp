import { createContext, useReducer } from "react";

const ACTION = {
	CHANGE: "switch theme",
};

const initialStateValue = {
	isDark: false,
	theme: {
		lightTheme: {
			text: "text-black",
			background: "bg-white",
			border: "border-gray-400",
			likeIcon: "text-blue-600/60",
		},

		darkTheme: {
			text: "text-white",
			background: "bg-gray-800",
			border: "border-white",
			likeIcon: "text-red-500",
		},
	},
};

const reducer = (state, action) => {
	switch (action.type) {
		case ACTION.CHANGE:
			return {
				...state,
				isDark: !initialStateValue.isDark,
			};
		default:
			return {
				...state,
			};
	}
};

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(reducer, initialStateValue);

	const toggleTheme = () => {
		dispatch({ type: ACTION.CHANGE });
	};

	const configProps = {
		// State
		...state,

		// Function
		toggleTheme,
	};

	return (
		<ThemeContext.Provider value={{ ...configProps }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeContextProvider;
