import { motion } from "framer-motion";
import { Card, CardContent } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

// Work experience data
const workExperiences = [
	{
		company: "CodeMate.ai",
		industry: "GenAI",
		role: "Software Developement Intern",
		period:" May 2025 - Present"
	}
];

// Education data
const educations = [
	{
		institution: "Charotar University of Science and Technology",
		degree: "B.Tech Information Technology",
		period: "2023-Present | CGPA: 9.74",
	},
];

// Animation variants
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const titleVariants = {
	hidden: { opacity: 0, x: -20 },
	visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const cardHoverVariants = {
	initial: { scale: 1, boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)" },
	hover: {
		scale: 1.02,
		boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
		transition: { duration: 0.3 },
	},
};

export const DivByAnima = (): JSX.Element => {
	return (
		<motion.section
			className="flex flex-col w-full items-center py-16"
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 0.6 }}
			viewport={{ once: true }}
		>
			<div className="relative max-w-[1215px] w-full">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					{/* Work Experience Column */}
					<motion.div
						className="flex flex-col"
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
					>
						<motion.h2
							className="font-bold text-huggingfacecoblack text-[33.6px] leading-9 mb-8"
							variants={titleVariants}
						>
							💼 Work Experience
						</motion.h2>

						{workExperiences.map((job, index) => (
							<motion.div
								key={index}
								variants={itemVariants}
								whileHover="hover"
								initial="initial"
							>
								<motion.div variants={cardHoverVariants}>
									<Card className="mb-6 border-none shadow-none hover:shadow-md transition-all duration-300">
										<CardContent className="p-0">
											<div className="pl-5 mb-4">
												<h3 className="font-medium text-huggingfacecoblack text-[23.6px] leading-[26.4px] mt-2">
													{job.company}
													<br />
													<span className="bg-gradient-to-r from-[rgba(177,108,234,0.7)] via-[rgba(255,94,105,0.7)] to-[rgba(255,168,75,0.7)] bg-clip-text text-transparent text-huggingfacecoblack">
														{job.industry}
													</span>
												</h3>

												<p className="font-medium text-huggingfacecoblack text-base leading-[20.8px] mt-4">
													{job.role}
												</p>

												<p className="font-medium text-huggingfacecoblack text-[15.5px] leading-[20.8px] mt-4">
													{job.period}
												</p>
											</div>
											<Separator className="bg-justinhinhwebflowiomercury" />
										</CardContent>
									</Card>
								</motion.div>
							</motion.div>
						))}
					</motion.div>

					{/* Education Column */}
					<motion.div
						className="flex flex-col"
						variants={containerVariants}
						initial="hidden"
						whileInView="visible"
						viewport={{ once: true, margin: "-100px" }}
					>
						<motion.h2
							className="font-bold text-huggingfacecoblack text-[32.7px] leading-9 mb-8"
							variants={titleVariants}
						>
							📚 Education
						</motion.h2>

						{educations.map((edu, index) => (
							<motion.div
								key={index}
								variants={itemVariants}
								whileHover="hover"
								initial="initial"
							>
								<motion.div variants={cardHoverVariants}>
									<Card className="mb-6 border-none shadow-none hover:shadow-md transition-all duration-300">
										<CardContent className="p-0">
											<div className="pl-5 mb-4">
												<h3 className="font-medium text-huggingfacecoblack text-[23px] leading-[26.4px] mt-2">
													{edu.institution}
												</h3>

												<p className="font-medium text-huggingfacecoblack-60 text-[15.75px] leading-[20.8px] mt-2">
													<span className="bg-gradient-to-r from-[rgba(177,108,234,0.7)] via-[rgba(255,94,105,0.7)] to-[rgba(255,168,75,0.7)] bg-clip-text text-transparent">
														{edu.degree} <br />
														{edu.period}
													</span>
													<br />
													
												</p>
											</div>
											<Separator className="bg-justinhinhwebflowiomercury" />
										</CardContent>
									</Card>
								</motion.div>
							</motion.div>
						))}
					</motion.div>
				</div>
			</div>
		</motion.section>
	);
};