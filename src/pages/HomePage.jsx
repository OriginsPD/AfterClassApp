import { useState, useEffect } from "react";

import { Menu } from "@headlessui/react";

import {
	ChevronDownIcon,
	SortAscendingIcon,
	ChatAlt2Icon,
} from "@heroicons/react/solid";

import CardForum from "../components/forum/card/CardForum";

import DiscussionTopicApi from "../api/DiscussionTopicApi";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const Homepage = () => {
	const [isLike, setIsLike] = useState(false);

	const toggleIcon = () => {
		setIsLike(() => !isLike);
	};

	const cardConfig = {
		toggleIcon,
	};

	const { discussionIndex, discussionState } = DiscussionTopicApi();

	// Refresh Loads
	const [refresh, setRefresh] = useState(0);

	useEffect(() => {
		discussionIndex();
	}, [refresh]);

	// console.log(discussionState);

	return (
		<div className="h-screen overflow-y-auto bg-white scrollbar-hide lg:min-w-0 lg:flex-1">
			<div className="border-b border-t border-gray-200 pl-4 pr-6 pt-4 pb-4 sm:pl-6 lg:pl-8 xl:border-t-0 xl:pl-6 xl:pt-6">
				<div className="flex items-center">
					<h1 className="flex-1 text-lg font-medium">Latest Treads</h1>
					<Menu as="div" className="relative">
						<Menu.Button className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
							<SortAscendingIcon
								className="mr-3 h-5 w-5 text-gray-400"
								aria-hidden="true"
							/>
							Sort
							<ChevronDownIcon
								className="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400"
								aria-hidden="true"
							/>
						</Menu.Button>
						<Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
							<div className="py-1">
								<Menu.Item>
									{({ active }) => (
										<a
											href="#"
											className={classNames(
												active ? "bg-gray-100 text-gray-900" : "text-gray-700",
												"block px-4 py-2 text-sm"
											)}
										>
											Name
										</a>
									)}
								</Menu.Item>
								<Menu.Item>
									{({ active }) => (
										<a
											href="#"
											className={classNames(
												active ? "bg-gray-100 text-gray-900" : "text-gray-700",
												"block px-4 py-2 text-sm"
											)}
										>
											Date modified
										</a>
									)}
								</Menu.Item>
								<Menu.Item>
									{({ active }) => (
										<a
											href="#"
											className={classNames(
												active ? "bg-gray-100 text-gray-900" : "text-gray-700",
												"block px-4 py-2 text-sm"
											)}
										>
											Date created
										</a>
									)}
								</Menu.Item>
							</div>
						</Menu.Items>
					</Menu>
				</div>
			</div>
			{Object.keys(discussionState).length > 0 ? (
				discussionState.map((value) => (
					<div key={value.id} className="space-y-1 divide-y-2">
						<CardForum value={value} {...cardConfig} setRefresh={setRefresh} />
					</div>
				))
			) : (
				<div className="container m-5 mx-auto items-center justify-center text-center">
					<ChatAlt2Icon className="mx-auto h-12 w-12 text-gray-400" />
					<h3 className="mt-2 text-sm font-medium text-gray-900">No Treads</h3>
					<p className="mt-1 text-sm text-gray-500">
						Get started by creating a new tread.
					</p>
				</div>
			)}
		</div>
	);
};

export default Homepage;
