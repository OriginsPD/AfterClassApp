import { useState } from "react";

const useToggle = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleModal = () => {
		setIsOpen(() => !isOpen);
	};

	return { isOpen, toggleModal };
};

export default useToggle;
