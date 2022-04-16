import React from "react";

const LoadingPage = () => {
	return (
		<div className="mx-auto mt-20 h-24 w-60 rounded-md border-2">
			<div className="flex h-full animate-pulse flex-row items-center justify-center space-x-5">
				<div className="h-12 w-12 rounded-full bg-gray-300 "></div>
				<div className="flex flex-col space-y-3">
					<div className="h-6 w-36 rounded-md bg-gray-300 "></div>
					<div className="h-6 w-24 rounded-md bg-gray-300 "></div>
				</div>
			</div>
		</div>
	);
};

export default LoadingPage;
