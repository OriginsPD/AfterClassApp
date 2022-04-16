import React from "react";

const Inbox = () => {
	return (
		<>
			<section class="flex h-screen w-4/12 flex-col overflow-y-auto bg-gray-50 pt-3 scrollbar-hide">
				<label class="px-3">
					<input
						class="w-full rounded-lg bg-gray-100 p-4 transition duration-200 focus:outline-none focus:ring-2"
						placeholder="Search..."
					/>
				</label>

				<ul class="mt-6">
					<li class="border-b py-5 px-3 transition hover:bg-indigo-100">
						<a href="#" class="flex items-center justify-between">
							<h3 class="text-lg font-semibold">Akhil Gautam</h3>
							<p class="text-md text-gray-400">23m ago</p>
						</a>
						<div class="text-md italic text-gray-400">
							You have been invited!
						</div>
					</li>
					<li class="border-b py-5 px-3 transition hover:bg-indigo-100">
						<a href="#" class="flex items-center justify-between">
							<h3 class="text-lg font-semibold">Akhil Gautam</h3>
							<p class="text-md text-gray-400">23m ago</p>
						</a>
						<div class="text-md italic text-gray-400">
							You have been invited!
						</div>
					</li>
					<li class="border-b py-5 px-3 transition hover:bg-indigo-100">
						<a href="#" class="flex items-center justify-between">
							<h3 class="text-lg font-semibold">Akhil Gautam</h3>
							<p class="text-md text-gray-400">23m ago</p>
						</a>
						<div class="text-md italic text-gray-400">
							You have been invited!
						</div>
					</li>
					<li class="border-b py-5 px-3 transition hover:bg-indigo-100">
						<a href="#" class="flex items-center justify-between">
							<h3 class="text-lg font-semibold">Akhil Gautam</h3>
							<p class="text-md text-gray-400">23m ago</p>
						</a>
						<div class="text-md italic text-gray-400">
							You have been invited!
						</div>
					</li>
					<li class="border-b bg-indigo-600 py-5 px-3 text-white">
						<a href="#" class="flex items-center justify-between">
							<h3 class="text-lg font-semibold">Akhil Gautam</h3>
							<p class="text-md">23m ago</p>
						</a>
						<div class="text-md">You have been invited!</div>
					</li>
					<li class="border-b py-5 px-3 transition hover:bg-indigo-100">
						<a href="#" class="flex items-center justify-between">
							<h3 class="text-lg font-semibold">Akhil Gautam</h3>
							<p class="text-md text-gray-400">23m ago</p>
						</a>
						<div class="text-md italic text-gray-400">
							You have been invited!
						</div>
					</li>
					<li class="border-b py-5 px-3 transition hover:bg-indigo-100">
						<a href="#" class="flex items-center justify-between">
							<h3 class="text-lg font-semibold">Akhil Gautam</h3>
							<p class="text-md text-gray-400">23m ago</p>
						</a>
						<div class="text-md italic text-gray-400">
							You have been invited!
						</div>
					</li>
				</ul>
			</section>
			<section class="flex h-screen w-10/12 flex-col rounded-r-3xl bg-white px-3 px-4">
				<div class="mb-8 flex h-full items-center justify-between border-b-2">
					<div class="flex items-center space-x-4">
						<div class="h-12 w-12 overflow-hidden rounded-full">
							<img
								src="https://bit.ly/2KfKgdy"
								loading="lazy"
								class="h-full w-full object-cover"
							/>
						</div>
						<div class="flex flex-col">
							<h3 class="text-lg font-semibold">Akhil Gautam</h3>
							<p class="text-light text-gray-400">akhil.gautam123@gmail.com</p>
						</div>
					</div>
					<div>
						<ul class="flex space-x-4 text-gray-400">
							<li class="h-6 w-6">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
									/>
								</svg>
							</li>
							<li class="h-6 w-6">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
									/>
								</svg>
							</li>

							<li class="h-6 w-6">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z"
									/>
								</svg>
							</li>
							<li class="h-6 w-6">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
									/>
								</svg>
							</li>
							<li class="h-6 w-6">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
									/>
								</svg>
							</li>
						</ul>
					</div>
				</div>
				<section>
					<h1 class="text-2xl font-bold">We need UI/UX designer</h1>
					<article class="mt-8 leading-7 tracking-wider text-gray-500">
						<p>Hi Akhil,</p>
						<p>
							Design and develop enterprise-facing UI and consumer-facing UI as
							well as REST API backends.Work with Product Managers and User
							Experience designers to create an appealing user experience for
							desktop web and mobile web.
						</p>
						<footer class="mt-12">
							<p>Thanks & Regards,</p>
							<p>Alexandar</p>
						</footer>
					</article>
					<ul class="mt-12 flex space-x-4">
						<li class="h-10 w-10 cursor-pointer rounded-lg border p-1 text-indigo-600 transition duration-200 hover:bg-blue-100">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="1"
									d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
								/>
							</svg>
						</li>
						<li class="h-10 w-10 cursor-pointer rounded-lg border p-1 text-blue-800 transition duration-200 hover:bg-blue-100">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="1"
									d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
								/>
							</svg>
						</li>
						<li class="h-10 w-10 cursor-pointer rounded-lg border p-1 text-pink-400 transition duration-200 hover:bg-blue-100">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="1"
									d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
								/>
							</svg>
						</li>
						<li class="h-10 w-10 cursor-pointer rounded-lg border p-1 text-yellow-500 transition duration-200 hover:bg-blue-100">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="1"
									d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
								/>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
								/>
							</svg>
						</li>
					</ul>
				</section>
				<section class="mt-6 mb-3 rounded-xl border bg-gray-50">
					<textarea
						class="w-full rounded-xl bg-gray-50 p-2"
						placeholder="Type your reply here..."
						rows="3"
					></textarea>
					<div class="flex items-center justify-between p-2">
						<button class="h-6 w-6 text-gray-400">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
								/>
							</svg>
						</button>
						<button class="rounded-xl bg-purple-600 px-6 py-2 text-white">
							Reply
						</button>
					</div>
				</section>
			</section>
		</>
	);
};

export default Inbox;
