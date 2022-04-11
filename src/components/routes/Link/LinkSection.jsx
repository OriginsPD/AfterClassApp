import { Link } from "react-router-dom";
import { BriefcaseIcon } from "@heroicons/react/solid";

import AuthForm from "../../config/AuthForm";
import FormPortal from "../../modal/FormPortal";

//
import InboxPopover from "./InboxPopover";
import ProfilePopover from "./ProfilePopover";

// Auth Hook
import useAuth from "../../../hooks/useAuth";
import { useState, useEffect } from "react";

const LinkSection = () => {
	const [stateAuth, setStateAuth] = useState();

	const { defaultProps } = AuthForm();
	
	const { authInfo, isAuth } = useAuth();

	return (
		<div className="hidden lg:block lg:w-80">
			<div className="flex items-center justify-end">
				{isAuth ? (
					<>
						<div className="flex">
							<Link
								to="/dashboard"
								className="flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-800/75"
							>
								<BriefcaseIcon className="mr-1 h-6 w-6 flex-shrink-0 " />
								Dashboard
							</Link>
							<InboxPopover />
						</div>

						<ProfilePopover />
					</>
				) : (
					<div className="hidden items-center space-x-4 lg:flex">
						<button
							onClick={defaultProps.loginToggle}
							className="rounded-full bg-white px-5 py-2 text-sm font-medium text-blue-600 shadow-lg"
						>
							Log in
						</button>
						<button
							onClick={defaultProps.signUpToggle}
							className="rounded-full bg-blue-600 px-5 py-2 text-sm font-medium text-white shadow-lg"
						>
							Sign up
						</button>
					</div>
				)}

				<FormPortal {...defaultProps} />
			</div>
		</div>
	);
};

export default LinkSection;
