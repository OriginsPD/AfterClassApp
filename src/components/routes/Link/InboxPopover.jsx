/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";

import { Link } from "react-router-dom";
import { InboxIcon } from "@heroicons/react/outline";

export default function InboxPopover() {
	return (
		<Menu as="div" className="relative inline-block text-left">
			<div>
				<Menu.Button className="inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium text-white hover:bg-gray-800/75">
					<InboxIcon className="mr-1 h-6 w-6 flex-shrink-0 " />
					Inbox
				</Menu.Button>
			</div>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-100"
				enterFrom="transform opacity-0 scale-95"
				enterTo="transform opacity-100 scale-100"
				leave="transition ease-in duration-75"
				leaveFrom="transform opacity-100 scale-100"
				leaveTo="transform opacity-0 scale-95"
			>
				<Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
					<div className="py-1">
						<Menu.Item>
							<Link
								to="#"
								className="flex cursor-pointer items-center justify-center px-4 py-4 text-center text-sm text-gray-900 hover:bg-gray-100 "
							>
								<InboxIcon className="mr-1 h-6 w-6 flex-shrink-0 " />
								No message new found
							</Link>
						</Menu.Item>
						<Menu.Item>
							<Link
								to="/inbox"
								className="block px-4 py-2 text-center text-sm hover:bg-gray-100 hover:text-blue-900 hover:underline"
							>
								View all Messages
							</Link>
						</Menu.Item>
					</div>
				</Menu.Items>
			</Transition>
		</Menu>
	);
}
