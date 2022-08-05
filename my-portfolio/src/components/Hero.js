/* eslint-disable no-unreachable */
import React from "react";
import About from "./About";

function Hero() {
	function Social({ url, logo, skew }) {
		return (
			<div className={skew}>
				<a href={url} className="grid grid-cols-1 place-items-center">
					<i className={logo}></i>
				</a>
			</div>
		);
	}

	return (
		<div
			id="shirt"
			className=" min-h-screen min-w-full font-sans text-lg bg-gradient-to-b from-blue-400 to-blue-600 justify-around "
		>
			<div className="shirt-content container w-full place-content-evenly box-border">
				<div className="nametag-button-container flex flex-row flex-nowrap items-center">
					<div
						id="nametag"
						className="flex-initial h-52 w-96 z-30 bg-red-600 rounded-lg text-amber-50 my-40 mx-18  shadow-md shadow-slate-600/75 scale-125 origin-top-right -rotate-6"
					>
						<h3 className="z-40 text-center ">Hi, My Name Is...</h3>
						<div id="textbox" className="h-3/4 z-50 bg-amber-50">
							<h2 className="z-60 text-black font-scrawl font-medium text-9xl text-center  scale-125">
								Kat
							</h2>
						</div>
					</div>
					<div
						id="buttons"
						className="flex-initial flex flex-row flex-nowrap h-3/4 w-1/4 z-30 my-40 mx-18 place-items-center justify-around origin-top-right rotate-6"
					>
						<Social
							url="https://www.linkedin.com/in/kathleen-metcalf-07b875187"
							logo="bx bxl-linkedin-square bx-lg bx-tada-hover text-blue-700 scale-110"
							skew="flex-none grid grid-cols-1 place-items-center h-20 w-20 rounded-full bg-amber-50 shadow-2xl shadow-blue-900 -rotate-12  bg-gradient-to-b from-amber-50 to-stone-300"
						/>
						<Social
							url="https://github.com/kemetcalf"
							logo="bx bxl-github bx-lg bx-tada-hover text-fuchsia-700 scale-150"
							skew="flex-none grid grid-cols-1 place-items-center h-28 w-28 rounded-full bg-amber-50 shadow-2xl shadow-blue-900 origin-top-left rotate-12  bg-gradient-to-b from-amber-50 via-stone-100 to-stone-400/75"
						/>
						<Social
							url="https://app.netlify.com/teams/kemetcalf/overview"
							logo="bx bxl-netlify bx-lg bx-tada-hover text-sky-400 scale-150"
							skew="flex-none grid grid-cols-1 place-items-center h-24 w-24 rounded-full bg-amber-50  shadow-2xl shadow-blue-900 origin-bottom-left -rotate-12 bg-gradient-to-b from-amber-50 via-stone-100 to-stone-300"
						/>
					</div>
				</div>
				<div className="biz-card-wrapper flex flex-row justify-center">
					<About className="" />
				</div>
			</div>
		</div>
	);
}

export default Hero;
