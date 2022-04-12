import { useEffect } from "react";
import * as yup from "yup";
import CategoryApi from "../../api/CategoryApi";
import DiscussionTopicApi from "../../api/DiscussionTopicApi";
import TagApi from "../../api/TagApi";
import TopicApi from "../../api/TopicApi";
import { useForms } from "../../hooks/useForms";

const schema = yup.object({
	name: yup.string().required("Please name your discussion"),
	content: yup
		.string()
		.max(400, "Query must be 400 or less characters")
		.required("Please add content body"),
	topic: yup.string().required("Please select a topic"),
	category: yup.string().required("Please select a category"),
	tag: yup.array().required("Add tags to your post"),
});

const DiscussionForm = () => {
	const { tags, tagIndex } = TagApi();
	const { topics, topicIndex } = TopicApi();
	const { category, categoryIndex } = CategoryApi();
	const { discussionStore } = DiscussionTopicApi();
	const { credentials, discussionForm } = useForms();
	// const {  } = DiscussionTopicApi()

	useEffect(() => {
		tagIndex();
		topicIndex();
		categoryIndex();
	}, []);

	// Personalize Discussion Topic
	const optionBody = {
		tags,
		topics,
		category,
	};

	const formSubmit = discussionStore;

	const defaultProps = {
		// Schema
		schema,

		// Option
		...optionBody,

		// Function
		formSubmit,

		// Form Body
		discussionForm,
	};

	return { ...defaultProps };
};

export default DiscussionForm;
