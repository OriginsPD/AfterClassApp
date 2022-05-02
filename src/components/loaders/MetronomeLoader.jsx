import { Ping } from "@uiball/loaders";

const MetronomeLoader = () => {
	return (
		<div className=" flex h-[25rem] w-full items-center justify-center bg-white">
			<Ping size={80} speed={1.6} color="blue" />
		</div>
	);
};

export default MetronomeLoader;
