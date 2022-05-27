/* eslint-disable no-unreachable */
import React from "react";
import "boxicons";

function Hero() {
	interface SocialProps {
		url: string;
		logo: string;
	}

	function Social({ url, logo }: SocialProps) {
		return (
			<div className="flex flex-row flex-nowrap place-content-center items-center h-20 w-20 rounded-full bg-amber-50">
				<a href={url}>
					<box-icon type="logo" name={logo}></box-icon>
				</a>
			</div>
		);
	}

	return (
		<div
			id="shirt"
			className="flex flex-row flex-wrap md:flex-nowrap box-border min-h-screen font-sans text-lg bg-gradient-to-b from-blue-400 to-blue-600 justify-around"
		>
			<div
				id="nametag"
				className="h-52 w-96 z-30 bg-red-600 rounded-lg text-amber-50 my-40 mx-18"
			>
				<h3 className="z-40 text-center">Hi, My Name Is...</h3>
				<div id="textbox" className="h-3/4 z-50 bg-amber-50">
					<h2 className="z-60 text-black font-scrawl font-medium text-9xl text-center">
						Kat
					</h2>
				</div>
			</div>
			<div
				id="pocket"
				className="flex flex-row flex-nowrap h-52 w-96 z-30 my-40 mx-32"
			>
				<Social
					url="www.linkedin.com/in/kathleen-metcalf-07b875187"
					logo="'linkedin-square'"
				/>
				<Social url="https://github.com/kemetcalf" logo="" />
				<Social
					url="https://app.netlify.com/teams/kemetcalf/overview"
					logo=""
				/>
			</div>
		</div>
	);
}

export default Hero;
