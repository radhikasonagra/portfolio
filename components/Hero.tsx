import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Database, Brain, Terminal, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, -45, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[120px]" 
        />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: [0, 0.5, 0], y: -100, x: Math.random() * 100 - 50 }}
            transition={{ duration: 5 + Math.random() * 5, repeat: Infinity, delay: Math.random() * 5 }}
            className="absolute bottom-0 w-2 h-2 bg-white/10 rounded-full"
            style={{ left: `${Math.random() * 100}%` }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
            className="inline-block px-4 py-2 bg-white/5 border border-white/10 rounded-full backdrop-blur-sm"
          >
            <span className="text-secondary font-semibold tracking-wider text-sm">FULL STACK DEVELOPER</span>
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
               {/* Simple Typing Effect Placeholder - or just static for stability */}
               Radhika Sonagra
            </span>
          </h1>
          
          <div className="h-8 md:h-10 text-xl md:text-2xl text-gray-300 font-mono flex items-center gap-2">
            <Terminal size={24} className="text-primary" />
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
            >
              Building Scalable Web Apps_
            </motion.span>
          </div>
          
          <p className="text-gray-400 text-lg md:text-xl max-w-lg">
            Dynamic Full Stack Developer with expertise in building scalable web applications and innovative solutions. Passionate about creating efficient, user-centric applications with modern technologies.
          </p>

          <div className="flex flex-wrap gap-4">
            <button 
              onClick={() => scrollToSection('projects')}
              className="group px-8 py-3 bg-gradient-to-r from-primary to-secondary rounded-full font-medium text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all flex items-center gap-2 transform hover:-translate-y-1"
            >
              View Live Demos
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
            
            <a 
              href="https://drive.google.com/uc?export=download&id=1jBpzYUMAt-W5KQ4O3yHB-7HG5pxTig1y" 
              target="_blank"
              rel="noopener noreferrer"
              className="group px-8 py-3 bg-white/5 border border-white/10 rounded-full font-medium text-white hover:bg-white/10 transition-all flex items-center gap-2 transform hover:-translate-y-1"
            >
              Download Resume
              <Download size={18} className="group-hover:translate-y-1 transition-transform" />
            </a>

            <button 
              onClick={() => scrollToSection('contact')}
              className="px-8 py-3 bg-transparent border border-white/10 rounded-full font-medium text-gray-300 hover:text-white hover:border-white/30 transition-all transform hover:-translate-y-1"
            >
              Contact Me
            </button>
          </div>
        </motion.div>

        {/* Visual Element */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="relative z-10 w-full h-[500px] flex items-center justify-center">
            {/* Abstract Tech Visual */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute w-[400px] h-[400px] border border-white/10 rounded-full border-dashed"
            />
             <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute w-[300px] h-[300px] border border-primary/30 rounded-full"
            />
            
            <motion.div 
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative bg-darker/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl max-w-xs"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="space-y-3 font-mono text-sm">
                <div className="flex items-center gap-2 text-primary">
                  <Code size={16} /> <span>const dev = "Radhika";</span>
                </div>
                <div className="flex items-center gap-2 text-secondary">
                  <Brain size={16} /> <span>await ai.connect();</span>
                </div>
                <div className="flex items-center gap-2 text-blue-400">
                  <Database size={16} /> <span>Stripe & UPI Ready</span>
                </div>
                <div className="text-gray-500">// Meta Flow Active</div>
                <div className="text-green-400">Status: Online</div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;