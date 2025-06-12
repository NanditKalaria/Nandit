import { motion, useScroll, useSpring } from "framer-motion";
import { BannerByAnima } from "./sections/NavBar";
import { ContainerByAnima } from "./sections/Hero";
import { ContainerWrapperByAnima } from "./sections/Skills";
import { DivByAnima } from "./sections/WorkExperience";
import { DivWrapperByAnima } from "./sections/Projects";
// Importing ParagraphByAnima component from Experience section
import { ParagraphByAnima } from "./sections/Experience/Experience";
// Importing CodingStats component from CodingStats section
import { CodingStats } from "./sections/CodingStats/CodingStats";
// Importing AchievementsByAnima component from Achievements section
import { AchievementsByAnima } from "./sections/Achievements";

export const Body = (): JSX.Element => {
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
    <div className="flex flex-col w-full bg-background-light dark:bg-background-dark text-huggingfacecoblack dark:text-huggingfacecowhite relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-[rgba(177,108,234,1)] via-[rgba(255,94,105,1)] to-[rgba(255,168,75,1)] transform origin-left z-50"
        style={{ scaleX }}
      />
      {/* Banner Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <BannerByAnima />
      </motion.div>

      {/* First Content Section */}
      <section className="w-full flex flex-col items-center">
        <div className="w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ContainerByAnima />
          </motion.div>

          <ContainerWrapperByAnima />
          <DivWrapperByAnima />
          <CodingStats githubUsername="nandit27" leetcodeUsername="23IT065" />
          <AchievementsByAnima />
        </div>
      </section>

      {/* Second Content Section */}
      <section className="w-full">
        <ParagraphByAnima />
      </section>

      {/* Third Content Section */}
      <DivByAnima />

      {/* Footer Section */}
      <footer className="flex flex-col w-full bg-footerbg pt-20 pb-32">
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

            <a
              href="mailto:nanditkalaria27@gmail.com"
              className="text-[20px] text-white/60 hover:text-white transition-all duration-300 hover:scale-105 mb-24"
            >
              nanditkalaria27@gmail.com
            </a>

            <div className="flex gap-12">
              {footerLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
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
    </div>
  );
};
