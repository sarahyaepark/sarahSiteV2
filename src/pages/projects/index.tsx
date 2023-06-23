import Image from 'next/image';

export default function Projects() {
	return (
		<div className="flex flex-col items-center gap-10">
			<h1>Projects</h1>
			<div className="flex flex-col items-center text-center gap-5 w-7/12 text-sm">
				<div className="flex flex-col items-center gap-2">
					<div className="text-center">
						<h2 className="font-bold text-lg">Expunge Assist</h2>
						<h2>
							<i>
								Expunge Assist aims to help people in California with criminal
								records accomplish record clearance, expungement or reduction
								and subsequently a second chance as a part of society.
							</i>
						</h2>
					</div>
					<a href="https://github.com/sarahyaepark/unwindPWA">
						<Image
							src="/images/github.png"
							width={25}
							height={25}
							alt="Github logo"
						/>
					</a>
					<ul>
						<li>
							<h5>TypeScript/JavaScript/React</h5>
						</li>
					</ul>
				</div>
				<div className="flex flex-col items-center gap-2">
					<div className="text-center">
						<h2 className="font-bold text-lg">Unwind</h2>
						<h2>
							<i>
								A nightly ritual self-care PWA to log users’ daily moods and
								self-care goals to improve mental wellness
							</i>
						</h2>
					</div>
					<a href="https://github.com/sarahyaepark/unwindPWA">
						<Image
							src="/images/github.png"
							width={25}
							height={25}
							alt="Github logo"
						/>
					</a>
					<ul>
						<li>
							<h5>Backend: PostgreSQL/Node/GraphQL/Express/Sequelize</h5>
						</li>
						<li>
							<h5>Frontend: React/Redux/D3</h5>
						</li>
					</ul>
				</div>
				<div className="flex flex-col items-center gap-2">
					<div className="text-center">
						<h2 className="font-bold text-lg">Givhub</h2>
						<h2>
							<i>
								Progressive Web Application that streamlines the food donation
								process by matching couriers to donors to deliver the donations
								directly to the food banks.
							</i>
						</h2>
					</div>
					<a href="https://github.com/UnicornsIncluded/Givhub">
						<Image
							src="/images/github.png"
							width={25}
							height={25}
							alt="Github logo"
						/>
					</a>
					<ul>
						<li>
							<h5>Backend: MongoDB/Node/Express</h5>
						</li>
						<li>
							<h5>Frontend: React/Redux/SocketIO</h5>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
