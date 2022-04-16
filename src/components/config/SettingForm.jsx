import * as yup from "yup";
import ProfileApi from "../../api/ProfileApi";
import { useForms } from "../../hooks/useForms";

const schema = yup.object({
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
