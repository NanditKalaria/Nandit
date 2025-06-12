import { motion } from "framer-motion";
import { useTheme } from "../../../../components/ThemeProvider";
import { FaGithub } from "react-icons/fa";
import {FaCode} from "react-icons/fa";
import React from "react";

interface CodingStatsProps {
  githubUsername: string;
  leetcodeUsername: string;
}

export const CodingStats: React.FC<CodingStatsProps> = ({
  githubUsername,
  leetcodeUsername,
}): JSX.Element => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <section className="w-full py-24 flex justify-center overflow-hidden bg-gradient-to-b from-transparent via-[rgba(177,108,234,0.05)] to-transparent">
      <div className="relative w-full max-w-7xl px-4">
        {" "}
        {/* Increased max-width and added padding */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            className="text-5xl font-bold mb-4 bg-gradient-to-r from-[rgba(177,108,234,1)] via-[rgba(255,94,105,1)] to-[rgba(255,168,75,1)] bg-clip-text text-transparent"
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 10,
              delay: 0.1,
            }}
            viewport={{ once: true }}
          >
            Coding Activity
          </motion.h2>
          <motion.p
            className="text-lg text-huggingfacecoblack max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A showcase of my coding journey through GitHub and LeetCode
          </motion.p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* GitHub Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <div className="flex items-center mb-6">
              <FaGithub className={`text-3xl mr-3 text-huggingfacecoblack `} />
              <h3 className={`text-2xl font-semibold text-huggingfacecoblack `}>
                @{githubUsername}
              </h3>
            </div>

            <div
              className={`w-full overflow-hidden rounded-lg border ${isDarkMode ? "border-[#2d2d2d] bg-background-dark" : "border-[#e5e7eb] bg-background-light"} p-4 shadow-lg mb-4`}
            >
              <iframe
                title="GitHub Contribution Chart"
                src={`https://ghchart.rshah.org/${githubUsername}`}
                width="100%"
                height="120"
                className={`w-full ${isDarkMode ? "filter invert-[1]" : ""}`}
              />
            </div>

            <div className="grid grid-cols-1 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`overflow-hidden rounded-lg border ${isDarkMode ? "border-[#2d2d2d] bg-background-dark" : "border-[#e5e7eb] bg-background-light"} p-4 shadow-lg`}
              >
                <img
                  src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&count_private=true&hide_border=true&theme=${isDarkMode ? "dark" : "light"}`}
                  alt="GitHub Stats"
                  className="w-full h-auto"
                />
              </motion.div>
            </div>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center px-6 py-3 rounded-full mt-6 bg-gradient-to-r from-[rgba(177,108,234,1)] via-[rgba(255,94,105,1)] to-[rgba(255,168,75,1)] text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 self-center`}
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="mr-2" /> View Profile
            </motion.a>
          </motion.div>

          {/* LeetCode Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col"
          >
            <div className="flex items-center mb-6">
              <FaCode
                className={`text-3xl mr-3 ${isDarkMode ? "text-green-400" : "text-green-600"}`}
              />
              <h3
                className={`text-2xl font-semibold ${isDarkMode ? "text-white" : "text-gray-900"}`}
              >
                @{leetcodeUsername}
              </h3>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex-grow"
            >
              <div
                className={`overflow-hidden rounded-lg ${isDarkMode ? "bg-slate-900" : "bg-white"} p-4 shadow-lg`}
              >
                <img
                  src={`https://leetcard.jacoblin.cool/${leetcodeUsername}?theme=${isDarkMode ? "dark" : "light"}&font=DM%20Mono&ext=heatmap`}
                  alt="LeetCode Stats"
                  className="w-full h-auto rounded"
                />
              </div>
            </motion.div>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center px-6 py-3 rounded-full mt-6 ${isDarkMode ? "bg-green-600 hover:bg-green-500" : "bg-green-500 hover:bg-green-400"} text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 self-center`}
              href={`https://leetcode.com/${leetcodeUsername}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaCode className="mr-2" /> View Profile
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CodingStats;
