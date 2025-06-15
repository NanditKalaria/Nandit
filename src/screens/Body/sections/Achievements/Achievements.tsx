import { motion } from "framer-motion";
import { BadgeCheck, Trophy, Medal } from "lucide-react";

// Import images
import gec1Img from '../../../../assets/icons/gec1.png';
import cvmuImg from '../../../../assets/icons/cvmu.png';
import yorkieImg from '../../../../assets/icons/yorkie.png';
import hackspireImg from '../../../../assets/icons/hackspire.png';

interface Achievement {
  title: string;
  description: string;
  date: string;
  icon: JSX.Element;
  image: string;
  color: string;
}

const achievements: Achievement[] = [
  {
    title: "Hackathon Victory - @HackTheSpring 2025",
    description:
      "Won first place in Open Innovation Category, competing against 78 teams out of 188",
    date: "Feb 2025",
    icon: <Trophy className="w-6 h-6" />,
    image: gec1Img,
    color: "from-[rgba(177,108,234,1)] to-[rgba(255,94,105,1)]",
  },
  {
    title: "Runners-Up @CVM University Hackathon 2025 ",
    description:
      "Secured second place at CVM University Hackathon with an AI-Powered project, QuickLearnAI.",
    date: "Feb 2025",
    icon: <Trophy className="w-6 h-6" />,
    image: cvmuImg,
    color: "from-[rgba(255,94,105,1)] to-[rgba(255,168,75,1)]",
  },
  {
    title: "Runners-Up @York.IE Hackathon 2025",
    description:
      "Secured Runners-Up position at York.IE Hackathon 2025, with complete AI automation from Jira Tasks to Deployed Links.",
    date: "May 2025",
    icon: <BadgeCheck className="w-6 h-6" />,
    image: yorkieImg,
    color: "from-[rgba(177,108,234,1)] to-[rgba(255,168,75,1)]",
  },
  {
    title: "Top 5 Finish - @HackSpire 2025",
    description:
      "Achieved top 5 placement in HackSpire 2025 Hackathon, showcasing creative problem-solving and technical expertise among tough competitors.",
    date: "April 2025",
    icon: <Medal className="w-6 h-6" />,
    image: hackspireImg,
    color: "from-[rgba(255,168,75,1)] to-[rgba(177,108,234,1)]",
  }
];

export const AchievementsByAnima = (): JSX.Element => {
  return (
    <section className="w-full py-24 flex justify-center overflow-hidden bg-gradient-to-b from-transparent via-[rgba(177,108,234,0.05)] to-transparent">
      <div className="max-w-[1215px] w-full px-4">
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
            Achievements
          </motion.h2>
          <motion.p
            className="text-lg text-huggingfacecoblack dark:text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Recognition and accomplishments that showcase technical excellence
            and innovation
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="relative group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative overflow-hidden rounded-xl bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="h-80">
                  <motion.img
                    src={achievement.image}
                    alt={achievement.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    style={{
                      objectPosition: 'center center',
                      objectFit: 'cover'
                    }}
                  />
                </div>

                <div className="relative p-6">
                  <div className="absolute -top-8 left-6">
                    <div
                      className={`w-16 h-16 rounded-full bg-gradient-to-r ${achievement.color} flex items-center justify-center shadow-lg text-white`}
                    >
                      {achievement.icon}
                    </div>
                  </div>

                  <div className="pt-8">
                    <motion.h3
                      className="text-xl font-bold mb-2 bg-gradient-to-r from-[rgba(177,108,234,1)] via-[rgba(255,94,105,1)] to-[rgba(255,168,75,1)] bg-clip-text text-transparent"
                      whileHover={{ scale: 1.02 }}
                    >
                      {achievement.title}
                    </motion.h3>
                    <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                      {achievement.description}
                    </p>
                    <div className="flex items-center text-gray-600 dark:text-gray-400 text-sm">
                      <span className="opacity-75">{achievement.date}</span>
                    </div>
                  </div>
                </div>

                {/* Bottom gradient line */}
                <motion.div
                  className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-transparent to-transparent group-hover:bg-gradient-to-r group-hover:from-[rgba(177,108,234,1)] group-hover:via-[rgba(255,94,105,1)] group-hover:to-[rgba(255,168,75,1)]"
                  transition={{ duration: 0.3 }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
