import { motion, useScroll, useSpring, AnimatePresence } from "framer-motion";
import { BannerByAnima } from "../Body/sections/NavBar/NavBar";
import ProjectCard from '../../components/ProjectCard';

// Update projects data with your projects
const projects = [
    {
        category: "QuickLearnAI",
        title: "AI-Powered Learning Assistant",
        image: "src/assets/projects/quicklearn-ai.png", // Add your project image
        description: "Educational platform using LangChain and MERN stack",
        href: "https://youtu.be/y3qxYzujYoc",
    },
    {
        category: "Neural Flow",
        title: "Complete AI Automation",
        image: "src/assets/projects/neuralflow.png", // Add your project image
        description: "AI automation from Jira tasks to deployed links",
        href: "https://youtu.be/jItTasCJciE",
    },
    {
        category: "Bunker Baba",
        title: "Bunk Calculation Tool",
        image: "src/assets/projects/bunker-baba.png", // Add your project image
        description: "OCR-based attendance tracking system",
        href: "https://bunker-baba.netlify.app/",
    },
    {
        category: "The Java Rook",
        title: "Chess Game Implementation",
        image: "src/assets/projects/chess.jpeg", // Add your project image
        description: "Java-based chess game with core OOP concepts",
        href: "https://github.com/prem048/The-Java-Rook",
    },
];

export const Portfolio = (): JSX.Element => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const footerLinks = [
        { text: "GitHub", href: "https://github.com/nandit27" },
        {
            text: "LinkedIn",
            href: "https://www.linkedin.com/in/nandit-kalaria-06281631a",
        },
        {
            text: "Resume",
            href: "https://drive.google.com/file/d/1Neoog7Qk0GZC-XA8JYzVTsff58GS4VFm/view?usp=drive_link",
        },
    ];

    return (
        <div className="relative min-h-screen dark:bg-black bg-white ">
            {/* Progress Bar */}
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[rgba(177,108,234,1)] via-[rgba(255,94,105,1)] to-[rgba(255,168,75,1)] transform origin-left z-50"
                style={{ scaleX }}
            />
            <BannerByAnima />
            
            <main className="container mx-auto max-w-4xl px-4 py-16 ">
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl font-bold text-center mb-16 dark:text-white text-gray-900"
                >
                    Featured Projects
                </motion.h1>

                <div className="space-y-24 pb-16 pt-16">
                    <AnimatePresence>
                        {projects.map((project, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -50 }}
                                transition={{ duration: 0.6, delay: index * 0.2 }}
                            >
                                <ProjectCard {...project} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </main>

            {/* Footer Section */}
            <footer className="flex flex-col w-full bg-black pt-16 pb-16 border-solid border-t-[1px] border-[rgba(255,255,255,0.1)]">
                <div className="max-w-[1215px] mx-auto w-full px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="flex flex-col items-center"
                    >
                        <h2 className="text-[52.1px] font-bold tracking-[0.50px] leading-[59.4px] text-center bg-gradient-to-r from-[rgba(177,108,234,1)] via-[rgba(255,94,105,1)] to-[rgba(255,168,75,1)] bg-clip-text text-transparent mb-16 hover:scale-105 transition-transform duration-300 cursor-pointer">
                            Let's get in touch!
                        </h2>

                        <motion.a
                            href="mailto:nanditkalaria27@gmail.com"
                            className="text-[20px] text-white/60 hover:text-white transition-all duration-300 hover:scale-105 mb-24"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            nanditkalaria27@gmail.com
                        </motion.a>

                        <div className="flex gap-12">
                            {footerLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[20px] text-white hover:text-white/80 transition-all duration-300 relative after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-0 after:left-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {link.text}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </footer>

            <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-[rgba(177,108,234,1)] to-[rgba(255,94,105,1)] rounded-full text-white shadow-lg transition-transform z-50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                ↑
            </motion.button>
        </div>
    );
};