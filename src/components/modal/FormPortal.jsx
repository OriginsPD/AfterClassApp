// Headless Ui Imports
import { Fragment, useCallback } from "react";
import { Dialog, Transition } from "@headlessui/react";

// Hooks
import { useForms } from "../../hooks/useForms";

// Yup and Use Form Hook For Form Validation
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

const FormPortal = ({
	show,
	toggle,
	formBody,
	formSubmit,
	formLabel,
	schema,
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const { storeInfo, dispatch, RESET, credentials } = useForms();

	const onSubmit = () => {
		formSubmit();
		toggle();
	};

	const resetModal = () => {
		Object.keys(errors).forEach((keys) => {
			delete errors[keys];
		});
		dispatch({ type: RESET });
	};

	return (
		<>
			<Transition show={show} as={Fragment} afterLeave={resetModal}>
				<Dialog
					as="div"
					className="fixed inset-0 z-10 overflow-y-auto"
					onClose={toggle}
				>
					<div className="flex min-h-screen items-end justify-center px-4 pt-4 pb-20 text-center sm:block sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0"
							enterTo="opacity-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100"
							leaveTo="opacity-0"
						>
							<Dialog.Overlay className="fixed inset-0 bg-gray-400/75 transition-opacity" />
						</Transition.Child>

						{/* This element is to trick the browser into centering the modal contents. */}
						<span
							className="hidden sm:inline-block sm:h-screen sm:align-middle"
							aria-hidden="true"
						>
							&#8203;
						</span>
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							<div className="relative inline-block transform overflow-hidden rounded-lg bg-white text-left align-bottom shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:align-middle">
								<form
									onSubmit={handleSubmit(onSubmit)}
									className="mt-6 mb-0 space-y-4 rounded-lg p-8 "
								>
									<div className="relative mt-4">
										<div
											className="absolute inset-0 flex items-center"
											aria-hidden="true"
										>
											<div className="w-full border-t border-gray-300"></div>
										</div>
										<div className="relative flex justify-center text-sm">
											<span className="bg-white px-2 text-gray-500">
												{formLabel.name}
											</span>
										</div>
									</div>
									{formBody.map((form) => {
										return (
											<div key={form.name}>
												<label
													htmlFor={form.name}
													className="block text-sm font-medium text-gray-700"
												>
													{form.label}
												</label>

												<div className="relative mt-1">
													<input
														type={form.type}
														{...register(form.name)}
														id={form.name}
														onChange={storeInfo}
														className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
													/>
												</div>
											</div>
										);
									})}
									<button
										type="submit"
										className="mt-4 block w-full rounded-lg bg-blue-600 px-5 py-3 text-sm font-medium text-white"
									>
										{formLabel.button}
									</button>
								</form>
								{Object.keys(errors).length === 0 ? null : (
									<div className="mt-4 rounded-md bg-red-50 p-5 p-4">
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
												<h3 className="text-sm font-medium text-red-800">
													There were {Object.keys(errors).length} errors with
													your submission
												</h3>
												<div className="mt-2 text-sm text-red-700">
													<ul role="list" className="list-disc space-y-1 pl-5">
														{errors.username && (
															<li> {errors.username?.message} </li>
														)}
														{errors.email && <li> {errors.email?.message} </li>}
														{errors.password && (
															<li> {errors.password?.message} </li>
														)}
														{errors.confirmPassword && (
															<li> Password Should Match </li>
														)}
													</ul>
												</div>
											</div>
										</div>
									</div>
								)}
							</div>
						</Transition.Child>
					</div>
				</Dialog>
			</Transition>
		</>
	);
};

export default FormPortal;
