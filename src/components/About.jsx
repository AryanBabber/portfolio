import React, { useEffect } from "react";
import { BookOpenIcon } from "@heroicons/react/outline";

const About = () => {
	return (
		<div
			className="bg-slate-700 h-screen flex flex-col items-center"
			name="about"
		>
			<h1 className="text-white text-3xl md:text-5xl pt-6">About</h1>
			<div className="flex gap-5 justify-center items-center w-[80%]">
				<div className="h-[3px] rounded w-[32%] bg-white mt-3 md:mt-8"></div>
				<BookOpenIcon className="w-8 text-white mt-3 md:mt-8" />
				<div className="h-[3px] rounded w-[32%] bg-white mt-3 md:mt-8"></div>
			</div>

            <div className="text-white text-md lg:text-2xl bg-slate-600 h-[70%] w-[90%] md:w-[80%] mt-10 rounded-xl p-6">
                <p>
                Hey, I am Aryan Babber. I am a Front end Developer who is also in 2<sup>nd</sup> year of BCA. I code in HTML, CSS and JS along with the libraries that come along with it like React & Tailwind, both of which are used to build this. I believe in Googling the problems and finding the answers on Google itself since its an ocean of solutions. Another Reason is the fact that Googling a problem is a skill on its own since one must know what to search for. And as for Programming, it all started on June 2021 right after my school was over.
                </p>
                <div className="mt-4">My hobbies are:</div>
                <ul>
                    <li className="ml-6 before:content-['👉']"> Going out for a walk</li>
                    <li className="ml-6 before:content-['👉']"> Coding</li>
                    <li className="ml-6 before:content-['👉']"> Gym</li>
                </ul>
                <p className="mt-6">
                    This is just a start and I believe that this journey will only go up and beyond. I also contribute towards open source projects often.
                </p>
            </div>
		</div>
	);
};

export default About;
