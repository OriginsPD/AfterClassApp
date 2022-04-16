import { Link } from "react-router-dom";

import { PlusIcon } from "@heroicons/react/solid";

import { ChatAlt2Icon } from "@heroicons/react/outline";
import DiscussionTopicApi from "../api/DiscussionTopicApi";
import { useState } from "react";
import { useEffect } from "react";
import useAuth from "../hooks/useAuth";
import CardForum from "../components/forum/card/CardForum";

const DashboardPage = () => {
	const { authInfo } = useAuth();
	// Refresh Loads
	const [refresh, setRefresh] = useState(0);
	const [personalTreads, setPersonalTreads] = useState(false);

	const { discussionState, discussionIndex, discussionDelete } =
		DiscussionTopicApi();

	useEffect(() => {
		discussionIndex();
	}, [refresh]);

	const fillerPost = discussionState.filter((post, count) => {
		if (count < 3 && post.user_id == authInfo.id) {
			count++;
			return true;
		}
		return false;
	});

	// console.log(Object.keys(fillerPost).length);

	return (
		<div className="container m-5 h-[85vh] items-center justify-center  ">
			<div className="border-b border-gray-200 pb-5">
				<h3 className="text-lg font-medium leading-6 text-gray-900">
					Dashboard
				</h3>
				<p className="mt-2 max-w-4xl text-sm text-gray-500">
					Keep Track of all your post on your dashboard.
				</p>
			</div>

			{Object.keys(fillerPost).length ? (
				<div className="my-2">
					{discussionState
						.filter((post) => post.user_id === authInfo.id)
						.map((innerPost) => {
							return (
								<CardForum
									value={innerPost}
									setRefresh={setRefresh}
									destroy={discussionDelete}
								/>
							);
						})}
				</div>
			) : (
				<div className="flex h-[80%] items-center justify-center border border-dotted p-10 text-center">
					<div>
						<ChatAlt2Icon className="mx-auto h-20 w-20 text-gray-400" />
						<h3 className="mt-2 text-2xl font-medium text-gray-900">
							No Treads
						</h3>
						<p className="mt-1 text-xl text-gray-500">
							Get started by creating a new tread.
						</p>
						<div className="mt-6">
							<Link
								to="/createTread"
								className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
							>
								<PlusIcon className="-ml-1 mr-2 h-7 w-7" aria-hidden="true" />
								<span className="text-xl">New Discussion</span>
							</Link>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default DashboardPage;
