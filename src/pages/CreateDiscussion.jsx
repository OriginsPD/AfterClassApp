import DiscussionForm from "../components/config/DiscussionForm";
import { useForms } from "../hooks/useForms";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const CreateDiscussion = () => {
	const { discussionForm, schema, tags } = DiscussionForm();
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const { storeInfo } = useForms();

	// console.log(tags);

	return (
		<>
			<div className="w-screen border-b border-gray-200 py-4 px-3 pb-5 sm:flex sm:items-center sm:justify-between">
				<h3 className="text-lg font-medium leading-6 text-gray-900">
					Create New Discussion
				</h3>
				<div className="mt-3 flex items-center justify-center space-x-2 sm:mt-0 sm:ml-4">
					<div>
						<select
							id="location"
							name="location"
							className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
							defaultValue="Canada"
						>
							<option>United States</option>
							<option>Canada</option>
							<option>Mexico</option>
						</select>
					</div>

					<div>
						<button
							type="button"
							className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						>
							Share
						</button>
						<button
							type="button"
							className="ml-3 inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
						>
							Create
						</button>
					</div>
				</div>



			</div>
		</>
	);
};

export default CreateDiscussion;
