import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun, Menu, X } from "lucide-react";
import { useTheme } from "../../../../components/ThemeProvider";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../../../components/ui/navigation-menu";

export const BannerByAnima = (): JSX.Element => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  // Navigation links data for easy mapping
  const navigationLinks = [
    { label: "Portfolio", href: "/portfolio" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/nandit-kalaria-06281631a" },
    { label: "Resume", href: "https://drive.google.com/file/d/1Neoog7Qk0GZC-XA8JYzVTsff58GS4VFm/view?usp=drive_link" },
    { label: "Contact", href: "mailto:nanditkalaria27@gmail.com" },
  ];

  return (
    <motion.header 
      className="w-full flex justify-center pt-10 pb-4 relative"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full max-w-[1215px] flex justify-between items-center px-8 relative">
        {/* Logo container with animation and home link */}
        <motion.div 
          className="flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.a
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-[rgba(177,108,234,1)] via-[rgba(255,94,105,1)] to-[rgba(255,168,75,1)] bg-clip-text text-transparent"
            style={{ 
              fontFamily: "'Inter', sans-serif",
              letterSpacing: "-0.5px"
            }}
          >
            Nandit Kalaria
          </motion.a>
        </motion.div>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:block max-w-[505px]">
          <NavigationMenuList className="flex gap-8">
            {navigationLinks.map((link, index) => (
              <NavigationMenuItem key={index}>
                <motion.div
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                >
                  <NavigationMenuLink
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : '_self'}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="px-2 py-1 font-justinhinh-webflow-io-inter-medium text-huggingfacecoblack text-[17px] leading-7 tracking-[0.01em] focus:outline-none focus-visible:ring-2 focus-visible:ring-huggingfacecoblack dark:focus-visible:ring-huggingfacecowhite relative"
                    aria-label={link.label}
                    tabIndex={0}
                  >
                    {link.label}
                    {hoveredIndex === index && (
                      <motion.div
                        className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-[rgba(177,108,234,1)] via-[rgba(255,94,105,1)] to-[rgba(255,168,75,1)] w-full"
                        layoutId="underline"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </NavigationMenuLink>
                </motion.div>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4">
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {theme === 'dark' ? (
              <Sun className="w-5 h-5 text-huggingfacecoblack" />
            ) : (
              <Moon className="w-5 h-5 text-huggingfacecoblack dark:text-huggingfacecowhite" />
            )}
          </motion.button>

          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-huggingfacecoblack " />
            ) : (
              <Menu className="w-6 h-6 text-huggingfacecoblack " />
            )}
          </motion.button>
        </div>

        {/* Mobile Navigation Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-lg rounded-lg mt-2 py-4 px-4 md:hidden z-50 border border-gray-200 dark:border-gray-700"
            >
              <nav className="flex flex-col space-y-3">
                {navigationLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : '_self'}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-huggingfacecoblack hover:text-[rgba(255,94,105,1)] transition-colors text-lg font-medium py-2 px-3 rounded-md hover:bg-gray-50"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};
