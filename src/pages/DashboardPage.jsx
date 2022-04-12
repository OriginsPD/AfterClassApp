import { Link } from "react-router-dom";

import { PlusIcon } from "@heroicons/react/solid";

import { ChatAlt2Icon } from "@heroicons/react/outline";

const DashboardPage = () => {
	return (
		<div className="container m-5 h-screen items-center justify-center border border-dotted text-center">
			<ChatAlt2Icon className="mx-auto h-12 w-12 text-gray-400" />
			<h3 className="mt-2 text-sm font-medium text-gray-900">No Treads</h3>
			<p className="mt-1 text-sm text-gray-500">
				Get started by creating a new tread.
			</p>
			<div className="mt-6">
				<Link
					to="/createTread"
					className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
				>
					<PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
					New Discussion
				</Link>
			</div>
		</div>
	);
};

export default DashboardPage;
