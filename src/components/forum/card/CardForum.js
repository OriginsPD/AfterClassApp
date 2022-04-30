import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'

import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'

// Icons
import {
    ThumbUpIcon,
    EyeIcon
} from '@heroicons/react/solid'
import { ThumbUpIcon as ThumbUpIconOut, TrashIcon } from '@heroicons/react/outline'

import AlertMessage from '../../toast/AlertMessage'

// Parse Html Body
import parse from 'html-react-parser'

// Authentication Details
import useAuth from '../../../hooks/useAuth'

// Api Import
import LikeApi from '../../../api/LikeApi'
import useToggle from '../../../hooks/useToggle'

const CardForum = ({ value, setRefresh, destroy }) => {
    const { authInfo, isAuth } = useAuth()
    const { pleaseLogin } = AlertMessage()

    const [viewsCount, setViewCount] = useState(0);

    const dashboard = useLocation()

    const { isOpen, toggleModal } = useToggle()


    const { like, unLike } = LikeApi()

    const toggleLike = (id, items) => {
        if (isAuth) {
            like(id, items);
            setRefresh((previousState) => previousState + parseInt(1));
        } else {
            pleaseLogin()
        }

    };

    const deletePost = (id) => {
        destroy(id);
        toggleModal();
        setRefresh((previousState) => previousState + parseInt(1));
    }

    const toggleUnlike = (id, items) => {
        unLike(id, items);
        setRefresh((previousState) => previousState + parseInt(1));
    };

    return (
        <>


            {
                dashboard?.pathname == "/dashboard"
                    ? (
                        <>
                            <Transition appear show={isOpen} as={Fragment}>
                                <Dialog
                                    as="div"
                                    className="fixed inset-0 z-10 overflow-y-auto"
                                    onClose={toggleModal}
                                >
                                    <div className="min-h-screen px-4 text-center">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <Dialog.Overlay className="fixed inset-0 bg-gray-800/75" />
                                        </Transition.Child>

                                        {/* This element is to trick the browser into centering the modal contents. */}
                                        <span
                                            className="inline-block h-screen align-middle"
                                            aria-hidden="true"
                                        >
                                            &#8203;
                                        </span>
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-out duration-300"
                                            enterFrom="opacity-0 scale-95"
                                            enterTo="opacity-100 scale-100"
                                            leave="ease-in duration-200"
                                            leaveFrom="opacity-100 scale-100"
                                            leaveTo="opacity-0 scale-95"
                                        >
                                            <div className="inline-block w-full max-w-md px-12 py-10 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                                                <Dialog.Title
                                                    as="h3"
                                                    className="text-lg leading-6 font-medium text-gray-900"
                                                >
                                                    Delete your Post on {value.name}
                                                </Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="text-sm text-gray-500">
                                                        Once you delete your post, you will lose all data associated with it.
                                                    </p>
                                                </div>

                                                <div className="mt-4 flex justify-between items-center space-x-2">
                                                    <button
                                                        onClick={() => deletePost(value.id)}
                                                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-red-700 bg-red-100 hover:bg-red-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
                                                    >
                                                        Delete
                                                    </button>
                                                    <button
                                                        onClick={toggleModal}
                                                        className="inline-flex items-center justify-center px-4 py-2 border border-transparent font-medium rounded-md text-gray-700 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 sm:text-sm"
                                                    >
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        </Transition.Child>
                                    </div>
                                </Dialog>
                            </Transition>
                        </>
                    )
                    : null
            }


            <div className={`flex w-full p-8 border-b bg-white ${isOpen ? 'animate-pulse' : ''} duration-300 transform border-gray-300`}>
                <div className="h-12 w-12 flex-shrink-0">
                    <img
                        className="h-12 w-12 rounded-full"
                        src={
                            value.user.username
                                ? `https://ui-avatars.com/api/?background=random&color=fff&name=${value.user.username}`
                                : " data:image/jpeg;base64,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"
                        }
                        alt=""
                    />
                </div>
                <div className="flex flex-col w-10/12 break-words flex-grow ml-4">
                    <div className="flex w-full relative items-center py-2 justify-between">
                        <div>
                            <Link to={`/treads/${value.id}`}> <span className="font-semibold cursor-pointer">{value.name}</span> </Link>
                            <span className="ml-4 px-4 py-1 text-xs bg-blue-600/75 text-white rounded-full">{value.topic.name}</span>
                        </div>
                        {
                            dashboard?.pathname == "/dashboard"
                                ? (
                                    <>
                                        <div className='group flex items-center space-x-1 cursor-pointer overflow-hidden rounded-xl  px-4 py-1'>
                                            <TrashIcon className=" h-5 w-5 group-hover:text-red-600 group-hover:translate-x-0 translate-x-8 text-blue-600/60 " />
                                            <span onClick={toggleModal} className='font-semibold text-gray-600 group-hover:translate-y-0 -translate-y-8 transition duration-300 italic'> Delete </span>
                                        </div>
                                    </>
                                )
                                : null
                        }
                    </div>
                    <span className="ml-auto text-sm">{value.lastDeploy}</span>
                    <p className="mt-1">
                        {parse(value.content)}
                    </p>
                    <div className="flex justify-between mt-4 space-x-2">
                        <div className='flex space-x-8'>
                            <div className="ml-2 text-sm flex font-semibold">
                                <EyeIcon className='h-5 w-5 text-gray-600/60 mr-1 ' />

                                <span className='text-gray-400 px-1'>
                                    {Object.keys(value.view).length}
                                </span>

                            </div>
                            {(Object.keys(value.like).length > 0 && (Object.values(value.like).map((items) => items.user_id).includes(authInfo.id)))
                                ? (
                                    <>
                                        <button
                                            onClick={() => toggleUnlike(value.id, "discussTopic")}
                                            className="flex text-sm font-semibold"
                                        >
                                            <ThumbUpIcon className="mr-1 h-5 w-5 text-blue-600/60 " />
                                            <span className="hover:underline">Unlike</span>
                                            <span className="ml-2 text-gray-400">
                                                ( {Object.keys(value.like).length} )
                                            </span>
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <button
                                            onClick={() => toggleLike(value.id, "discussTopic")}
                                            className="flex text-sm font-semibold"
                                        >
                                            <ThumbUpIconOut className="mr-1 h-5 w-5 text-blue-600/60 " />
                                            <span className="hover:underline">Like</span>
                                            <span className="ml-2 text-gray-400">
                                                ( {Object.keys(value.like).length} )
                                            </span>
                                        </button>
                                    </>
                                )}
                        </div>
                        <div className='text-gray-800 text-xs'>
                            {new Date(value.created_at).toLocaleDateString('Jamaica', {
                                month: "long",
                                day: "2-digit",
                                year: "2-digit",
                            })}
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default CardForum