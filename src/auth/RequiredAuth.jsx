import { useLocation, Outlet, Navigate } from "react-router-dom";

const RequiredAuth = () => {
	const location = useLocation();

	let accessBoolean = localStorage.getItem("isAuth");
	let access = JSON.parse(accessBoolean);

	console.log(access);

	return access ? <Outlet /> : <Navigate to="/" state={{ from: location }} />;
};

export default RequiredAuth;
