import { useState } from "react";
import { Link } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import {
	SearchIcon,
	InboxIcon,
	BriefcaseIcon,
	AcademicCapIcon,
	ChatIcon,
} from "@heroicons/react/solid";

import { MenuAlt1Icon, XIcon } from "@heroicons/react/outline";

import LinkSection from "./Link/LinkSection";

import CommandPalette from "../modal/CommandPalette";
import useToggle from "../../hooks/useToggle";

const navigation = [
	{ name: "Dashboard", href: "/dashboard", icon: BriefcaseIcon, current: true },
	{ name: "Inbox", href: "#", icon: InboxIcon, current: false },
];
const userNavigation = [
	{ name: "Your Profile", href: "/profile" },
	{ name: "Settings", href: "/setting" },
	{ name: "Sign out", href: "#" },
];

function classNames(...classes) {
	return classes.filter(Boolean).join(" ");
}

const NavBar = () => {
	const { isOpen, toggleModal } = useToggle();

	return (
		<Disclosure as="nav" className="z-10 flex-shrink-0 bg-blue-700 shadow-sm">
			{({ open }) => (
				<>
					<div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8">
						<div className="relative flex h-16 items-center justify-between">
							{/* Logo section */}
							<Link to="/">
								<div className="flex items-center px-2 lg:px-0 xl:w-64">
									<div className="flex-shrink-0">
										<div className="flex items-center justify-center text-2xl font-extrabold capitalize italic text-white">
											<AcademicCapIcon className="mr-1 h-9 w-9 text-white" />
											AfterClass
										</div>
										<p className="relative -mt-2 flex p-1 text-sm italic text-white">
											let the discussion begin{" "}
											<ChatIcon className="ml-1 h-4 w-4 text-white" />
										</p>
									</div>
								</div>
							</Link>

							{/* Search section */}
							<div className="flex flex-1 justify-center lg:justify-end">
								<div className="w-full px-2 lg:px-6">
									<label htmlFor="search" className="sr-only">
										Search projects
									</label>
									<div className="relative text-blue-200 focus-within:text-gray-400">
										<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
											<SearchIcon className="h-5 w-5" aria-hidden="true" />
										</div>
										<input
											id="search"
											name="search"
											onClick={toggleModal}
											disabled={isOpen ? true : false}
											className="block w-full rounded-md border border-transparent bg-blue-400 bg-opacity-25 py-2 pl-10 pr-3 leading-5 text-blue-100 placeholder-blue-200 focus:bg-white focus:text-gray-900 focus:placeholder-gray-400 focus:outline-none focus:ring-0 sm:text-sm"
											placeholder="Search Discussion, Tags, Category"
											type="search"
										/>
									</div>
								</div>
								<CommandPalette open={isOpen} toggle={toggleModal} />
							</div>

							<div className="flex lg:hidden">
								{/* Mobile menu button */}
								<Disclosure.Button className="inline-flex items-center justify-center rounded-md bg-blue-600 p-2 text-blue-400 hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600">
									<span className="sr-only">Open main menu</span>
									{open ? (
										<XIcon className="block h-6 w-6" aria-hidden="true" />
									) : (
										<MenuAlt1Icon
											className="block h-6 w-6"
											aria-hidden="true"
										/>
									)}
								</Disclosure.Button>
							</div>

							{/* Links section */}

							<LinkSection />
						</div>
					</div>

					<Disclosure.Panel className="lg:hidden">
						<div className="space-y-1 px-2 pt-2 pb-3">
							{navigation.map((item) => (
								<Disclosure.Button
									key={item.name}
									as="a"
									href={item.href}
									className={classNames(
										item.current
											? "bg-blue-800 text-white"
											: "text-blue-200 hover:bg-blue-600 hover:text-blue-100",
										"block rounded-md px-3 py-2 text-base font-medium"
									)}
									aria-current={item.current ? "page" : undefined}
								>
									{item.name}
								</Disclosure.Button>
							))}
						</div>
						<div className="border-t border-blue-800 pt-4 pb-3">
							<div className="space-y-1 px-2">
								{userNavigation.map((item) => (
									<Disclosure.Button
										key={item.name}
										as="a"
										href={item.href}
										className="block rounded-md px-3 py-2 text-base font-medium text-blue-200 hover:bg-blue-600 hover:text-blue-100"
									>
										{item.name}
									</Disclosure.Button>
								))}
							</div>
						</div>
					</Disclosure.Panel>
				</>
			)}
		</Disclosure>
	);
};

export default NavBar;
