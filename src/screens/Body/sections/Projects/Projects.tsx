import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "../../../../components/ui/carousel";
import quicklearnAiImg from "../../../../assets/projects/quicklearn-ai.png";
import bunkerBabaImg from "../../../../assets/projects/bunker-baba.png";
import chessImg from "../../../../assets/projects/chess.png";

const projects = [
    {
        id: 1,
        category: "AI Education",
        title: "QuickLearnAI\nAI-Powered Learning Assistant",
        image: quicklearnAiImg,
        href: "https://youtu.be/y3qxYzujYoc",
    },
    {
        id: 2,
        category: "Education Tools",
        title: "Bunker Baba\nBunk Calculator",
        image: bunkerBabaImg,
        href: "https://bunker-baba.netlify.app/",
    },
    {
        id: 3,
        category: "Game Development",
        title: "The Java Rook\nChess Implementation",
        image: chessImg,
        href: "https://github.com/prem048/The-Java-Rook",
    },
];

export const DivWrapperByAnima = (): JSX.Element => {
    const handleViewAllProjects = () => {
        window.location.href = '/portfolio';
    };

    return (
        <motion.section
            className="flex flex-col w-full items-start px-4 md:px-8 lg:px-16 xl:px-0 max-w-7xl mx-auto py-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
        >
            <div className="flex w-full items-center justify-between mb-16">
                <motion.h2
                    className="text-[45px] leading-[45px] font-bold tracking-[4px] bg-gradient-to-r from-[rgba(177,108,234,1)] via-[rgba(255,94,105,1)] to-[rgba(255,168,75,1)] bg-clip-text text-transparent [font-family:'Inter',Helvetica]"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    PORTFOLIO
                </motion.h2>

                <motion.button
                    onClick={handleViewAllProjects}
                    className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[rgba(177,108,234,1)] to-[rgba(255,94,105,1)] text-white rounded-full hover:shadow-lg transition-all duration-300 group"
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    <span className="font-medium">View All Projects</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </motion.button>
            </div>

            <Carousel className="w-full">
                <CarouselContent>
                    {projects.map((project) => (
                        <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3">
                            <motion.div
                                className="relative overflow-hidden rounded-xl group cursor-pointer h-[400px]"
                                whileHover={{ scale: 1.02 }}
                                transition={{ duration: 0.3 }}
                                onClick={() => window.open(project.href, '_blank')}
                            >
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-72 object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                                <div className="absolute bottom-6 left-6 right-6">
                                    <p className="text-[rgba(255,94,105,1)] text-sm font-medium mb-2">
                                        {project.category}
                                    </p>
                                    <h3 className="text-white text-xl font-bold leading-tight whitespace-pre-line">
                                        {project.title}
                                    </h3>
                                </div>
                            </motion.div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </motion.section>
    );
};
