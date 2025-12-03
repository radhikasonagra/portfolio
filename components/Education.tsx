import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, School, Award, Calendar, BookOpen } from 'lucide-react';

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  year: string;
  score: string;
  color: string;
  icon: React.ReactNode;
}

const educationData: EducationItem[] = [
  {
    id: 1,
    degree: "BE - Computer Engineering",
    institution: "Government Engineering College-Rajkot",
    year: "2020 - 2024",
    score: "CPI: 7.73 | SPI: 9.00",
    color: "from-blue-600 to-indigo-600",
    icon: <GraduationCap size={40} />
  },
  {
    id: 2,
    degree: "Higher Secondary (HSC)",
    institution: "Mangalam School - Halvad",
    year: "2018 - 2020",
    score: "Percentage: 81.00%",
    color: "from-purple-600 to-pink-600",
    icon: <BookOpen size={40} />
  },
  {
    id: 3,
    degree: "Secondary School (SSC)",
    institution: "Mangalam School - Halvad",
    year: "2017 - 2018",
    score: "Percentage: 72.37%",
    color: "from-emerald-600 to-teal-600",
    icon: <School size={40} />
  }
];

const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 bg-darker border-t border-white/5 overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Academic <span className="text-secondary">Milestones</span>
          </h2>
          <p className="text-gray-400">My educational journey</p>
        </motion.div>

        {/* 3D Card Grid - All Visible */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 perspective-[1000px]">
          {educationData.map((item, index) => (
            <Card3D key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const Card3D: React.FC<{ item: EducationItem; index: number }> = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: 10 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.2, duration: 0.8, type: "spring" }}
      className="relative group h-[420px] w-full"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Floating Animation Wrapper */}
      <motion.div
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 4 + index, repeat: Infinity, ease: "easeInOut" }}
        className="w-full h-full relative preserve-3d"
      >
        {/* MAIN CARD BACKGROUND */}
        <div className="absolute inset-0 bg-[#0f172a] border border-white/10 rounded-2xl shadow-xl transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(99,102,241,0.3)] group-hover:border-primary/50 overflow-hidden">
          {/* Gradient Overlay */}
          <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
          
          {/* Tech Texture */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')] opacity-5" />
        </div>

        {/* 3D CONTENT LAYERS */}
        <div 
          className="absolute inset-0 p-8 flex flex-col items-center justify-between text-center transition-transform duration-300 group-hover:transform"
          style={{ transform: 'translateZ(20px)' }}
        >
          {/* Top Icon Floating High */}
          <div 
            className="transform transition-transform duration-500 group-hover:translate-z-10 group-hover:scale-110"
            style={{ transform: 'translateZ(40px)' }}
          >
            <div className={`p-5 rounded-full bg-gradient-to-br ${item.color} shadow-lg mb-4 text-white relative`}>
              {item.icon}
              <div className="absolute inset-0 bg-white/20 blur-md rounded-full animate-pulse" />
            </div>
          </div>

          {/* Text Content */}
          <div className="space-y-4 w-full">
             <div 
                className="transform transition-transform duration-500"
                style={{ transform: 'translateZ(30px)' }}
             >
                <h3 className="text-xl font-bold text-white mb-2 leading-tight min-h-[56px] flex items-center justify-center">
                  {item.degree}
                </h3>
                <div className="w-16 h-1 bg-white/20 rounded-full mx-auto" />
             </div>

             <div 
                className="transform transition-transform duration-500 group-hover:translate-z-8"
                style={{ transform: 'translateZ(20px)' }}
             >
               <div className="flex items-center justify-center gap-2 text-gray-300 text-sm mb-2">
                 <School size={16} className="text-primary" />
                 <span>{item.institution}</span>
               </div>
               
               <div className="flex items-center justify-center gap-2 text-gray-400 text-xs mb-4">
                 <Calendar size={14} />
                 <span>{item.year}</span>
               </div>
             </div>
          </div>

          {/* Bottom Score Badge */}
          <div 
            className="w-full transform transition-transform duration-500 group-hover:translate-z-12"
            style={{ transform: 'translateZ(25px)' }}
          >
            <div className="py-3 px-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-md group-hover:bg-white/10 transition-colors">
              <div className="flex items-center justify-center gap-2 text-secondary font-bold">
                <Award size={18} />
                <span>{item.score}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hover Shine Effect */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-150%] group-hover:animate-shine pointer-events-none" />
      </motion.div>
    </motion.div>
  );
};

export default Education;