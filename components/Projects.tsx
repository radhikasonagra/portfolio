import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Youtube, ChevronLeft, ChevronRight, Code2, X } from 'lucide-react';
import { Project } from '../types';

const projects: Project[] = [
  {
    id: 1,
    title: "Cloud Kitchen System",
    category: "Full Stack",
    description: "A comprehensive dining solution featuring Stripe & BHIM UPI payments, a real-time kitchen display system, and automated order printing.",
    tech: ["React", "Stripe", "UPI", "Node.js", "MongoDB"],
    image: "https://bonrix.in/assets/img/Cloud-Kitchen-Ordering-System.jpg",
    youtubeUrl: "https://youtu.be/CBDFqqZ8Bls?si=ytevB8m-laAeQZHP",
    infoUrl: "https://bonrix.in/bonrix-cloud-kitchen-and-order-printing-solutions.html",
    liveUrl: "http://cloud-kitchen-food-order-web.bonrix.in"
  },
  {
    id: 2,
    title: "DQR Product Catalog",
    category: "Automation",
    description: "Smart catalogue system using Dynamic QR Codes. Integrated with Meta's WhatsApp Flow to automate product discovery and customer engagement.",
    tech: ["Meta API", "WhatsApp Flow", "Node.js", "Webhooks"],
    image: "https://bonrix.in/assets/img/product-catalog-front.jpg",
    youtubeUrl: "https://youtu.be/BIANMn6KpVI?si=Em86qRDEj7HIiGhB",
    infoUrl: "https://bonrix.in/dynamic-qr-code-display-whatsApp-flow.html"
  },
  {
    id: 3,
    title: "Travel Booking Whatsapp Flow",
    category: "Booking System",
    description: "Automated travel ticket reservation platform. Users can book tickets seamlessly via WhatsApp, receiving instant confirmation and digital tickets.",
    tech: ["React", "WhatsApp API", "Automation", "REST API"],
    image: "https://bonrix.in/assets/img/whatsapp-flows-4.jpg",
    youtubeUrl: "https://youtu.be/V--1q6fWbiY?si=VR5RZM8lI4R9OuNS",
    infoUrl: "https://bonrix.in/travel-booking-whatsapp-flow.html"
  },
  {
    id: 4,
    title: "Trek Booking WhatsApp Flow",
    category: "Travel Tech",
    description: "Adventure booking automation handling itineraries, slot management, and customer onboarding for trekking agencies.",
    tech: ["Node.js", "WhatsApp Flow", "Automation"],
    image: "https://bonrix.in/assets/img/trek-flow.jpg",
    youtubeUrl: "https://youtu.be/CxS2iIf_kRA?si=V0WKp06KOe4fpOfp",
    infoUrl: "https://bonrix.in/trek-booking-whatsapp-flow.html"
  },
  {
    id: 5,
    title: "Tour Booking WhatsApp Flow",
    category: "Travel Tech",
    description: "Comprehensive tour package booking system simplifying the reservation process for multi-day tours via WhatsApp.",
    tech: ["Node.js", "WhatsApp Flow", "Database"],
    image: "https://bonrix.in/assets/img/tour-flow(1).jpg",
    youtubeUrl: "https://youtube.com/shorts/qMNefvaj3oc?si=B6vdyC7UuFUN2oOM",
    infoUrl: "https://bonrix.in/tour-booking-whatsapp-flow.html"
  },
  {
    id: 6,
    title: "Bulk Voice Broadcast",
    category: "Telecom",
    description: "High-volume voice call broadcasting panel powered by FreeSWITCH and advanced OBD logic for mass communication.",
    tech: ["FreeSWITCH", "VoIP", "React", "Socket.io"],
    image: "https://bonrix.in/assets/img/voip-banner.jpg",
    youtubeUrl: "https://youtu.be/IC9chxiluK8?si=xtLDwWkGWU38dJbS",
    infoUrl: "https://bonrix.in/bonrix-bulk-voice-call-broadcast-system-advanced-OBD-panel-powered-by-freeSWITCH.html"
  },
  {
    id: 7,
    title: "DQR Order Admin",
    category: "Admin Panel",
    description: "Centralized dashboard for managing dynamic QR orders, tracking real-time metrics, user data, and sales reports.",
    tech: ["React", "Redux", "Charts.js", "Auth"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    liveUrl: "http://dqr-order.bonrix.in"
  },
  {
    id: 8,
    title: "Firmware IoT Portal",
    category: "IoT System",
    description: "Secure multi-tenant portal (Admin/Company/Client) for managing OTA embedded firmware updates and device monitoring.",
    tech: ["IoT", "Security", "RBAC", "Cloud"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    liveUrl: "http://firmware.embedded-innovations.com"
  }
];

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  const rotateCarousel = (direction: 'next' | 'prev') => {
    if (direction === 'next') {
      setCurrentIndex((prev) => (prev + 1) % projects.length);
    } else {
      setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    }
  };

  // 3D Config
  const cardWidth = 320; 
  const gap = 40; 
  const totalItems = projects.length;
  const radius = Math.max(450, (totalItems * (cardWidth + gap)) / (2 * Math.PI)); 
  const anglePerItem = 360 / totalItems;

  const currentProject = projects[currentIndex];

  // Helper to extract Video ID - kept for external link generation if needed
  const getVideoId = (url: string | undefined) => {
    if (!url) return null;
    try {
      let id = '';
      if (url.includes('youtu.be/')) {
        id = url.split('youtu.be/')[1].split('?')[0];
      } else if (url.includes('shorts/')) {
        id = url.split('shorts/')[1].split('?')[0];
      } else if (url.includes('v=')) {
        id = url.split('v=')[1].split('&')[0];
      }
      return id;
    } catch (e) {
      return null;
    }
  };

  const videoId = getVideoId(currentProject.youtubeUrl);

  return (
    <section id="projects" className="py-20 bg-darker overflow-hidden min-h-screen flex flex-col items-center justify-center relative">
       {/* Background Glow */}
       <motion.div 
         animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.05, 1] }}
         transition={{ duration: 5, repeat: Infinity }}
         className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" 
       />

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16 z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Project <span className="text-primary">Universe</span></h2>
        <p className="text-gray-400">3D Holographic Showcase. Rotate to explore.</p>
      </motion.div>

      {/* 3D SCENE CONTAINER */}
      <div className="relative w-full h-[400px] flex justify-center items-center perspective-[1200px] overflow-visible z-10">
        
        {/* CAROUSEL ROTATOR */}
        <motion.div
          className="relative w-[320px] h-[380px] preserve-3d"
          style={{ 
            transformStyle: 'preserve-3d',
          }}
          animate={{ rotateY: -currentIndex * anglePerItem }}
          transition={{ type: "spring", stiffness: 50, damping: 15, mass: 1 }}
        >
          {projects.map((project, index) => {
            const itemRotation = index * anglePerItem;
            
            return (
              <div
                key={project.id}
                className="absolute top-0 left-0 w-full h-full backface-visible"
                style={{
                  transform: `rotateY(${itemRotation}deg) translateZ(${radius}px)`,
                }}
              >
                {/* CARD CONTENT */}
                <div 
                  className={`relative w-full h-full rounded-2xl overflow-hidden border transition-all duration-500 group cursor-pointer ${
                     index === currentIndex 
                     ? 'bg-dark/80 border-primary/50 shadow-[0_0_50px_rgba(99,102,241,0.3)] scale-105' 
                     : 'bg-dark/40 border-white/5 opacity-50 grayscale hover:grayscale-0 hover:opacity-80'
                  }`}
                  onClick={() => {
                    if (index !== currentIndex) {
                      setCurrentIndex(index);
                    } else {
                      setModalOpen(true);
                    }
                  }}
                >
                  {/* Image */}
                  <div className="h-40 overflow-hidden relative">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark" />
                    <div className="absolute top-3 right-3 p-2 bg-black/50 backdrop-blur-md rounded-full border border-white/10">
                      <Code2 size={16} className="text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="text-secondary text-xs font-bold uppercase tracking-wider mb-2">{project.category}</div>
                    <h3 className="text-xl font-bold text-white mb-2 line-clamp-1">{project.title}</h3>
                    <p className="text-gray-400 text-sm mb-3 line-clamp-3">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.slice(0, 3).map((t, i) => (
                        <span key={i} className="text-[10px] px-2 py-1 bg-white/5 border border-white/10 rounded-md text-gray-300">
                          {t}
                        </span>
                      ))}
                      {project.tech.length > 3 && (
                        <span className="text-[10px] px-2 py-1 bg-white/5 border border-white/10 rounded-md text-gray-300">+{project.tech.length - 3}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>

      {/* CONTROLS */}
      <div className="flex items-center gap-6 mt-12 z-20">
        <button 
          onClick={() => rotateCarousel('prev')}
          className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary text-white transition-all shadow-lg backdrop-blur-md group"
        >
          <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
        </button>

        <div className="flex flex-col items-center">
            <button 
              onClick={() => setModalOpen(true)}
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-bold text-white shadow-lg shadow-primary/25 hover:shadow-primary/50 hover:scale-105 transition-all flex items-center gap-2"
            >
              <ExternalLink size={20} />
              View Details
            </button>
            <span className="text-gray-500 text-xs mt-3 font-mono">
                {currentIndex + 1} / {projects.length}
            </span>
        </div>

        <button 
          onClick={() => rotateCarousel('next')}
          className="p-4 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-primary text-white transition-all shadow-lg backdrop-blur-md group"
        >
          <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* DETAIL MODAL */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setModalOpen(false)}
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative bg-[#0f172a] border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden"
            >
                {/* Image Section (Replaced Video) */}
                <div className="w-full md:w-1/2 bg-black relative min-h-[300px] flex items-center justify-center overflow-hidden">
                    <img 
                      src={currentProject.image} 
                      alt={currentProject.title} 
                      className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500 scale-105" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>

                {/* Info Section */}
                <div className="w-full md:w-1/2 p-8 flex flex-col">
                    <button 
                        onClick={() => setModalOpen(false)}
                        className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10"
                    >
                        <X size={20} />
                    </button>

                    <div className="mb-6">
                        <span className="text-secondary text-sm font-bold uppercase tracking-wider">{currentProject.category}</span>
                        <h3 className="text-3xl font-bold mt-2">{currentProject.title}</h3>
                    </div>

                    <p className="text-gray-300 leading-relaxed mb-6">
                        {currentProject.description}
                    </p>

                    <div className="mb-8">
                        <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                            {currentProject.tech.map((t, i) => (
                                <span key={i} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="mt-auto flex gap-4 flex-wrap">
                        {currentProject.liveUrl && (
                            <a 
                                href={currentProject.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 min-w-[120px] py-3 bg-primary hover:bg-primary/90 rounded-lg font-bold text-center text-white transition-colors flex items-center justify-center gap-2"
                            >
                                <ExternalLink size={18} /> Live Demo
                            </a>
                        )}
                        {currentProject.youtubeUrl && (
                             <a 
                                href={currentProject.youtubeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 min-w-[120px] py-3 bg-red-600 hover:bg-red-700 rounded-lg font-bold text-center text-white transition-colors flex items-center justify-center gap-2"
                            >
                                <Youtube size={18} /> Watch Video
                            </a>
                        )}
                         {currentProject.infoUrl && (
                             <a 
                                href={currentProject.infoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 min-w-[120px] py-3 bg-white/10 hover:bg-white/20 rounded-lg font-bold text-center text-white transition-colors flex items-center justify-center gap-2"
                            >
                                <ExternalLink size={18} /> More Info
                            </a>
                        )}
                    </div>
                </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;