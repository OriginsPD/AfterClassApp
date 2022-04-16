import { useLocation, Outlet, Navigate } from "react-router-dom";
import AlertMessage from "../components/toast/AlertMessage";

const RequiredAuth = () => {
	const { pleaseLogin } = AlertMessage();
	const location = useLocation();

	let accessBoolean = localStorage.getItem("isAuth");
	let access = JSON.parse(accessBoolean);

	// console.log(access);

	return access ? (
		<Outlet />
	) : (
		(pleaseLogin(), (<Navigate to="/" state={{ from: location }} />))
	);
};

export default RequiredAuth;
