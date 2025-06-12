import { motion } from "framer-motion";
import reactIcon from '../../../../assets/icons/react.svg';
import awsIcon from '../../../../assets/icons/flask.svg';
import nodeIcon from '../../../../assets/icons/nodejs.svg';
import azureIcon from '../../../../assets/icons/mongodb.svg';
import typescriptIcon from '../../../../assets/icons/typescript.svg';
import pythonIcon from '../../../../assets/icons/python.svg';
import hubspotIcon from '../../../../assets/icons/next.svg';
import mongodbIcon from '../../../../assets/icons/postman.svg';
import graphqlIcon from '../../../../assets/icons/figma.svg';
import dockerIcon from '../../../../assets/icons/docker.png';

export const ContainerWrapperByAnima = (): JSX.Element => {
  // Import technology icons
  
  const technologies = [
    // Inner orbit (clockwise)
    { name: "React", icon: reactIcon, orbit: 1, position: 45, color: "#61DAFB", description: "Frontend Development" },
    { name: "AWS", icon: awsIcon, orbit: 1, position: 135, color: "#FF9900", description: "Cloud Infrastructure" },
    { name: "Node", icon: nodeIcon, orbit: 1, position: 225, color: "#339933", description: "Backend Development" },
    { name: "Azure", icon: azureIcon, orbit: 1, position: 315, color: "#0078D4", description: "Cloud Services" },
    
    // Outer orbit (counter-clockwise)
    { name: "TypeScript", icon: typescriptIcon, orbit: 2, position: 0, color: "#3178C6", description: "Type-Safe Development" },
    { name: "Python", icon: pythonIcon, orbit: 2, position: 60, color: "#3776AB", description: "Data Processing" },
    { name: "HubSpot", icon: hubspotIcon, orbit: 2, position: 120, color: "#FF7A59", description: "CRM Integration" },
    { name: "MongoDB", icon: mongodbIcon, orbit: 2, position: 180, color: "#47A248", description: "Database Management" },
    { name: "GraphQL", icon: graphqlIcon, orbit: 2, position: 240, color: "#E10098", description: "API Development" },
    { name: "Figma", icon: dockerIcon, orbit: 2, position: 300, color: "#28B463", description: "UI/UX Design" },
  ];

  return (
    <section className="w-full py-24 flex justify-center overflow-hidden bg-gradient-to-b from-transparent via-[rgba(177,108,234,0.05)] to-transparent">
      <div className="relative w-full max-w-5xl">
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
              delay: 0.1 
            }}
            viewport={{ once: true }}
          >
            Technical Expertise
          </motion.h2>
          <motion.p
            className="text-lg text-huggingfacecoblack max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            A comprehensive toolkit of modern technologies for building scalable, efficient, and user-friendly applications
          </motion.p>
        </motion.div>

        {/* Solar system container */}
        <div className="relative h-[600px] flex items-center justify-center">
          {/* Gradient background effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(177,108,234,0.1)] via-transparent to-[rgba(255,168,75,0.1)] rounded-full blur-3xl opacity-30" />

          {/* Center hub with 3D-like icon */}
          <motion.div
            className="absolute w-28 h-28 bg-gradient-to-br from-[rgba(177,108,234,1)] to-[rgba(255,94,105,1)] rounded-full z-10 flex items-center justify-center shadow-lg shadow-[rgba(177,108,234,0.3)]"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
          >
            <svg width="60" height="60" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" />
              <path d="M2 17L12 22L22 17" />
              <path d="M2 12L12 17L22 12" />
            </svg>
          </motion.div>

          {/* Orbit circles with gradient dashed borders */}
          {[1, 2].map((orbit) => (
            <motion.div
              key={`orbit-${orbit}`}
              className="absolute border-dashed rounded-full"
              style={{
                width: `${orbit * 240}px`,
                height: `${orbit * 240}px`,
                borderWidth: "2px",
                borderColor: orbit === 1 ? "rgba(177,108,234,0.3)" : "rgba(255,94,105,0.3)"
              }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.1 * orbit }}
              viewport={{ once: true }}
            />
          ))}

          {/* Small decorative dots with gradients */}
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <motion.div
              key={`dot-outer-${angle}`}
              className="absolute w-2 h-2 bg-gradient-to-r from-[rgba(177,108,234,1)] to-[rgba(255,94,105,1)] rounded-full"
              style={{
                left: "50%",
                top: "50%",
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(${2 * 120 + 10}px)`,
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1 + (angle / 360) }}
              viewport={{ once: true }}
            />
          ))}

          {/* Technology icons */}
          {technologies.map((tech, index) => {
            const orbitRadius = tech.orbit * 120;
            const angle = tech.position;
            const isClockwise = tech.orbit === 1;
            
            return (
              <motion.div
                key={`tech-${index}`}
                className="absolute flex items-center justify-center"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `translate(-50%, -50%)`,
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                viewport={{ once: true }}
                animate={{
                  rotate: isClockwise ? [0, 360] : [360, 0],
                  transition: {
                    duration: isClockwise ? 40 : 50,
                    ease: "linear",
                    repeat: Infinity,
                  },
                }}
              >
                <motion.div
                  className="absolute"
                  style={{
                    transform: `rotate(${angle}deg) translateX(${orbitRadius}px) rotate(-${angle}deg)`,
                  }}
                >
                  <motion.div 
                    className="relative w-16 h-16 rounded-full flex items-center justify-center bg-[#1A1A1A] border-2 border-opacity-20 shadow-xl cursor-pointer overflow-visible group"
                    style={{ 
                      borderColor: tech.color
                    }}
                    whileHover={{ 
                      scale: 1.2,
                      borderColor: tech.color,
                      borderOpacity: 1,
                      boxShadow: `0 0 20px ${tech.color}40`
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 10 }}
                  >
                    <img 
                      src={tech.icon} 
                      alt={tech.name} 
                      className="w-8 h-8 opacity-90 group-hover:opacity-100" 
                      style={{
                        filter: tech.name === 'Figma' ? 'none' : 'brightness(0) invert(1)'
                      }}
                    />
                    <motion.div 
                      className="absolute top-full mt-3 whitespace-nowrap bg-[#1A1A1A] text-white text-sm py-2 px-4 rounded-full pointer-events-none border border-opacity-10 backdrop-blur-sm"
                      style={{ borderColor: tech.color }}
                      initial={{ opacity: 0, y: -10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="font-bold">{tech.name}</span>
                      <span className="mx-1">•</span>
                      <span className="opacity-75">{tech.description}</span>
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            );
          })}

          {/* Decorative elements */}
          {[30, 90, 150, 210, 270, 330].map((angle) => {
            const distance = Math.random() * 100 + 320;
            return (
              <motion.div
                key={`outer-dot-${angle}`}
                className="absolute w-2 h-2 bg-gradient-to-r from-[rgba(255,94,105,0.5)] to-[rgba(255,168,75,0.5)] rounded-full"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(${distance}px)`,
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 1.5 + (angle / 360) }}
                viewport={{ once: true }}
              />
            );
          })}

          {[15, 135, 255].map((angle) => {
            const distance = Math.random() * 80 + 380;
            return (
              <motion.div
                key={`far-dot-${angle}`}
                className="absolute w-3 h-3 bg-gradient-to-r from-[rgba(177,108,234,0.5)] to-[rgba(255,94,105,0.5)] rounded-full"
                style={{
                  left: "50%",
                  top: "50%",
                  transform: `translate(-50%, -50%) rotate(${angle}deg) translateX(${distance}px)`,
                }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 2 + (angle / 360) }}
                viewport={{ once: true }}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};