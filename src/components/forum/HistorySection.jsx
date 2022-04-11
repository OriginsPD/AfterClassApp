const activityItems = [
    { project: 'Workcation', commit: '2d89f0c8', environment: 'production', time: '1h' },
    // More items...
]

const HistorySection = () => {
    return (
        <div className="bg-gray-50 pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0">
            <div className="pl-6 lg:w-80">
                <div className="pt-6 pb-2">
                    <h2 className="text-sm font-semibold">Discussion Activity</h2>
                </div>
                <div>
                    <ul role="list" className="divide-y divide-gray-200">
                        {activityItems.map((item) => (
                            <li key={item.commit} className="py-4">
                                <div className="flex space-x-3">
                                    <img
                                        className="h-6 w-6 rounded-full"
                                        src="https://pbs.twimg.com/profile_images/1043124708135202816/NPFBvLtb_400x400.jpg"
                                        alt=""
                                    />
                                    <div className="flex-1 space-y-1">
                                        <div className="flex items-center justify-between">
                                            <h3 className="text-sm font-medium">You</h3>
                                            <p className="text-sm text-gray-500">{item.time}</p>
                                        </div>
                                        <p className="text-sm text-gray-500">
                                            Deployed {item.project} ({item.commit} in master) to {item.environment}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                    <div className="py-4 text-sm border-t border-gray-200">
                        <a href="#" className="text-indigo-600 font-semibold hover:text-indigo-900">
                            View all activity <span aria-hidden="true">&rarr;</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HistorySection