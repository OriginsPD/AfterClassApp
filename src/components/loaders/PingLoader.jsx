import { Ping } from "@uiball/loaders";

const PingLoader = () => {
	return (
		<div className="absolute inset-0 z-10 flex w-full items-center justify-center bg-white">
			<Ping size={80} speed={2} color="blue" />
		</div>
	);
};

export default PingLoader;
