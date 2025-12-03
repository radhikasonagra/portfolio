import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-darker relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional <span className="text-primary">Journey</span></h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {/* Timeline Item */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            whileHover={{ x: 10 }}
            className="relative pl-8 border-l-2 border-primary/30 pb-12 last:pb-0 group"
          >
            <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_rgba(99,102,241,0.5)] group-hover:scale-125 transition-transform" />
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
              <h3 className="text-2xl font-bold text-white">Full Stack Developer</h3>
              <div className="flex items-center gap-2 text-sm text-gray-400 bg-white/5 px-3 py-1 rounded-full w-fit group-hover:bg-white/10 transition-colors">
                <Calendar size={14} />
                <span>Jan 15, 2024 - Present</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 text-secondary font-medium mb-4">
              <Briefcase size={18} />
              <span>Bonrix Software Systems, Ahmedabad</span>
            </div>
            
            <p className="text-gray-400 mb-4">
              Spearheading full-stack development for enterprise solutions. 
            </p>
            
            <ul className="space-y-3">
              {[
                "Developed a Cloud Kitchen & Table Ordering system integrating Stripe and BHIM UPI.",
                "Built Facebook Meta Flow automations using Node.js and Databases.",
                "Created React Dashboards for real-time message tracking via Webhooks.",
                "Engineered AI Chatbots (Text & Audio) using Gemini, Groq, Tensor studio AI and OpenAI.",
                "Implemented secure Flows with Razorpay integration."
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-gray-300">
                  <span className="mt-2 w-1.5 h-1.5 bg-secondary rounded-full shrink-0 group-hover:bg-primary transition-colors" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;