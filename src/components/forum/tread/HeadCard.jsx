import { TagIcon } from "@heroicons/react/outline";

const HeadCard = ({ discussionState }) => {
	// console.log(discussionState);
	return (
		<>
			{discussionState.map((items) => (
				<div
					key={items.id}
					className="mx-auto max-w-2xl rounded-lg bg-white px-8 py-4 shadow-md "
				>
					<div className="flex items-center justify-between">
						<span className="text-sm font-light text-gray-600 ">
							{new Date(items.created_at).toLocaleDateString("Jamaica", {
								month: "long",
								day: "2-digit",
								year: "2-digit",
							})}
						</span>

						<div className="transform cursor-pointer rounded bg-gray-600 px-3 py-1 text-sm font-bold text-gray-100 transition-colors duration-200 hover:bg-gray-500">
							{items.topic.name}
						</div>
					</div>

					<div className="mt-2">
						<div className="text-2xl font-bold text-gray-700 hover:text-gray-600  ">
							{items.name}
						</div>
						<p className="mt-2 text-gray-600 ">{items.content}</p>
					</div>

					<div className="my-4 grid grid-cols-3 gap-2">
						{items.discussion_tags.map((innerVal) => (
							<div
								key={innerVal.id}
								className="leading-sm ml-4 inline-flex items-center rounded-full border bg-white px-3 py-1 text-xs font-bold uppercase text-gray-700"
							>
								<TagIcon className="mr-2 h-4 w-4 " />
								{innerVal.tag.name}
							</div>
						))}
					</div>

					<div className="mt-4 flex items-center justify-end">
						<div className="flex items-center">
							<img
								className="mx-4 hidden h-10 w-10 rounded-full object-cover sm:block"
								src="https://images.unsplash.com/photo-1502980426475-b83966705988?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=40&q=80"
								alt="avatar"
							/>
							<a className="cursor-pointer font-bold text-gray-700 ">
								{items.user.username}
							</a>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default HeadCard;
