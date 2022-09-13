import React from "react";
import harborHeadshotResized from "..//assets/harborHeadshotResized.avif";

function About() {
	console.log(harborHeadshotResized);
	return (
		<div className="box-border items-center max-h-max flex mt-5 ml-16">
			{/* <!-- Card 1 --> */}
			<div className="box-border bg-white border-gray-200 border-2 rounded-xl py-7 pl-5 pr-8 shadow-lg shadow-slate-600/75 origin-top-right rotate-6">
				<div className="grid grid-row grid-cols-4 grid-flow-row gap-4 ">
					{/* <!-- Image --> */}
					<div className="smol-box place-self-center col-span-2 rounded-full overflow-hidden w-36 h-36 border-4 border-lime-300">
						<img
							src={harborHeadshotResized}
							alt="pale woman with hair up"
							className="object-cover object-bottom scale-125 translate-y-4 rounded-full text-xs whitespace-normal"
						/>
					</div>

					{/* <!-- Description --> */}
					<div className="col-start-3 col-end-6">
						<div className="font-scrawl text-4xl"></div>
						<h2 className="text-gray-800 font-bold">Kathleen Metcalf</h2>

						<div className="text-gray-700 mt-2">
							<h3>Frontend Developer</h3>
							<h4>Contact Info</h4>
							<div className="contact-details pl-4">
								<p>kat@katmetcalf.com</p>
								<p>
									<a
										href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
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
										className="text-sky-600"
									>
										Netlify
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default About;
