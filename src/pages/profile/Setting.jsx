import React, { useEffect } from "react";

// Custom Hooks
import useAuth from "../../hooks/useAuth";
import { useForms } from "../../hooks/useForms";
import SettingForm from "../../components/config/SettingForm";

// Validation
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useToggle from "../../hooks/useToggle";

const Setting = () => {
	const { onFileUpload, onSubmit, schema, REST, formBody } = SettingForm();
	const { loadInfo, storeInfo, credentials, dispatch } = useForms();

	const { isOpen, toggleModal } = useToggle();

	const { authInfo } = useAuth();

	const {
		handleSubmit,
		register,
		watch,
		reset,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmitClear = () => {
		onSubmit();
		reset(credentials);
		toggleModal();
	};

	// console.log(formBody);

	useEffect(() => {
		dispatch({ type: REST });
	}, []);

	useEffect(() => {
		reset(credentials);
	}, [credentials]);

	useEffect(() => {
		loadInfo(authInfo);
		// reset(credentials);
	}, [authInfo]);

	return (
		<div className="m-5 my-10  justify-center bg-white md:grid md:grid-cols-3 md:gap-6">
			<div className="md:col-span-1">
				<div className="px-4 sm:px-0">
					<h3 className="text-lg font-medium leading-6 text-gray-900">
						Profile
					</h3>
					<p className="mt-1 text-sm text-gray-600">
						This information will be displayed publicly so be careful what you
						share.
					</p>
				</div>
			</div>
			<div className="mt-5 md:col-span-2 md:mt-0">
				<div className="shadow sm:overflow-hidden sm:rounded-md">
					<form onSubmit={handleSubmit(onSubmitClear)}>
						<div className="space-y-6 bg-white px-4 py-5 sm:p-6">
							<div className="grid grid-cols-6 gap-6">
								{formBody.map((items) => (
									<div
										key={items.name}
										className={`col-span-6  ${
											items.name === "about"
												? "sm: col-span-full"
												: "sm:col-span-3"
										}`}
									>
										{items.name !== "about" ? (
											<>
												<label
													htmlFor={items.name}
													className={`block text-sm  font-medium capitalize text-gray-700`}
												>
													{items.label}
												</label>
												<input
													id={items.name}
													type={items.type}
													{...register(items.name)}
													onChange={storeInfo}
													value={items.value}
													disabled={isOpen ? false : true}
													readOnly={items.name == "email" ? true : false}
													className={`mt-1 block w-full rounded-md border ${
														items.name == "email"
															? "disabled cursor-not-allowed"
															: ""
													}  border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm`}
												/>
											</>
										) : (
											<div>
												<label
													htmlFor={items.name}
													className="block text-sm font-medium text-gray-700"
												>
													{items.label}
												</label>
												<div className="mt-1">
													<textarea
														rows={4}
														id={items.name}
														type={items.type}
														{...register(items.name)}
														disabled={isOpen ? false : true}
														onChange={storeInfo}
														defaultValue={items.value}
														className="block w-full resize-none rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm"
													/>
												</div>
											</div>
										)}
									</div>
								))}
							</div>
						</div>
						<div className="flex w-full justify-between bg-gray-50 px-4 py-3 text-right sm:px-6">
							{isOpen ? <div></div> : null}

							{isOpen ? (
								<div className="space-x-2">
									<button
										type="submit"
										className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
									>
										Save
									</button>
									<a
										onClick={toggleModal}
										className="inline-flex cursor-pointer justify-center rounded-md border border-transparent bg-gray-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
									>
										Cancel
									</a>
								</div>
							) : (
								<a
									onClick={toggleModal}
									className="inline-flex cursor-pointer justify-start rounded-md border border-transparent bg-green-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
								>
									Edit
								</a>
							)}
							{isOpen ? null : <div></div>}
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
											{errors.email && <li> {errors.email?.message} </li>}
											{errors.about && <li> {errors.about?.message} </li>}
										</ul>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Setting;
