import React, { useState } from "react";
import Hero from "./Hero";

import Navbar from "./Navbar";

const Main = () => {
	const [menuBtn, setMenuBtn] = useState(true);

	function handleMenu() {
		setMenuBtn((p) => !p);
	}
	return (
		<div className="bg-gradient-to-br from-[#374155] to-[#1f313b] h-screen">
			{/* Main */}
			<Navbar menuBtn={menuBtn} handleMenu={handleMenu} />
			<Hero />
		</div>
	);
};

export default Main;
