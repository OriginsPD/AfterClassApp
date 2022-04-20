import { useState } from "react";

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const TabSection = ({ toggleTab, setToggleTab }) => {
	const tabs = [
		{ name: "My Profile", current: 0 },
		{ name: "Setting", current: 1 },
	];

	// console.log(toggleTab);

	return (
		<>
			<div className="p-4">
				<div className="sm:hidden">
					<label htmlFor="tabs" className="sr-only">
						Select a tab
					</label>
					{/* Use an "onChange" listener to redirect the user to the selected tab URL. */}
					<select
						id="tabs"
						name="tabs"
						className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
						defaultValue={tabs.find((tab) => tab.current).name}
					>
						{tabs.map((tab) => (
							<option key={tab.name}>{tab.name}</option>
						))}
					</select>
				</div>
				<div className="hidden sm:block">
					<div className="border-b border-gray-200">
						<nav className="-mb-px flex space-x-8" aria-label="Tabs">
							{tabs.map((tab) => (
								<button
									key={tab.name}
									onClick={() =>
										tab.name === "My Profile"
											? setToggleTab(() => 0)
											: setToggleTab(() => 1)
									}
									className={classNames(
										toggleTab == tab.current
											? "border-indigo-500 text-indigo-600"
											: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
										"whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium"
									)}
									aria-current={tab.current ? "page" : undefined}
								>
									{tab.name}
								</button>
							))}
						</nav>
					</div>
				</div>
			</div>
		</>
	);
};

export default TabSection;
