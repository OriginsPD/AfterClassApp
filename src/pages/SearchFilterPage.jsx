import { useReducer, useState, useEffect } from "react";

import { useParams } from "react-router-dom";

// Icons
import { ChatAlt2Icon, ChatAltIcon } from "@heroicons/react/solid";

import CardForum from "../components/forum/card/CardForum";

import DiscussionTopicApi from "../api/DiscussionTopicApi";
import MetronomeLoader from "../components/loaders/MetronomeLoader";
import { TabTitle } from "../components/gen/DocumentConfig";

const SearchFilterPage = () => {
	const { discussionIndex, discussionState, load } = DiscussionTopicApi();
	const filter = useParams();

	let name = filter.sort;

	let newName = name.charAt(0).toUpperCase() + name.slice(1);

	TabTitle(newName + " Search");

	// Refresh Loads
	const [refresh, setRefresh] = useState(0);

	useEffect(() => {
		discussionIndex();
	}, [refresh]);

	return (
		<div className=" bg-white lg:min-w-0 lg:flex-1">
			<div className="border-b border-t border-gray-200 pl-4 pr-6 pt-4 pb-4 sm:pl-6 lg:pl-8 xl:border-t-0 xl:pl-6 xl:pt-6">
				<div className="flex items-center">
					<h1 className="flex items-center justify-center text-lg font-medium capitalize">
						<ChatAltIcon className=" mr-2 h-6 w-6 text-blue-400" />
						{filter.sort} Treads
					</h1>
				</div>
			</div>
			{load === false || document.readyState == "interactive" ? (
				<MetronomeLoader />
			) : (
				<div className="h-screen overflow-y-auto scrollbar-hide ">
					{(Object.keys(discussionState).length > 0 &&
						Object.values(discussionState).filter(
							(value) => value.category.name == filter.name
						).length > 0) ||
					Object.values(discussionState).filter(
						(value) => value.user.username == filter.name
					).length > 0 ? (
						filter.sort === "category" ? (
							discussionState
								.filter((value) => value.category.name == filter.name)
								.map((value) => (
									<div key={value.id} className="space-y-1 divide-y-2">
										<CardForum value={value} setRefresh={setRefresh} />
									</div>
								))
						) : (
							discussionState
								.filter((value) => value.user.username == filter.name)
								.map((value) => (
									<div key={value.id} className="space-y-1 divide-y-2">
										<CardForum value={value} setRefresh={setRefresh} />
									</div>
								))
						)
					) : (
						<div className="flex h-[25rem] items-center justify-center">
							<div className="container m-5 mx-auto items-center justify-center text-center">
								<ChatAlt2Icon className="mx-auto h-12 w-12 text-gray-400" />
								<h3 className="mt-2 text-sm font-medium text-gray-900">
									No Treads
								</h3>
								<p className="mt-1 text-sm text-gray-500">
									Get started by creating a new tread.
								</p>
							</div>
						</div>
					)}
				</div>
			)}
		</div>
	);
};

export default SearchFilterPage;
