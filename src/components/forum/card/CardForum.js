import { Link } from 'react-router-dom'
import {
    HeartIcon,
    EyeIcon
} from '@heroicons/react/solid'

import { HeartIcon as HeartIconOut } from '@heroicons/react/outline'
import useAuth from '../../../hooks/useAuth'
import LikeApi from '../../../api/LikeApi'

const CardForum = ({ value, setRefresh }) => {
    const { authInfo } = useAuth()

    const { like, unLike } = LikeApi()

    const toggleLike = (id, items) => {
        like(id, items);
        setRefresh((previousState) => previousState + parseInt(1));
    };

    const toggleUnlike = (id, items) => {
        unLike(id, items);
        setRefresh((previousState) => previousState + parseInt(1));
    };

    console.log(Object.values(value.like).map((items) => items.user_id)[0] === authInfo.id)

    return (
        <>
            <div key={value.id} className="flex w-full p-8 border-b border-gray-300">
                <span className="flex-shrink-0 w-12 h-12 bg-gray-400 rounded-full"></span>
                <div className="flex flex-col flex-grow ml-4">
                    <div className="flex">
                        <Link to={`/treads/${value.id}`}> <span className="font-semibold cursor-pointer">{value.name}</span> </Link>
                        <span className="ml-4 px-4 py-1 text-xs bg-blue-600/75 text-white rounded-full">{value.topic.name}</span>
                        <span className="ml-auto text-sm">{value.lastDeploy}</span>
                    </div>
                    <p className="mt-1">
                        {value.content}
                    </p>

                    <div className="flex justify-between mt-4 space-x-2">
                        <div className='flex space-x-2'>

                            <button className="ml-2 text-sm flex font-semibold">

                                <EyeIcon className='h-5 w-5 text-gray-600/60 mr-1 ' />

                                <span className='text-gray-400 '>(20)</span>

                            </button>

                            {(Object.keys(value.like).length > 0 && (Object.values(value.like).map((items) => items.user_id).includes(authInfo.id)))
                                ? (
                                    <>
                                        <button
                                            onClick={() => toggleUnlike(value.id, "discussTopic")}
                                            className="flex text-sm font-semibold"
                                        >
                                            <HeartIcon className="mr-1 h-5 w-5 text-blue-600/60 " />
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
                                            <HeartIconOut className="mr-1 h-5 w-5 text-blue-600/60 " />
                                            <span className="hover:underline">Like</span>
                                            <span className="ml-2 text-gray-400">
                                                ( {Object.keys(value.like).length} )
                                            </span>
                                        </button>
                                    </>
                                )}
                        </div>

                        <div className='text-gray-400'>
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