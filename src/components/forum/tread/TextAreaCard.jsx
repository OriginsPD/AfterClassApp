import { PaperClipIcon } from "@heroicons/react/solid";
import { useForms } from "../../../hooks/useForms";

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ReplyApi from "../../../api/ReplyApi";
import { useEffect } from "react";
import useAuth from "../../../hooks/useAuth";

const schema = yup.object({
	comment: yup
		.string()
		.max(400, "Comment must be at most 400 characters")
		.required("Add comment be for posting "),
});

const TextAreaCard = ({ id, setRefresh }) => {
	const { authInfo } = useAuth();
	const { credentials, storeInfo, dispatch, SET_ID, RESET } = useForms();
	const { replyStore } = ReplyApi();

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});

	const onSubmit = () => {
		replyStore();
		dispatch({ type: RESET });
		setRefresh((previousState) => previousState + parseInt(1));
	};

	useEffect(() => {
		dispatch({ type: SET_ID, value: parseInt(id) });
	}, []);

	return (
		<div className="m-5 flex-col items-start space-x-4 ">
			<div className="my-3 flex-shrink-0">
				<img
					className="inline-block h-10 w-10 rounded-full"
					src={
						authInfo.username
							? `https://ui-avatars.com/api/?background=random&color=fff&name=${authInfo.username}`
							: " data:image/jpeg;base64,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"
					}
					alt=""
				/>
			</div>

			<div className="min-w-0 flex-1">
				<form onSubmit={handleSubmit(onSubmit)} className="relative">
					<div className="overflow-hidden rounded-lg border border-gray-300 shadow-sm focus-within:border-blue-500 focus-within:ring-1 focus-within:ring-blue-500">
						<label htmlFor="comment" className="sr-only">
							Add your Response
						</label>
						<textarea
							rows={3}
							{...register("comment")}
							onChange={storeInfo}
							value={credentials.comment}
							className="block w-full resize-none border-0 py-3 focus:ring-0 sm:text-sm"
							placeholder="Add your response..."
						/>

						<div className="py-2" aria-hidden="true">
							<div className="py-px">
								<div className="h-9" />
							</div>
						</div>
					</div>

					<div className="absolute inset-x-0 bottom-0 flex justify-between rounded-b-md py-2 pl-3 pr-2">
						<div className="flex items-center space-x-5">
							<div className="flex items-center">
								<button
									type="button"
									className="-m-2.5 flex h-10 w-10 items-center justify-center rounded-full text-gray-400 hover:text-gray-500"
								>
									<PaperClipIcon className="h-5 w-5" aria-hidden="true" />
									<span className="sr-only">Attach a file</span>
								</button>
							</div>
							<div className="flex items-center"></div>
						</div>
						<div className="flex-shrink-0">
							<button
								type="submit"
								className="inline-flex items-center rounded-md border border-transparent bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
							>
								Post
							</button>
						</div>
					</div>
				</form>
			</div>
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
									{errors.comment && <li> {errors.comment?.message} </li>}
								</ul>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default TextAreaCard;
