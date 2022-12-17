import React, { useEffect } from "react";
import profileImg from '../assets/profile_img.png'

const Hero = () => {
	useEffect(()=> {
		setTimeout(() => {
			const slogan = document.getElementById('friendly-dev')
			slogan.classList.remove('translate-y-96')
			slogan.classList.add('translate-y-24')
			const profile = document.getElementById('profileImg')
			profile.classList.remove('translate-y-48')
			profile.classList.add('translate-y-12')
		}, 100)
	}, [])
	return (
		<div className="flex flex-col md:flex-row justify-between px-10 w-full mb-28 md:mb-40">
			<h1 className="pt-24 pb-0 text-slate-200 text-3xl lg:text-5xl transition-transform translate-y-96 duration-1000" id="friendly-dev">Your Friendly Neighbourhood Developer</h1>
			<img src={profileImg} alt="profile" className="py-20 transition-all h-[350px] w-[275px] lg:h-[700px] lg:w-[600px] translate-y-48 duration-1000 px-10" id="profileImg" />
		</div>
	);
};

export default Hero;
