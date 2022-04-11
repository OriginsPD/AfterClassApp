import { HeartIcon, EyeIcon } from "@heroicons/react/solid";

import { HeartIcon as HeartIconOut } from "@heroicons/react/outline";
import useAuth from "../../../hooks/useAuth";
import LikeApi from "../../../api/LikeApi";

const ReplyCard = ({ discussionState }) => {
	const { authInfo } = useAuth();
	const { likeReply, dispatch, LIKE, UNLIKE } = LikeApi();

	const toggleLike = async (id) => {
		dispatch({
			type: LIKE,
			payload: { id: authInfo.id, itemID: id, itemTopic: "reply" },
		});
		await likeReply();
	};

	return (
		<>
			{discussionState.map((items) =>
				items.replies.map((innVal) => (
					<div key={innVal.id} className="m-4 rounded-sm border p-5">
						<ul role="list" className="divide-y divide-gray-200">
							<li className="py-4">
								<div className="flex space-x-3">
									<img
										className="h-6 w-6 rounded-full"
										src="data:image/jpeg;base64,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"
										alt=""
									/>
									<div className="flex-1 space-y-1">
										<div className="mb-2 flex items-center justify-between">
											<h3 className="text-sm font-medium">
												{innVal.user.username}
											</h3>
											<p className="text-sm text-gray-500">
												{new Date(innVal.created_at).toLocaleDateString(
													"Jamaica",
													{ month: "long", day: "2-digit", year: "2-digit" }
												)}
											</p>
										</div>
										<p className="text-sm text-gray-500">{innVal.content}</p>
									</div>
								</div>
								<div className="mt-4 flex justify-end">
									<button
										onClick={() => toggleLike(innVal.id)}
										className="flex text-sm font-semibold"
									>
										{Object.keys(innVal.like).length > 0 ? (
											<>
												<HeartIcon className="mr-1 h-5 w-5 text-blue-600/60 " />
											</>
										) : (
											<>
												<HeartIconOut className="mr-1 h-5 w-5 text-blue-600/60 " />
											</>
										)}
										<span className="hover:underline">
											{Object.values(innVal).includes(authInfo.id)
												? "like"
												: "Unlike"}
										</span>
										<span className="ml-2 text-gray-400">
											( {Object.keys(innVal.like).length} )
										</span>
									</button>
									<button className="ml-2 text-sm font-semibold">Reply</button>
								</div>
							</li>

							{/* <!-- More items... --> */}
						</ul>
					</div>
				))
			)}
		</>
	);
};

export default ReplyCard;
