const useToken = () => {
	const tokenString = localStorage.getItem("token");
	const token = tokenString ? JSON.parse(tokenString) : null;

	return { token };
};

export default useToken;
