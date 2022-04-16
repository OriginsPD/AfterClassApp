import React, { Suspense } from "react";
import { Outlet, useLocation, Navigate, useParams } from "react-router-dom";

// Pages Component For 3 Columns
import NavBar from "../components/routes/NavBar";
import ActionSection from "../components/forum/ActionSection";
import HistorySection from "../components/forum/HistorySection";
import { useForms } from "../hooks/useForms";
import { useEffect } from "react";
import { useContext } from "react";
import { ThemeContext } from "../components/context/ThemeContext";
import LoadingPage from "../pages/LoadingPage";

const HomeLayout = () => {
	const { isDark, theme } = useContext(ThemeContext);

	const currentTheme = isDark ? theme.darkTheme : theme.lightTheme;

	const { dispatch, REST } = useForms();
	const location = useLocation();
	const currentLocation = location?.pathname || "/";

	const widthScreen = [
		"/profile",
		"/dashboard",
		"/inbox",
		"/setting",
		"/createTread",
		"/members",
	];

	useEffect(() => {
		dispatch({ type: REST });
	}, [currentLocation]);

	// console.log(currentLocation);
	return (
		<div>
			<div
				className={`fixed top-0 left-0 h-full w-1/2 ${currentTheme.background}`}
				aria-hidden="true"
			/>
			<div
				className={`fixed top-0 right-0 h-full w-1/2 ${currentTheme.background}`}
				aria-hidden="true"
			/>
			<div className="relative flex min-h-full flex-col">
				{/* Navbar */}
				<NavBar />

				<div
					className={
						widthScreen.includes(currentLocation)
							? `mr-2 flex-grow ${currentTheme.background} lg:flex`
							: "mx-auto w-full max-w-7xl flex-grow lg:flex xl:px-8"
					}
				>
					{/* Left sidebar & main wrapper */}
					<div className={`${currentTheme.background} min-w-0 flex-1 xl:flex`}>
						{/* Account Section */}

						{widthScreen.includes(currentLocation) ? null : <ActionSection />}

						{/* Projects List */}

						{/* <TreadSection /> */}
						<Suspense fallback={<LoadingPage />}>
							<Outlet />
						</Suspense>
					</div>

					{/* Activity feed */}

					{widthScreen.includes(currentLocation) ? null : <HistorySection />}
				</div>
			</div>
		</div>
	);
};

export default HomeLayout;
