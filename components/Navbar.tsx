import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Download } from 'lucide-react';

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  const links = [
    { name: 'Home', href: '#home' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  // Logo Animation Variants
  const letterContainer = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const letterAnimation = {
    hidden: { y: -20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${scrolled ? 'bg-darker/80 backdrop-blur-md py-4 border-b border-white/5' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')} 
          className="text-2xl font-bold font-mono tracking-tighter cursor-pointer flex items-center group"
        >
          <motion.div 
            variants={letterContainer}
            initial="hidden"
            animate="show"
            className="flex"
          >
            {"RADHIKA".split("").map((char, index) => (
              <motion.span key={index} variants={letterAnimation} className="hover:text-primary transition-colors">
                {char}
              </motion.span>
            ))}
          </motion.div>
          <span className="text-primary mx-0.5 animate-pulse">.</span>
          <span className="text-gray-400 group-hover:text-white transition-colors">PORTFOLIO</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="relative text-gray-300 hover:text-white transition-colors text-sm font-medium group py-2"
            >
              {link.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          
          <a 
            href="https://drive.google.com/uc?export=download&id=1jBpzYUMAt-W5KQ4O3yHB-7HG5pxTig1y" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 flex items-center gap-2 bg-white/10 hover:bg-white/20 rounded-full text-white text-sm font-medium transition-colors border border-white/5 cursor-pointer hover:shadow-[0_0_15px_rgba(99,102,241,0.5)] group"
          >
            <span>Download CV</span>
            <Download size={16} className="group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white p-2">
          {isOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 w-full bg-darker border-b border-white/10 md:hidden overflow-hidden shadow-2xl"
            >
              <div className="flex flex-col p-6 gap-4">
                {links.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-gray-300 hover:text-white text-lg font-medium border-b border-white/5 pb-2"
                  >
                    {link.name}
                  </a>
                ))}
                 <a 
                    href="https://drive.google.com/uc?export=download&id=1jBpzYUMAt-W5KQ4O3yHB-7HG5pxTig1y" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-white text-lg font-medium pt-2 flex items-center gap-2"
                  >
                    Download Resume <Download size={18} />
                  </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;