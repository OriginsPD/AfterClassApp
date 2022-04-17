import React, { useEffect } from "react";

// Custom Hooks
import useAuth from "../../hooks/useAuth";
import { useForms } from "../../hooks/useForms";
import SettingForm from "../../components/config/SettingForm";

// Validation
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const Setting = () => {
	const { onFileUpload, onSubmit, schema, REST, formBody } = SettingForm();
	const { loadInfo, storeInfo, credentials, dispatch } = useForms();

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
	};

	// console.log(formBody);

	useEffect(() => {
		dispatch({ type: REST });
	}, []);

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
											className={`mt-1 block w-full ${
												items.name === "about" ? "h-[190px]" : ""
											} rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm`}
										/>
									</div>
								))}
							</div>
							<div>
								<label className="block text-sm font-medium text-gray-700">
									Profile
								</label>
								<div className="mt-1 flex items-center">
									<span className="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
										<svg
											className="h-full w-full text-gray-300"
											fill="currentColor"
											viewBox="0 0 24 24"
										>
											<path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
										</svg>
									</span>
									<label
										type="button"
										htmlFor="image"
										className="ml-5 cursor-pointer rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
									>
										Change
									</label>
									<input
										type="file"
										{...register("image")}
										id="image"
										onChange={onFileUpload}
										hidden
									/>
								</div>
							</div>
						</div>
						<div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
							<button
								type="submit"
								className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
							>
								Save
							</button>
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
											{errors.image && <li> {errors.image?.message} </li>}
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
