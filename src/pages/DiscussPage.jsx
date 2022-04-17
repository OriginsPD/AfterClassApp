import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DiscussionTopicApi from "../api/DiscussionTopicApi";

// Components
import HeadCard from "../components/forum/tread/HeadCard";
import ReplyCard from "../components/forum/tread/ReplyCard";
import TextAreaCard from "../components/forum/tread/TextAreaCard";

const DiscussPage = () => {
	const { discussionFind, discussionState } = DiscussionTopicApi();

	// Refresh Loads
	const [refresh, setRefresh] = useState(0);

	let params = useParams();

	useEffect(() => {
		discussionFind(params.id);
	}, [refresh]);

	// console.log(discussionState);

	return (
		<div className=" w-full flex-col justify-between overflow-y-auto scrollbar-hide">
			<div className="bg-white  lg:min-w-0 lg:flex-1">
				<div className="border-b border-t border-gray-200 pl-4 pr-6 pt-4 pb-4 sm:pl-6 lg:pl-8 xl:border-t-0 xl:pl-6 xl:pt-6">
					{/* Head/Main Card Section */}
					<HeadCard discussionState={discussionState} />
				</div>

				{/* Reply Section */}
				<ReplyCard discussionState={discussionState} setRefresh={setRefresh} />
			</div>
			{/* TextArea Section */}
			<div className="w-full bg-gray-100 px-1 py-2">
				<TextAreaCard {...params} setRefresh={setRefresh} />
			</div>
		</div>
	);
};

export default DiscussPage;
