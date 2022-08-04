import React from "react";

function About() {
	return (
		<div className="h-screen flex flex-col gap-5 items-center justify-center bg-white">
			{/* <!-- Card 1 --> */}
			<card className="w-2/3 box-border border-gray-300 border-2 rounded-xl py-7 px-5">
				<div className="grid grid-cols-6 grid-rows-1  gap-3">
					{/* <!-- Image --> */}
					<div className="col-span-2">
						<img
							src="https://events.duolingo.com/images/why_global.svg"
							alt="some img"
						/>
					</div>

					{/* <!-- Description --> */}
					<div className="col-span-4">
						<h2 className="text-gray-700 font-bold">Kathleen Metcalf</h2>

						<div className="text-gray-500 mt-4">
							{" "}
							<h3>Frontend Developer</h3>
							<h4>Contact Info</h4>
							<p>Email: kemetcalf3.14@gmail.com</p>
							<p>
								<a href="www.linkedin.com/in/kathleen-metcalf-07b875187">
									LinkedIn
								</a>
							</p>
							<p>
								<a href="https://github.com/kemetcalf">GitHub</a>
							</p>
							<p>
								<a href="https://app.netlify.com/teams/kemetcalf/overview">
									Netlify
								</a>
							</p>
						</div>
					</div>
				</div>
			</card>

			<div classNameName="font-scrawl text-4xl"></div>
		</div>
	);
}

export default About;
