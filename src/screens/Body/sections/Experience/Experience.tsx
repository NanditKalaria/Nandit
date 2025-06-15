import { motion } from "framer-motion";

export const ParagraphByAnima = (): JSX.Element => {
  return (
    <section className="flex flex-col items-center gap-4 py-20 w-full">
      <motion.h2 
        className="text-[22px] font-bold tracking-[4px] leading-[22px] text-center uppercase bg-gradient-to-r from-[rgba(177,108,234,1)] via-[rgba(255,94,105,1)] to-[rgba(255,168,75,1)] bg-clip-text text-transparent font-justinhinh-webflow-io-semantic-heading-6-upper"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        EXPERIENCE
      </motion.h2>

      <motion.p 
       className="font-['Inter',Helvetica] font-normal text-justinhinhwebflowiodove-gray dark:text-justinhinhwebflowiodove-gray-dark text-[20.8px] text-center leading-10 max-w-3xl"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        For last few months, I have built products and projects specially dedicated to developer students
        which has helped them throughout in their journey of learning and growing.
        <br />
      </motion.p>
    </section>
  );
};
