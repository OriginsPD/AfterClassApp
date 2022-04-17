import * as yup from "yup";
import ProfileApi from "../../api/ProfileApi";
import { useForms } from "../../hooks/useForms";

const schema = yup.object({
	username: yup.string().required("Please Enter Your Username"),
	email: yup.string().email().required("Please Enter Your Email Address"),
	about: yup
		.string()
		.min(12, "Minimum 12 Characters")
		.max(30, "Maximum 30 Characters")
		.required("Please Some Details About Yourself"),
	image: yup.mixed().required("Please Upload a Profile Picture"),
});
const SettingForm = () => {
	const { updateProfile } = ProfileApi();
	const { profileForm, dispatch, credentials, PROFILE, REST } = useForms();

	const onFileUpload = (event) => {
		dispatch({ type: PROFILE, payload: event.target.files[0] });
	};

	const formBody = profileForm;
	const onSubmit = updateProfile;

	const defaultProps = {
		// Form Details
		formBody,

		// Form Schema
		schema,

		// Function
		onFileUpload,
		onSubmit,
		REST,
	};

	return { ...defaultProps };
};

export default SettingForm;
