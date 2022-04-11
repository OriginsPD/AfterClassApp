import React from "react";
import { Outlet, useLocation, Navigate, useParams } from "react-router-dom";

// Pages Component For 3 Columns
import NavBar from "../components/routes/NavBar";
import ActionSection from "../components/forum/ActionSection";
import HistorySection from "../components/forum/HistorySection";

const HomeLayout = () => {
	const location = useLocation();
	const currentLocation = location?.pathname || "/";

	const widthScreen = [
		"/profile",
		"/dashboard",
		"/inbox",
		"/setting",
		"/createTread",
	];

	// console.log(currentLocation);
	return (
		<div>
			<div
				className="fixed top-0 left-0 h-full w-1/2 bg-white"
				aria-hidden="true"
			/>
			<div
				className="fixed top-0 right-0 h-full w-1/2 bg-gray-50"
				aria-hidden="true"
			/>
			<div className="relative flex min-h-full flex-col">
				{/* Navbar */}
				<NavBar />

				<div
					className={
						widthScreen.includes(currentLocation)
							? "flex-grow lg:flex xl:px-2"
							: "mx-auto w-full max-w-7xl flex-grow lg:flex xl:px-8"
					}
				>
					{/* Left sidebar & main wrapper */}
					<div className="min-w-0 flex-1 bg-white xl:flex">
						{/* Account Section */}

						{widthScreen.includes(currentLocation) ? null : <ActionSection />}

						{/* Projects List */}

						{/* <TreadSection /> */}
						<Outlet />
					</div>

					{/* Activity feed */}

					{widthScreen.includes(currentLocation) ? null : <HistorySection />}
				</div>
			</div>
		</div>
	);
};

export default HomeLayout;
