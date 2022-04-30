export const TabTitle = (newTitle) => {
	return (document.title = newTitle);
};

export const documentBody = () => {
	return (document.body.className = "scrollbar-hide");
};
