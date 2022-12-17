import React from "react";
import { XIcon, MenuIcon } from "@heroicons/react/outline";
import { Link } from "react-scroll";

const Navbar = ({ menuBtn, handleMenu }) => {
	return (
		<div className="h-[100px] text-white flex md:justify-center items-center px-6 ">
			{/* Navbar */}
			<div className="hidden md:flex">
				<ul className="flex w-[40vw] justify-between">
					<div className="flex flex-col items-center group">
						<Link to='about' smooth={true} offset={50} duration={300} className="text-2xl cursor-pointer text-slate-400 group-hover:text-slate-300">
							About
						</Link>
						{/* <li className="text-2xl cursor-pointer text-slate-400 group-hover:text-slate-300">About</li> */}
						<div className="w-4 h-[2px] my-1 group-hover:w-16 bg-slate-400 group-hover:bg-slate-300"></div>
					</div>

					<div className="flex flex-col items-center group">
						<li className="text-2xl cursor-pointer text-slate-400 group-hover:text-slate-300">Projects</li>
						<div className="w-4 h-[2px] my-1 group-hover:w-16 bg-slate-400 group-hover:bg-slate-300"></div>
					</div>

					<div className="flex flex-col items-center group">
						<li className="text-2xl cursor-pointer text-slate-400 group-hover:text-slate-300">Socials</li>
						<div className="w-4 h-[2px] my-1 group-hover:w-16 bg-slate-400 group-hover:bg-slate-300"></div>
					</div>
				</ul>
			</div>
			<div
				className="md:hidden absolute right-6"
				onClick={handleMenu}
			>
				{/* Mobile Version */}
				{menuBtn ? <MenuIcon className="w-8" /> : <XIcon className="w-8" />}
			</div>
		</div>
	);
};

export default Navbar;
