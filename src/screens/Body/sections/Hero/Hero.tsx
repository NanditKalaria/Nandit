import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "../../../../components/ui/button";
import profileImg from "../../../../assets/projects/portfolio.png"; // Import the image

export const ContainerByAnima = (): JSX.Element => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, -50]);
  const y2 = useTransform(scrollY, [0, 300], [0, -30]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.8]);

  const handleResumeClick = () => {
    window.location.href = "https://drive.google.com/file/d/1Neoog7Qk0GZC-XA8JYzVTsff58GS4VFm/view?usp=drive_link";
  };

  return (
    <section className="w-full max-w-[1215px] mx-auto flex flex-col md:flex-row items-center justify-between px-8 pt-8 pb-0 min-h-[70vh] relative overflow-hidden">
      <motion.div 
        className="flex flex-col gap-6 max-w-[480px] md:pl-4 z-10"
        style={{ y: y1, opacity }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.h1 
          className="text-[56px] leading-[1.08] font-bold font-['Inter',Helvetica]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.span 
            className="bg-gradient-to-r from-[rgba(177,108,234,1)] via-[rgba(255,94,105,1)] to-[rgba(255,168,75,1)] bg-clip-text text-transparent inline-block"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >


            I build <span className="font-bold">products</span>
          </motion.span>
          <br />
          <motion.span 
            className="text-huggingfacecoblack inline-block"
            initial={{ y: 20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            that delight and
            <br />
            inspire users.
          </motion.span>
        </motion.h1>

        <motion.p 
          className="font-['Inter',Helvetica] font-normal text-huggingfacecoblack text-[20px] leading-[32px] mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          Hello! I'm Nandit Kalaria, a passionate Software Developer and GenAI enthusiast.
        </motion.p>

        <motion.p 
          className="font-['Inter',Helvetica] font-normal text-huggingfacecoblack text-[18.5px] leading-[30px] mt-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          My background spans across Full Stack Development, AI/ML, and Competitive Programming with expertise in MERN Stack.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="link"
            className="justify-start p-0 h-auto font-['Inter',Helvetica] font-bold text-huggingfacecoblack text-[18px] leading-[20px] mt-2 relative group"
            aria-label="My Resume"
            tabIndex={0}
          >
            <button onClick={handleResumeClick}>My Resume</button>
            <motion.div 
              className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[rgba(177,108,234,1)] via-[rgba(255,94,105,1)] to-[rgba(255,168,75,1)]"
              initial={{ width: 0 }}
              whileHover={{ width: "100%" }}
              transition={{ duration: 0.3 }}
            />
          </Button>
        </motion.div>
      </motion.div>

      {/* Replace the existing image div with larger dimensions */}
      <motion.div 
        className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px] md:ml-8"
        style={{ y: y2 }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {/* Glowing border using multiple elements */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[rgba(177,108,234,1)] via-[rgba(255,94,105,1)] to-[rgba(255,168,75,1)] blur-md animate-pulse" />
        <div className="absolute inset-[3px] rounded-full bg-gradient-to-r from-[rgba(177,108,234,1)] via-[rgba(255,94,105,1)] to-[rgba(255,168,75,1)]" />
        
        {/* Profile image container */}
        <div className="absolute inset-[4px] rounded-full overflow-hidden">
          <motion.div
            className="w-full h-full bg-cover bg-center rounded-full"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img 
              src={profileImg}
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </motion.div>
        </div>
        
        {/* Optional: Inner subtle gradient overlay */}
        <div className="absolute inset-[4px] rounded-full bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
      </motion.div>
      
      {/* Keep existing background decorative elements */}
      <motion.div 
        className="absolute top-20 right-10 w-20 h-20 rounded-full bg-gradient-to-r from-[rgba(177,108,234,0.1)] to-[rgba(255,94,105,0.1)] blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          repeatType: "reverse" 
        }}
      />
      <motion.div 
        className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-[rgba(255,94,105,0.1)] to-[rgba(255,168,75,0.1)] blur-3xl"
        animate={{ 
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />
    </section>
  );
};
