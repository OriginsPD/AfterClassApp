import { ThumbUpIcon } from "@heroicons/react/solid";

import parse from "html-react-parser";

import {
	ThumbUpIcon as ThumbUpIconIn,
	AnnotationIcon,
} from "@heroicons/react/outline";
import useAuth from "../../../hooks/useAuth";
import LikeApi from "../../../api/LikeApi";
import Comment from "./Comment";
import useToggle from "../../../hooks/useToggle";
import ReplyModal from "./modal/ReplyModal";
import { useForms } from "../../../hooks/useForms";

const ReplyCard = ({ reply, setRefresh }) => {
	const { authInfo } = useAuth();
	const { like, unLike } = LikeApi();
	const { REPLY_ID, dispatch } = useForms();

	const { isOpen, toggleModal } = useToggle();

	const makeComment = (id) => {
		dispatch({ type: REPLY_ID, value: id });
		toggleModal();
	};

	const toggleLike = (id, item) => {
		like(id, item);
		setRefresh((previousState) => previousState + parseInt(1));
	};

	const toggleUnlike = (id, item) => {
		unLike(id, item);
		setRefresh((previousState) => previousState + parseInt(1));
	};

	return (
		<>
			<div key={reply.id} className="m-4 rounded-sm border p-5">
				<ul role="list" className="">
					<li className="py-4">
						<div className="flex space-x-3">
							<img
								className="h-10 w-10 rounded-full"
								src={
									reply.user.username
										? `https://ui-avatars.com/api/?background=random&color=fff&name=${reply.user.username}`
										: " data:image/jpeg;base64,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"
								}
								alt=""
							/>
							<div className="flex-1 space-y-1">
								<div className="mb-2 flex items-center justify-between">
									<h3 className="text-lg font-medium">
										<strong>{reply.user.username}</strong>
									</h3>
									<p className="text-sm text-gray-500">
										{new Date(reply.created_at).toLocaleDateString("Jamaica", {
											month: "long",
											day: "2-digit",
											year: "2-digit",
										})}
									</p>
								</div>
								<p className="text-sm text-gray-800">{parse(reply.content)}</p>
							</div>
						</div>
						<div className="mt-4 flex justify-end space-x-8">
							{Object.keys(reply.like).length > 0 &&
							Object.values(reply.like)
								.map((items) => items.user_id)
								.includes(authInfo.id) ? (
								<>
									<button
										onClick={() => toggleUnlike(reply.id, "reply")}
										className="flex justify-evenly text-sm font-semibold"
									>
										<ThumbUpIcon className="mr-1 h-5 w-5 text-blue-600/60 " />
										<span className="hover:underline">Unlike</span>
										<span className="ml-2 text-gray-400">
											( {Object.keys(reply.like).length} )
										</span>
									</button>
								</>
							) : (
								<>
									<button
										onClick={() => toggleLike(reply.id, "reply")}
										className="flex justify-evenly text-sm font-semibold"
									>
										<ThumbUpIconIn className="mr-1 h-5 w-5 text-blue-600/60 " />
										<span className="hover:underline">Like</span>
										<span className="ml-2 text-gray-400">
											( {Object.keys(reply.like).length} )
										</span>
									</button>
								</>
							)}

							<button
								onClick={() => makeComment(reply.id)}
								className="ml-2 flex text-sm font-semibold"
							>
								<AnnotationIcon className="mr-2 h-5 w-5 text-blue-600/60 " />
								Reply
							</button>
						</div>
					</li>

					<div key={reply.id} className="mt-4 space-y-2">
						<Comment key={reply.id} detail={reply} />
					</div>
				</ul>
				<ReplyModal
					show={isOpen}
					toggle={toggleModal}
					reply={reply}
					setRefresh={setRefresh}
				/>
			</div>
		</>
	);
};

export default ReplyCard;
