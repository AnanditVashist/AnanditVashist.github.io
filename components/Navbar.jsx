import React from "react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { useWindowSize } from "../hooks/useWindowSize";
const Navbar = () => {
	const { height, width } = useWindowSize();

	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const isHidden = isMenuOpen ? "" : "hidden";
	const windowLargerThanMedium = width > 768 ? "block" : isHidden;
	return (
		<>
			<button
				className="md:hidden"
				onClick={() => {
					setIsMenuOpen(!isMenuOpen);
				}}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-10 h-10">
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>
			<div
				className={`flex flex-col md:flex-row mt-6 ml-24 ${windowLargerThanMedium}`}>
				<NavItems></NavItems>
			</div>
		</>
	);
};

const navOptions = ["Home", "About", "Contact"];

const NavItems = ({}) => {
	const router = useRouter();
	return (
		<>
			{navOptions.map((item, i) => {
				const isCurrentPage = router.pathname == item ? "bg-blue-600" : null;
				return (
					<button
						key={i}
						className={`m-2.5 mr-5 p-3 px-5 rounded-lg text-xl   font-bold text-slate-700 hover:bg-blue-500 hover:text-white
							${isCurrentPage}
						`}>
						<Link href={`/${ifHomeRemoveName(item)}`}>{item}</Link>
					</button>
				);
			})}
		</>
	);
};
export default Navbar;

//using items array to pass to URL but 'Home' is at '/' therefore removing it in case the item is 'Home'
function ifHomeRemoveName(item) {
	if (item === "Home") {
		return "";
	}
	return item;
}
