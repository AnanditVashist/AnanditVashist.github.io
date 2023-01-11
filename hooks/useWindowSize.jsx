import { useEffect, useState } from "react";
export const useWindowSize = () => {
	const [windowSize, setWindowSize] = useState({
		height: undefined,
		width: undefined,
	});

	const handleResize = () => {
		setWindowSize({
			height: window.innerHeight,
			width: window.innerWidth,
		});
	};
	useEffect(() => {
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return windowSize;
};
