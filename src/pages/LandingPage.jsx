import { ChatAlt2Icon } from "@heroicons/react/solid";
import { useState, useEffect } from "react";
import DiscussionTopicApi from "../api/DiscussionTopicApi";
import CardForum from "../components/forum/card/CardForum";

const posts = [
	{
		title: "Boost your conversion rate",
		href: "#",
		category: {
			name: "Article",
			href: "#",
			color: "bg-indigo-100 text-indigo-800",
		},
		description:
			"Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
		date: "Mar 16, 2020",
		datetime: "2020-03-16",
		author: {
			name: "Paul York",
			href: "#",
			imageUrl:
				"https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
		readingTime: "6 min",
	},
	{
		title: "How to use search engine optimization to drive sales",
		href: "#",
		category: { name: "Video", href: "#", color: "bg-pink-100 text-pink-800" },
		description:
			"Nullam risus blandit ac aliquam justo ipsum. Quam mauris volutpat massa dictumst amet. Sapien tortor lacus arcu.",
		date: "Mar 10, 2020",
		datetime: "2020-03-10",
		author: {
			name: "Dessie Ryan",
			href: "#",
			imageUrl:
				"https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
		readingTime: "4 min",
	},
	{
		title: "Improve your customer experience",
		href: "#",
		category: {
			name: "Case Study",
			href: "#",
			color: "bg-green-100 text-green-800",
		},
		description:
			"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab iure iusto fugiat commodi sequi.",
		date: "Feb 12, 2020",
		datetime: "2020-02-12",
		author: {
			name: "Easer Collins",
			href: "#",
			imageUrl:
				"https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
		readingTime: "11 min",
	},
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const LandingPage = () => {
	const { discussionIndex, load, discussionState } = DiscussionTopicApi();
	const [profession, setProfession] = useState([]);
	const [discussion, setDiscussion] = useState([]);

	// Refresh Loads
	const [refresh, setRefresh] = useState(0);

	useEffect(() => {
		discussionIndex();
	}, [refresh]);

	useEffect(() => {
		setDiscussion(discussionState.slice(0, 4));
	}, [discussionState]);

	console.log(discussion);

	return (
		<div className="w-screen bg-gray-50">
			<div className="relative overflow-hidden">
				<div className="absolute inset-y-0 h-full w-full" aria-hidden="true">
					<div className="relative h-full">
						<svg
							className="absolute right-full translate-y-1/3 translate-x-1/4 transform animate-spin text-blue-600 sm:translate-x-1/2 md:translate-y-1/2 lg:translate-x-full"
							width={404}
							height={784}
							fill="none"
							viewBox="0 0 404 784"
						>
							<defs>
								<pattern
									id="e229dbec-10e9-49ee-8ec3-0286ca089edf"
									x={0}
									y={0}
									width={20}
									height={20}
									patternUnits="userSpaceOnUse"
								>
									<rect
										x={0}
										y={0}
										width={4}
										height={4}
										className="text-gray-200"
										fill="currentColor"
									/>
								</pattern>
							</defs>
							<rect
								width={404}
								height={784}
								fill="url(#e229dbec-10e9-49ee-8ec3-0286ca089edf)"
							/>
						</svg>
						<svg
							className="absolute left-full -translate-y-3/4 -translate-x-1/4 transform sm:-translate-x-1/2 md:-translate-y-1/2 lg:-translate-x-3/4"
							width={404}
							height={784}
							fill="none"
							viewBox="0 0 404 784"
						>
							<defs>
								<pattern
									id="d2a68204-c383-44b1-b99f-42ccff4e5365"
									x={0}
									y={0}
									width={20}
									height={20}
									patternUnits="userSpaceOnUse"
								>
									<rect
										x={0}
										y={0}
										width={4}
										height={4}
										className="text-gray-200"
										fill="currentColor"
									/>
								</pattern>
							</defs>
							<rect
								width={404}
								height={784}
								fill="url(#d2a68204-c383-44b1-b99f-42ccff4e5365)"
							/>
						</svg>
					</div>
				</div>

				<div className="relative pt-6 pb-16 sm:pb-24">
					<div className="mx-auto mt-16 max-w-7xl px-4 sm:mt-24 sm:px-6">
						<div className="text-center">
							<h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-5xl">
								<span className="block capitalize">
									Learning doesn't have to end after the bell
								</span>
								<span className="block text-blue-800">
									Let Keep the Discussion going
								</span>
							</h1>
							<p className="mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:max-w-sm md:text-xl">
								Your All in One Location for all your learning needs. For
								Student and Teachers.
							</p>
						</div>
					</div>
				</div>

				<div className="relative">
					<div className="absolute inset-0 flex flex-col" aria-hidden="true">
						<div className="flex-1" />
						<div className="w-full flex-1 bg-gradient-to-t from-white via-blue-800 to-blue-800" />
					</div>
					<div className="mx-auto w-screen px-4 sm:px-6">
						<img
							className="relative rounded-lg shadow-lg"
							src="https://i.ibb.co/85qGrbf/Screenshot-523.png"
							alt="App screenshot"
						/>
					</div>
				</div>
			</div>
			<div className="bg-blue-800 px-4 pt-16 pb-20 sm:px-6 lg:px-8 lg:pt-24 lg:pb-28">
				<div className="relative mx-auto max-w-lg divide-y-2 divide-gray-200 py-2 lg:max-w-7xl">
					<div>
						<h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-6xl">
							Recent Discussion Topics
						</h2>
						<p className="mt-3 text-xl font-semibold text-white sm:mt-4">
							Don't be shy, share your thoughts with the class. learn and share
							though with other members.
						</p>
					</div>
					<div className="mt-12 grid gap-12 pt-12 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
						{Object.keys(discussion).length > 0 ? (
							discussion.map((value) => (
								<div
									key={value.id}
									className="space-y-1 overflow-hidden rounded-2xl bg-white py-2 shadow-md"
								>
									<CardForum value={value} setRefresh={setRefresh} />
								</div>
							))
						) : (
							<div className="container col-span-full m-5 mx-auto items-center justify-center text-center">
								<ChatAlt2Icon className="mx-auto h-12 w-12 text-white" />
								<h3 className="mt-2 text-xl font-medium text-white">
									No Treads
								</h3>
								<p className="mt-1 text-sm text-white">
									Get started by creating a new tread.
								</p>
							</div>
						)}
					</div>
				</div>
			</div>
			<div className="bg-white">
				<div className="mx-auto max-w-7xl py-16 px-4 sm:px-6 lg:px-8">
					<div className="overflow-hidden rounded-lg bg-blue-800 shadow-xl lg:grid lg:grid-cols-2 lg:gap-4">
						<div className="px-6 pt-10 pb-12 sm:px-16 sm:pt-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
							<div className="lg:self-center">
								<h2 className="text-3xl font-extrabold text-white sm:text-4xl">
									<span className="block">Ready to take a seat?</span>
									<span className="block">Join for free today.</span>
								</h2>
								<p className="mt-4 text-lg leading-6 text-indigo-200">
									Don't waste time browser for any answer join the class and
									raise a hand.
								</p>
								<a
									href="#"
									className="mt-8 inline-flex items-center rounded-md border border-transparent bg-white px-5 py-3 text-base font-medium text-indigo-600 shadow hover:bg-indigo-50"
								>
									Sign up for free
								</a>
							</div>
						</div>
						<div className="aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1 -mt-6">
							<img
								className="translate-x-6 translate-y-6 transform rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
								src="https://i.ibb.co/FK3d1Nk/Screenshot-525.png"
								alt="App screenshot"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default LandingPage;
