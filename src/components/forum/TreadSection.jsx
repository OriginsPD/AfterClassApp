import { Menu } from '@headlessui/react'

import {
    ChevronDownIcon,
    SortAscendingIcon,
} from '@heroicons/react/solid'

import CardForum from './card/CardForum'

const projects = [
    {
        name: 'Laravel Assignment #4',
        href: '#',
        siteHref: '#',
        repoHref: '#',
        repo: 'This is a random question tread line that ',
        tech: 'Laravel',
        lastDeploy: '3h ago',
        location: 'United states',
        starred: true,
        active: true,
    },
    {
        name: 'Laravel Assignment #4',
        href: '#',
        siteHref: '#',
        repoHref: '#',
        repo: 'This is a random question tread line that ',
        tech: 'Laravel',
        lastDeploy: '3h ago',
        location: 'United states',
        starred: true,
        active: true,
    },
    {
        name: 'Laravel Assignment #4',
        href: '#',
        siteHref: '#',
        repoHref: '#',
        repo: 'This is a random question tread line that ',
        tech: 'Laravel',
        lastDeploy: '3h ago',
        location: 'United states',
        starred: true,
        active: true,
    },
    {
        name: 'Laravel Assignment #4',
        href: '#',
        siteHref: '#',
        repoHref: '#',
        repo: 'This is a random question tread line that ',
        tech: 'Laravel',
        lastDeploy: '3h ago',
        location: 'United states',
        starred: true,
        active: true,
    },
    {
        name: 'Laravel Assignment #2',
        href: '#',
        siteHref: '#',
        repoHref: '#',
        repo: 'This is a random question tread line that ',
        tech: 'Laravel',
        lastDeploy: '3h ago',
        location: 'United states',
        starred: true,
        active: true,
    },
    {
        name: 'Laravel Assignment #2',
        href: '#',
        siteHref: '#',
        repoHref: '#',
        repo: 'This is a random question tread line that ',
        tech: 'Laravel',
        lastDeploy: '3h ago',
        location: 'United states',
        starred: true,
        active: true,
    },
    {
        name: 'Laravel Assignment #2',
        href: '#',
        siteHref: '#',
        repoHref: '#',
        repo: 'This is a random question tread line that ',
        tech: 'Laravel',
        lastDeploy: '3h ago',
        location: 'United states',
        starred: true,
        active: true,
    },
    {
        name: 'Laravel Assignment #2',
        href: '#',
        siteHref: '#',
        repoHref: '#',
        repo: 'This is a random question tread line that ',
        tech: 'Laravel',
        lastDeploy: '3h ago',
        location: 'United states',
        starred: true,
        active: true,
    },
    // More projects...
]
function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const TreadSection = () => {
    return (
        <div className="bg-white lg:min-w-0 lg:flex-1 overflow-y-auto h-screen">
            <div className="pl-4 pr-6 pt-4 pb-4 border-b border-t border-gray-200 sm:pl-6 lg:pl-8 xl:pl-6 xl:pt-6 xl:border-t-0">
                <div className="flex items-center">
                    <h1 className="flex-1 text-lg font-medium">Latest Treads</h1>
                    <Menu as="div" className="relative">
                        <Menu.Button className="w-full bg-white border border-gray-300 rounded-md shadow-sm px-4 py-2 inline-flex justify-center text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <SortAscendingIcon className="mr-3 h-5 w-5 text-gray-400" aria-hidden="true" />
                            Sort
                            <ChevronDownIcon className="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                        </Menu.Button>
                        <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <div className="py-1">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Name
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Date modified
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="#"
                                            className={classNames(
                                                active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                                'block px-4 py-2 text-sm'
                                            )}
                                        >
                                            Date created
                                        </a>
                                    )}
                                </Menu.Item>
                            </div>
                        </Menu.Items>
                    </Menu>
                </div>
            </div>
            <CardForum treads={projects} />
        </div>

    )
}

export default TreadSection