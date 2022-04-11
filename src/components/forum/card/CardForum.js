import { Link } from 'react-router-dom'
import {
    HeartIcon,
    EyeIcon
} from '@heroicons/react/solid'

import { HeartIcon as HeartIconOut } from '@heroicons/react/outline'
import useAuth from '../../../hooks/useAuth'

const CardForum = ({ value, toggleIcon }) => {
    const { authInfo } = useAuth()

    // console.log(value.like)

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

                            <button key={value.id} onClick={toggleIcon}
                                className="text-sm flex font-semibold">

                                {(Object.keys(value.like).length > 0 && value.like.map((id) => id.user_id === authInfo.id))
                                    ? (
                                        <>
                                            <HeartIcon className='h-5 w-5 text-blue-600/60 mr-1 ' />
                                        </>
                                    )
                                    : (
                                        <>
                                            <HeartIconOut className='h-5 w-5 text-blue-600/60 mr-1 ' />
                                        </>
                                    )
                                }

                                <span className="hover:underline">
                                    {(Object.values(value.like).includes(authInfo.id))
                                        ? "Unlike"
                                        : "Like"}
                                </span>
                                <span className='text-gray-400 ml-2'>( {Object.keys(value.like).length} )</span>

                            </button>
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