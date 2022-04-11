import React, { useEffect } from "react";

import useAuth from "../../hooks/useAuth";
import { useForms } from "../../hooks/useForms";

const Setting = () => {
	const { loadInfo, profileForm, storeInfo } = useForms();
	const { authInfo } = useAuth();

	useEffect(() => {
		loadInfo(authInfo);
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
				<form action="#" method="POST">
					<div className="shadow sm:overflow-hidden sm:rounded-md">
						<div className="space-y-6 bg-white px-4 py-5 sm:p-6">
							<div className="grid grid-cols-6 gap-6">
								{profileForm.map((items) => (
									<div key={items.name} className="col-span-6 sm:col-span-3">
										<label
											htmlFor={items.name}
											className="block text-sm font-medium capitalize text-gray-700"
										>
											{items.name}
										</label>
										<input
											type={items.type}
											name={items.name}
											onChange={storeInfo}
											value={items.value}
											className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
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
									<button
										type="button"
										className="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
									>
										Change
									</button>
								</div>
							</div>

							<div>
								<label className="block text-sm font-medium text-gray-700">
									Cover photo
								</label>
								<div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
									<div className="space-y-1 text-center">
										<svg
											className="mx-auto h-12 w-12 text-gray-400"
											stroke="currentColor"
											fill="none"
											viewBox="0 0 48 48"
											aria-hidden="true"
										>
											<path
												d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
												strokeWidth={2}
												strokeLinecap="round"
												strokeLinejoin="round"
											/>
										</svg>
										<div className="flex text-sm text-gray-600">
											<label
												htmlFor="file-upload"
												className="relative cursor-pointer rounded-md bg-white font-medium text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:text-indigo-500"
											>
												<span>Upload a file</span>
												<input
													id="file-upload"
													name="file-upload"
													type="file"
													className="sr-only"
												/>
											</label>
											<p className="pl-1">or drag and drop</p>
										</div>
										<p className="text-xs text-gray-500">
											PNG, JPG, GIF up to 10MB
										</p>
									</div>
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
					</div>
				</form>
			</div>
		</div>
	);
};

export default Setting;
