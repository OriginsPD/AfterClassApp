import React from "react";
import useAuth from "../../hooks/useAuth";
import parse from "html-react-parser";
import Setting from "../../pages/profile/Setting";

const BodyProfile = ({ toggleTab }) => {
	const { authInfo } = useAuth();
	return (
		<>
			<div
				className={`overflow-hidden bg-white shadow sm:rounded-lg ${
					toggleTab === 0 ? "block" : "hidden"
				}`}
			>
				<div className="px-4 py-5 sm:px-6">
					<h3 className="text-lg font-medium leading-6 text-gray-900">
						Applicant Information
					</h3>
					<p className="mt-1 max-w-2xl text-sm text-gray-500">
						Personal details and application.
					</p>
				</div>
				<div className="border-t border-gray-200 px-4 pt-5 pb-10 sm:px-6">
					<dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
						<div className="sm:col-span-1">
							<dt className="text-sm font-medium text-gray-500">Full name</dt>
							<dd className="mt-1 text-sm text-gray-900">
								{authInfo.username}
							</dd>
						</div>
						<div className="sm:col-span-1">
							<dt className="text-sm font-medium text-gray-500">
								Courses Area{" "}
							</dt>
							<dd className="mt-1 text-sm text-gray-900">Backend Developer</dd>
						</div>
						<div className="sm:col-span-1">
							<dt className="text-sm font-medium text-gray-500">
								Email address
							</dt>
							<dd className="mt-1 text-sm text-gray-900">{authInfo.email}</dd>
						</div>
						<div className="sm:col-span-1">
							<dt className="text-sm font-medium text-gray-500">Joined On</dt>
							<dd className="mt-1 text-sm text-gray-900">
								{new Date(authInfo.created_at).toLocaleDateString("Jamaica", {
									month: "long",
									day: "2-digit",
									year: "2-digit",
								})}
							</dd>
						</div>
						<div className="sm:col-span-2">
							<dt className="text-sm font-medium text-gray-500">About</dt>
							<dd className="mt-1 w-9/12 text-sm text-gray-900">
								{parse(authInfo.profile?.about ?? "Ready to Help")}
							</dd>
						</div>
					</dl>
				</div>
			</div>
			<div className={toggleTab === 1 ? "block" : "hidden"}>
				<Setting />
			</div>
		</>
	);
};

export default BodyProfile;
