import { useForm } from "react-hook-form";
import { useForms } from "../hooks/useForms";
import { yupResolver } from "@hookform/resolvers/yup";
import DiscussionForm from "../components/config/DiscussionForm";
import DiscussionTopicApi from "../api/DiscussionTopicApi";
import { useEffect } from "react";
import { TabTitle } from "../components/gen/DocumentConfig";

const CreateDiscussion = () => {
	TabTitle("Create New Discussion Tread");
	const { storeInfo, storeInfoCheck, RESET, dispatch } = useForms();
	const { formSubmit, discussionForm, schema, tags, topics, category } =
		DiscussionForm();
	const {
		handleSubmit,
		register,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const selectOption = ["Topic", "Category"];

	const onSubmit = () => {
		formSubmit();
		dispatch({ type: RESET });
	};

	return (
		<>
			<div className="h-[90vh] w-screen divide-y divide-gray-200 overflow-hidden overflow-y-auto rounded-lg bg-white shadow scrollbar-hide">
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="px-4 py-5 sm:px-6">
						<div className="border-b border-gray-200 py-4 px-3 pb-5 sm:flex sm:items-center sm:justify-between">
							<h3 className="text-lg font-medium leading-6 text-gray-900">
								Create New Discussion
							</h3>
							<div className="mt-3 flex items-center justify-center space-x-2 sm:mt-0 sm:ml-4">
								{discussionForm.map((items) =>
									items.select ? (
										<div key={items.id} className="col-span-6 sm:col-span-6">
											{selectOption.includes(items.label) ? (
												<>
													<select
														// multiple={items.label === "Tags" ? true : null}
														{...register(items.name)}
														onChange={storeInfo}
														defaultValue=""
														className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
													>
														<option value="" disabled>
															Please Select A {items.label}
														</option>
														{items.label === "Topic"
															? topics.map((innerTopic) => (
																	<option value={innerTopic.id}>
																		{innerTopic.name}
																	</option>
															  ))
															: category.map((innerTopic) => (
																	<option value={innerTopic.id}>
																		{innerTopic.name}
																	</option>
															  ))}
													</select>
												</>
											) : null}
										</div>
									) : null
								)}
								<div>
									<button
										onClick={() => dispatch({ type: RESET })}
										type="button"
										className="inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
									>
										Clear
									</button>
									<button
										type="submit"
										className="ml-3 inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
									>
										Create
									</button>
								</div>
							</div>
						</div>
						{/* We use less vertical padding on card headers on desktop than on body sections */}
					</div>
					<div className="mx-auto max-w-screen-xl  items-center justify-center space-y-2 rounded-t-lg bg-gray-100 py-5 px-4 sm:p-6">
						{discussionForm.map((itemName) => {
							return itemName.label == "Discussion Name" ? (
								<div key={itemName.label} className="mb-4">
									<label
										htmlFor={itemName.name}
										className="block text-sm font-medium text-gray-700"
									>
										{itemName.label}
									</label>
									<div className="mt-1">
										<input
											type={itemName.type}
											{...register(itemName.name)}
											onChange={storeInfo}
											className="block w-6/12 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
											placeholder="Name Your Discussion Tread"
										/>
									</div>
								</div>
							) : null;
						})}
						{discussionForm.map((textItem) => {
							return textItem.name === "content" ? (
								<div key={`${textItem.id}-content`}>
									<div>
										<label
											htmlFor={textItem.name}
											className="block text-sm font-medium text-gray-700"
										>
											Add your content
										</label>
										<div className="mt-1">
											<textarea
												rows={7}
												{...register(textItem.name)}
												onChange={storeInfo}
												className="block w-full resize-none rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
												value={textItem.value}
											/>
										</div>
									</div>
								</div>
							) : null;
						})}
						<div>
							<div className="py-2 text-lg font-medium text-gray-900">Tags</div>
							<div className="mt-4 divide-y divide-gray-200 border-t border-b border-gray-200">
								{discussionForm.map((innerTags) => {
									return innerTags.label === "Tags" ? (
										<div
											key={`${innerTags.label}-tags`}
											className="relative h-56 flex-col items-start overflow-y-auto px-4 py-4 scrollbar-hide"
										>
											{tags.map((innerVal) => {
												return (
													<div
														key={`${innerVal.id}-checkbox`}
														className="flex space-y-2 "
													>
														<div className="min-w-0 flex-1 text-sm">
															<label
																htmlFor={innerTags.name}
																className="select-none font-medium text-gray-700"
															>
																{innerVal.name}
															</label>
														</div>
														<div className="ml-3 flex h-5 items-center">
															<input
																{...register(innerTags.name)}
																type="checkbox"
																onClick={storeInfoCheck}
																value={innerVal.id}
																className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
															/>
														</div>
													</div>
												);
											})}
										</div>
									) : null;
								})}
							</div>
						</div>
					</div>
				</form>
				{Object.keys(errors).length === 0 ? null : (
					<div className="mt-4 rounded-md bg-red-50 p-4">
						<div className="flex">
							<div className="flex-shrink-0">
								<svg
									className="h-5 w-5 text-red-400"
									xmlns="http://www.w3.org/2000/svg"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true"
								>
									<path
										fillRule="evenodd"
										d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
										clipRule="evenodd"
									></path>
								</svg>
							</div>
							<div className="ml-3">
								<h3 className="text-sm font-medium capitalize text-red-800">
									There were {Object.keys(errors).length} errors with your
									submission
								</h3>
								<div className="mt-2 text-sm text-red-700">
									<ul role="list" className="list-disc space-y-1 pl-5">
										{errors.name && <li> {errors.name?.message} </li>}
										{errors.content && <li> {errors.content?.message} </li>}
										{errors.topic && <li> {errors.topic?.message} </li>}
										{errors.category && <li> {errors.category?.message} </li>}
										{errors.tag && <li> {errors.tag?.message} </li>}
									</ul>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>
		</>
	);
};

export default CreateDiscussion;
