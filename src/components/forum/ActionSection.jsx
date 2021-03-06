import {
	CollectionIcon,
	ClipboardIcon,
	TrendingUpIcon,
	CheckCircleIcon,
	ExclamationCircleIcon,
	UserGroupIcon,
	GlobeIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import { useEffect } from "react";

import { Link } from "react-router-dom";
import DiscussionTopicApi from "../../api/DiscussionTopicApi";

// Authentication
import useAuth from "../../hooks/useAuth";

const ActionSection = () => {
	const [status, setStatus] = useState();
	// Authenitcation Information
	const { authInfo, isAuth } = useAuth();

	const { discussionState, discussionIndex } = DiscussionTopicApi();

	useEffect(() => {
		discussionIndex();
	}, []);

	const fillerPost = discussionState.filter((post, count) => {
		if (count < 3 && post.user_id == authInfo.id) {
			count++;
			return true;
		}
		return false;
	});

	// const authState = 0;

	return (
		<div className="sticky top-0 h-[95vh] bg-white sm:h-full lg:w-64 lg:flex-shrink-0 lg:border-r lg:border-gray-200">
			<div className="sticky top-0 py-6 pl-4 pr-6 sm:pl-6 lg:pl-8 xl:pl-0">
				<div className="flex items-center justify-between">
					<div className="flex-1 space-y-8">
						<div className="space-y-8 sm:flex-col sm:items-center sm:justify-between sm:space-y-2 lg:block lg:space-y-8">
							{isAuth ? (
								<>
									{/* Profile */}
									<div className="flex items-center space-x-3">
										<div className="h-12 w-12 flex-shrink-0">
											<img
												className="h-12 w-12 rounded-full"
												src={
													authInfo?.username
														? `https://ui-avatars.com/api/?background=random&color=fff&name=${authInfo.username}`
														: " data:image/jpeg;base64,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"
												}
												alt=""
											/>
										</div>

										<div className="space-y-1">
											<div className="text-sm font-medium text-gray-900">
												{authInfo.username}
											</div>
											<div className="flex items-center space-x-2">
												<span className="text-xs font-medium italic text-gray-800">
													{authInfo.email}
												</span>
											</div>
										</div>
									</div>
								</>
							) : null}

							{/* Action buttons */}
							<div className=" flex flex-col sm:flex-row lg:flex-col">
								<Link
									to="/createTread"
									className="group inline-flex items-center justify-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 group-hover:bg-blue-700 lg:w-full"
								>
									<ClipboardIcon className="mr-1 h-5 w-5 text-white group-hover:animate-pulse" />
									New Discussion
								</Link>
								<Link
									to="/members"
									className="mt-3 inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 lg:ml-0 lg:mt-3 lg:w-full"
								>
									<UserGroupIcon className="mr-1 h-5 w-5  text-gray-700 group-hover:animate-ping group-hover:text-green-400" />
									Users
								</Link>

								<Link
									to="/treads/sort/popular"
									className="group mt-3 inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 lg:ml-0 lg:mt-3 lg:w-full"
								>
									<TrendingUpIcon className="mr-1 h-5 w-5 text-gray-700  group-hover:text-red-600 " />
									Popular
								</Link>
								<Link
									to="/treads/sort/solved"
									className="group mt-3 inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 lg:ml-0 lg:mt-3 lg:w-full"
								>
									<CheckCircleIcon className="mr-1 h-5 w-5  text-gray-700  group-hover:text-green-400" />
									Solved
								</Link>
							</div>

							{/* */}
						</div>

						{isAuth ? (
							<>
								{/* Meta info */}
								<div className="flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-8 lg:flex-col lg:space-x-0 lg:space-y-6">
									<div className="flex items-center space-x-2">
										<CollectionIcon
											className="h-5 w-5 text-gray-400"
											aria-hidden="true"
										/>
										<span className="text-sm font-medium text-gray-500">
											{Object.keys(fillerPost).length} Treads
										</span>
									</div>
								</div>
							</>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ActionSection;
