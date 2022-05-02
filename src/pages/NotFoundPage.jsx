import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

import { TabTitle } from "../components/gen/DocumentConfig";

const NotFoundPage = () => {
	TabTitle("Not Found");
	const location = useLocation();
	const navigation = useNavigate();
	const from = location?.pathname || "/";

	console.log(from);

	return (
		<div className="flex flex-col-reverse items-center justify-center gap-16 px-4 py-24 md:gap-28 md:py-20 md:px-44 lg:flex-row lg:px-24 lg:py-24">
			<div className="relative w-full pb-12 lg:pb-0 xl:w-1/2 xl:pt-24">
				<div className="relative">
					<div className="absolute">
						<div className="">
							<h1 className="my-2 text-2xl font-bold text-gray-800">
								Looks like you've found the doorway to the great nothing
							</h1>
							<p className="my-8 text-gray-800">
								Sorry about that! Please visit our hompage to get where you need
								to go.
							</p>
							<Link
								to="/"
								className="md mt-8 rounded border bg-indigo-600 py-4 px-8 text-center text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50 sm:w-full lg:w-auto"
							>
								Take me there!
							</Link>
						</div>
					</div>
					<div>
						<img src="https://i.ibb.co/G9DC8S0/404-2.png" />
					</div>
				</div>
			</div>
			<div>
				<img src="https://i.ibb.co/ck1SGFJ/Group.png" />
			</div>
		</div>
	);
};

export default NotFoundPage;
