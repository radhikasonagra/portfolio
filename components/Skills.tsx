// import React, { useEffect, useState, useRef } from 'react';
// import { motion } from 'framer-motion';
// import { 
//   Code2, Server, Layout, Database, GitBranch, FileText, 
//   Terminal, Globe, Cpu, Layers, Box, Cloud, Braces, Smartphone, ShieldCheck
// } from 'lucide-react';

// // Skill Data with Icons
// const skills = [
//   { name: 'React', icon: <Code2 />, color: '#61DAFB' },
//   { name: 'Node.js', icon: <Server />, color: '#339933' },
//   { name: 'MongoDB', icon: <Database />, color: '#47A248' },
//   { name: 'Express', icon: <Terminal />, color: '#ffffff' },
//   { name: 'Tailwind', icon: <Layout />, color: '#38B2AC' },
//   { name: 'Stripe', icon: <Globe />, color: '#008CDD' },
//   { name: 'UPI', icon: <Smartphone />, color: '#FF7F00' },
//   { name: 'Redux', icon: <Layers />, color: '#764ABC' },
//   { name: 'Docker', icon: <Box />, color: '#2496ED' },
//   { name: 'Git', icon: <GitBranch />, color: '#F05032' },
//   { name: 'Postman', icon: <Cloud />, color: '#FF6C37' },
//   { name: 'Swagger', icon: <FileText />, color: '#85EA2D' },
//   { name: 'Meta API', icon: <Globe />, color: '#0668E1' },
//   { name: 'Webhooks', icon: <Braces />, color: '#FF0000' },
//   { name: 'OpenAI', icon: <Cpu />, color: '#10A37F' },
//   { name: 'Gemini', icon: <ShieldCheck />, color: '#4285F4' },
// ];

// const Skills: React.FC = () => {
//   return (
//     <section id="skills" className="py-20 bg-darker overflow-hidden relative">
//       <div className="container mx-auto px-6 relative z-10">
//         <motion.div 
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           className="text-center mb-12"
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech <span className="text-secondary">Universe</span></h2>
//           <p className="text-gray-400">My technical arsenal</p>
//         </motion.div>

//         {/* Changed grid-cols-1 lg:grid-cols-2 to grid-cols-1 md:grid-cols-2 for better side-by-side view */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          
//           {/* Left: 3D Sphere */}
//           <div className="h-[400px] md:h-[500px] flex items-center justify-center relative order-1">
//             <SkillSphere />
//           </div>

//           {/* Right: 2D Grid List */}
//           <div className="order-2">
//             <div className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
//                 <h3 className="text-xl font-bold text-white mb-6 border-b border-white/10 pb-2">Skill Stack</h3>
//                 <div className="grid grid-cols-2 gap-4">
//                     {skills.map((skill, index) => (
//                         <motion.div 
//                           key={index}
//                           initial={{ opacity: 0, x: 20 }}
//                           whileInView={{ opacity: 1, x: 0 }}
//                           viewport={{ once: true }}
//                           transition={{ delay: index * 0.05 }}
//                           className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors group cursor-default"
//                         >
//                             <div className="p-2 rounded-md bg-white/5 group-hover:bg-white/10 transition-colors" style={{ color: skill.color }}>
//                                 {skill.icon}
//                             </div>
//                             <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
//                                 {skill.name}
//                             </span>
//                         </motion.div>
//                     ))}
//                 </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Background Ambience */}
//       <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
//     </section>
//   );
// };

// // 3D Math & Rendering Component
// const SkillSphere: React.FC = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const [rotation, setRotation] = useState({ x: 0, y: 0 });
  
//   // Configuration
//   const radius = 180; // Slightly adjusted for responsiveness
//   const autoRotateSpeed = 0.003;

//   // Animation Loop
//   useEffect(() => {
//     let animationFrameId: number;
//     let angleX = 0;
//     let angleY = 0;

//     const animate = () => {
//       // Auto rotation
//       angleX += autoRotateSpeed;
//       angleY += autoRotateSpeed;
      
//       setRotation({ x: angleX, y: angleY });
//       animationFrameId = requestAnimationFrame(animate);
//     };

//     animate();
//     return () => cancelAnimationFrame(animationFrameId);
//   }, []);

//   return (
//     <div 
//       ref={containerRef}
//       className="relative w-full h-full flex items-center justify-center perspective-[1000px]"
//     >
//       {skills.map((skill, index) => {
//         // Fibonacci Sphere Algorithm to distribute points evenly
//         const phi = Math.acos(-1 + (2 * index) / skills.length);
//         const theta = Math.sqrt(skills.length * Math.PI) * phi;

//         // Base coordinates on sphere surface
//         const initialX = radius * Math.cos(theta) * Math.sin(phi);
//         const initialY = radius * Math.sin(theta) * Math.sin(phi);
//         const initialZ = radius * Math.cos(phi);

//         // Apply Rotation Matrix
//         // Rotate around Y axis
//         const rotatedX = initialX * Math.cos(rotation.y) - initialZ * Math.sin(rotation.y);
//         const rotatedZ_temp = initialX * Math.sin(rotation.y) + initialZ * Math.cos(rotation.y);
        
//         // Rotate around X axis
//         const rotatedY = initialY * Math.cos(rotation.x) - rotatedZ_temp * Math.sin(rotation.x);
//         const rotatedZ = initialY * Math.sin(rotation.x) + rotatedZ_temp * Math.cos(rotation.x);

//         // Calculate Scale and Opacity based on Z (depth)
//         const scale = (rotatedZ + radius * 2) / (radius * 3); 
//         const opacity = Math.max(0.2, (rotatedZ + radius) / (radius * 2)); 
//         const blur = rotatedZ < 0 ? '2px' : '0px'; 

//         return (
//           <motion.div
//             key={index}
//             className="absolute flex flex-col items-center justify-center gap-1 p-2 rounded-lg backdrop-blur-sm border border-white/5 shadow-sm transition-colors duration-300 hover:bg-white/10 hover:border-primary/50 hover:z-50"
//             style={{
//               transform: `translate3d(${rotatedX}px, ${rotatedY}px, 0) scale(${scale})`,
//               opacity: opacity,
//               filter: `blur(${blur})`,
//               zIndex: Math.round(rotatedZ), 
//               backgroundColor: 'rgba(15, 23, 42, 0.8)', 
//             }}
//           >
//             <div className="text-2xl" style={{ color: skill.color }}>
//               {skill.icon}
//             </div>
//             {/* Added Name Text */}
//             <span className="text-[10px] font-bold text-white whitespace-nowrap bg-black/50 px-1 rounded">
//                 {skill.name}
//             </span>
//           </motion.div>
//         );
//       })}
//     </div>
//   );
// };

// export default Skills;

import React, { useEffect, useState, useRef } from 'react';
import { motion as m } from 'framer-motion';
import { 
  Code2, Server, Layout, Database, GitBranch, FileText, 
  Terminal, Globe, Cpu, Box, Cloud, Braces, Smartphone, ShieldCheck,
  FileCode2, Palette, FileJson, CheckCircle2
} from 'lucide-react';

const motion = m as any;

// Skill Data for 3D Sphere (Specific Technologies)
const sphereSkills = [
  { name: 'React', icon: <Code2 />, color: '#61DAFB' },
  { name: 'Node.js', icon: <Server />, color: '#339933' },
  { name: 'MongoDB', icon: <Database />, color: '#47A248' },
  { name: 'MySQL', icon: <Database />, color: '#00758F' },
  { name: 'HTML', icon: <FileCode2 />, color: '#E34F26' },
  { name: 'CSS', icon: <Palette />, color: '#1572B6' },
  { name: 'JavaScript', icon: <FileJson />, color: '#F7DF1E' },
  { name: 'Express', icon: <Terminal />, color: '#ffffff' },
  { name: 'Tailwind', icon: <Layout />, color: '#38B2AC' },
  { name: 'Stripe', icon: <Globe />, color: '#008CDD' },
  { name: 'UPI', icon: <Smartphone />, color: '#FF7F00' },
  { name: 'Docker', icon: <Box />, color: '#2496ED' },
  { name: 'Git', icon: <GitBranch />, color: '#F05032' },
  { name: 'Postman', icon: <Cloud />, color: '#FF6C37' },
  { name: 'Swagger', icon: <FileText />, color: '#85EA2D' },
  { name: 'Meta API', icon: <Globe />, color: '#0668E1' },
  { name: 'Webhooks', icon: <Braces />, color: '#FF0000' },
  { name: 'OpenAI', icon: <Cpu />, color: '#10A37F' },
  { name: 'Gemini', icon: <ShieldCheck />, color: '#4285F4' },
];

// Resume Categories for 2D List (Resume Style)
const resumeCategories = [
  "Front-end web development",
  "Back-end web development",
  "API Documentation",
  "Database Management",
  "Code Structure & Architecture",
  "Git and Github",
  "Programming languages",
  "UI Frameworks"
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-20 bg-darker overflow-hidden relative">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech <span className="text-secondary">Universe</span></h2>
          <p className="text-gray-400">My technical capabilities and expertise.</p>
        </motion.div>

        {/* Changed grid-cols-1 lg:grid-cols-2 to grid-cols-1 md:grid-cols-2 for better side-by-side view */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Left: 3D Sphere */}
          <div className="h-[400px] md:h-[500px] flex items-center justify-center relative order-1">
            <SkillSphere />
          </div>

          {/* Right: 2D Vertical List (Resume Style) */}
          <div className="order-2">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm shadow-2xl">
                <h3 className="text-2xl font-bold text-white mb-6 border-b border-white/10 pb-4 flex items-center gap-2">
                  <CheckCircle2 className="text-primary" />
                  Key Competencies
                </h3>
                <div className="space-y-4">
                    {resumeCategories.map((item, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.1 }}
                          className="flex items-center gap-4 group"
                        >
                            <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                                <CheckCircle2 size={14} className="text-secondary group-hover:text-primary transition-colors" />
                            </div>
                            <span className="text-lg font-medium text-gray-300 group-hover:text-white transition-colors">
                                {item}
                            </span>
                        </motion.div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background Ambience */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
    </section>
  );
};

// 3D Math & Rendering Component
const SkillSphere: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  
  // Configuration
  const radius = 180; // Slightly adjusted for responsiveness
  const autoRotateSpeed = 0.003;

  // Animation Loop
  useEffect(() => {
    let animationFrameId: number;
    let angleX = 0;
    let angleY = 0;

    const animate = () => {
      // Auto rotation
      angleX += autoRotateSpeed;
      angleY += autoRotateSpeed;
      
      setRotation({ x: angleX, y: angleY });
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative w-full h-full flex items-center justify-center perspective-[1000px]"
    >
      {sphereSkills.map((skill, index) => {
        // Fibonacci Sphere Algorithm to distribute points evenly
        const phi = Math.acos(-1 + (2 * index) / sphereSkills.length);
        const theta = Math.sqrt(sphereSkills.length * Math.PI) * phi;

        // Base coordinates on sphere surface
        const initialX = radius * Math.cos(theta) * Math.sin(phi);
        const initialY = radius * Math.sin(theta) * Math.sin(phi);
        const initialZ = radius * Math.cos(phi);

        // Apply Rotation Matrix
        // Rotate around Y axis
        const rotatedX = initialX * Math.cos(rotation.y) - initialZ * Math.sin(rotation.y);
        const rotatedZ_temp = initialX * Math.sin(rotation.y) + initialZ * Math.cos(rotation.y);
        
        // Rotate around X axis
        const rotatedY = initialY * Math.cos(rotation.x) - rotatedZ_temp * Math.sin(rotation.x);
        const rotatedZ = initialY * Math.sin(rotation.x) + rotatedZ_temp * Math.cos(rotation.x);

        // Calculate Scale and Opacity based on Z (depth)
        const scale = (rotatedZ + radius * 2) / (radius * 3); 
        const opacity = Math.max(0.2, (rotatedZ + radius) / (radius * 2)); 
        const blur = rotatedZ < 0 ? '2px' : '0px'; 

        return (
          <motion.div
            key={index}
            className="absolute flex flex-col items-center justify-center gap-1 p-2 rounded-lg backdrop-blur-sm border border-white/5 shadow-sm transition-colors duration-300 hover:bg-white/10 hover:border-primary/50 hover:z-50"
            style={{
              transform: `translate3d(${rotatedX}px, ${rotatedY}px, 0) scale(${scale})`,
              opacity: opacity,
              filter: `blur(${blur})`,
              zIndex: Math.round(rotatedZ), 
              backgroundColor: 'rgba(15, 23, 42, 0.8)', 
            }}
          >
            <div className="text-2xl" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            {/* Added Name Text */}
            <span className="text-[10px] font-bold text-white whitespace-nowrap bg-black/50 px-1 rounded">
                {skill.name}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Skills;