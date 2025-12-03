import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Send, CheckCircle, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');

    try {
      // Using FormSubmit.co AJAX endpoint for free email delivery
      const response = await fetch("https://formsubmit.co/ajax/radhikasonagra2003@gmail.com", {
        method: "POST",
        headers: { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Portfolio Message from ${formData.name}`,
        })
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Reset success message after 5 seconds
        setTimeout(() => setStatus('idle'), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-20 bg-darker border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-6">Let's Work <span className="text-primary">Together</span></h2>
            <p className="text-gray-400 mb-8">
              I'm always open to discussing product design work or partnership opportunities. 
              As a full-stack developer with a passion for AI, I can bring your ideas to life.
            </p>

            <div className="space-y-4">
              <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 text-gray-300 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
              >
                <div className="p-3 bg-white/5 rounded-lg text-primary">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Email</div>
                  <div>radhikasonagra2003@gmail.com</div>
                </div>
              </motion.div>
              
               <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 text-gray-300 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
               >
                <div className="p-3 bg-white/5 rounded-lg text-secondary">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Phone</div>
                  <div>+91 9313757808</div>
                </div>
              </motion.div>

               <motion.div 
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 text-gray-300 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
               >
                <div className="p-3 bg-white/5 rounded-lg text-primary">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs text-gray-500">Location</div>
                  <div>Ahmedabad, Gujarat</div>
                </div>
              </motion.div>
            </div>

            <div className="flex gap-4 mt-8">
              <motion.a 
                href="https://www.linkedin.com/in/radhika-sonagra-86a897234"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/5 rounded-full hover:bg-primary hover:text-white transition-all text-gray-400"
              >
                <Linkedin size={20} />
              </motion.a>
              <motion.a 
                href="https://github.com/radhikasonagra"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/5 rounded-full hover:bg-secondary hover:text-white transition-all text-gray-400"
              >
                <Github size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-white/5 p-8 rounded-2xl border border-white/10"
          >
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Name</label>
                <input 
                  type="text" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-darker border border-white/10 rounded-lg p-3 text-white focus:border-primary outline-none transition-colors focus:ring-1 focus:ring-primary/50" 
                  placeholder="Enter your name" 
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-darker border border-white/10 rounded-lg p-3 text-white focus:border-primary outline-none transition-colors focus:ring-1 focus:ring-primary/50" 
                  placeholder="Enter your email  " 
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Message</label>
                <textarea 
                  name="message"
                  rows={4} 
                  value={formData.message}
                  onChange={handleChange}
                  required
                  className="w-full bg-darker border border-white/10 rounded-lg p-3 text-white focus:border-primary outline-none transition-colors focus:ring-1 focus:ring-primary/50" 
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={status === 'sending'}
                className={`w-full py-3 rounded-lg font-bold text-white shadow-lg transition-all flex items-center justify-center gap-2 ${
                  status === 'success' ? 'bg-green-600' : 
                  status === 'error' ? 'bg-red-600' :
                  'bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-primary/20'
                }`}
              >
                {status === 'sending' ? (
                  <>Sending...</>
                ) : status === 'success' ? (
                  <><CheckCircle size={20} /> Message Sent!</>
                ) : status === 'error' ? (
                  <><AlertCircle size={20} /> Failed. Try Again.</>
                ) : (
                  <><Send size={18} /> Send Message</>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
        
        <div className="border-t border-white/10 mt-20 pt-8 text-center text-gray-500 text-sm">
        Radhika Sonagra
        </div>
      </div>
    </section>
  );
};

export default Contact;