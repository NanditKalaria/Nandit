import { motion } from "framer-motion";

export const Footer = () => {
  const footerLinks = [
    { text: "GitHub", href: "https://github.com/nandit27" },
    { text: "LinkedIn", href: "https://www.linkedin.com/in/nandit-kalaria-06281631a" },
    { text: "Resume", href: "https://drive.google.com/file/d/1Neoog7Qk0GZC-XA8JYzVTsff58GS4VFm/view?usp=drive_link" },
  ];

  return (
    <footer className="w-full py-24 flex flex-col items-center justify-center bg-[#111111]">
      <div className="flex space-x-8 mb-8">
        {footerLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[20px] text-white/60 hover:text-white transition-all duration-300 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {link.text}
          </motion.a>
        ))}
      </div>
      <motion.a
        href="mailto:nanditkalaria27@gmail.com"
        className="text-[20px] text-white/60 hover:text-white transition-all duration-300 hover:scale-105"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        nanditkalaria27@gmail.com
      </motion.a>
    </footer>
  );
};