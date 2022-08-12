function About() {
	return (
		<div className="box-border items-center max-h-min flex flex-row">
			{/* <!-- Card 1 --> */}
			<card className="box-border bg-white border-gray-200 border-2 rounded-xl py-7 px-5 shadow-lg shadow-slate-600/75 origin-top-right rotate-6">
				<div className="grid grid-cols-6 grid-rows-1 min-w-max">
					{/* <!-- Image --> */}
					<div className="col-span-2">
						<img
							src="https://events.duolingo.com/images/why_global.svg"
							alt="some img"
						/>
					</div>

					{/* <!-- Description --> */}
					<div className="col-span-4 ">
						<div className="font-scrawl text-4xl"></div>
						<h2 className="text-gray-700 font-bold">Kathleen Metcalf</h2>

						<div className="text-gray-500 mt-2">
							<h3>Frontend Developer</h3>
							<h4>Contact Info</h4>
							<div className="contact-details pl-4">
								<p>kat@katmetcalf.com</p>
								<p>
									<a
										href="www.linkedin.com/in/kathleen-metcalf-07b875187"
										className="text-blue-700"
									>
										LinkedIn
									</a>
								</p>
								<p>
									<a
										href="https://github.com/kemetcalf"
										className="text-fuchsia-700"
									>
										GitHub
									</a>
								</p>
								<p>
									<a
										href="https://app.netlify.com/teams/kemetcalf/overview"
										className="text-sky-400"
									>
										Netlify
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</card>
		</div>
	);
}

export default About;
