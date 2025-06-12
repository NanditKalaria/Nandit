import { motion } from "framer-motion";

export const Logo = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="font-sans text-2xl font-bold bg-gradient-to-r from-[rgba(177,108,234,1)] via-[rgba(255,94,105,1)] to-[rgba(255,168,75,1)] bg-clip-text text-transparent"
      style={{ 
        fontFamily: "'Inter', sans-serif",
        letterSpacing: "-0.5px"
      }}
    >
      Nandit Kalaria
    </motion.div>
  );
};