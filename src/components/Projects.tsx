'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-20 relative" style={{ backgroundColor: 'var(--background)' }}>
      <div className="absolute inset-0 bg-gradient-to-bl from-cyan-400/5 via-purple-400/5 to-pink-400/5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            className="text-4xl font-bold mb-12 font-poppins p-6 liquid-glass-strong rounded-3xl"
            style={{ color: 'var(--foreground)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            Projects
          </motion.h2>

          <motion.div
            className="p-8 rounded-3xl text-white liquid-glass-card relative overflow-hidden"
            style={{
              background: 'linear-gradient(135deg, var(--primary), var(--chart-2))',
            }}
            whileHover={{
              scale: 1.05,
              y: -10,
              rotate: 1,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
            <div className="relative z-10">
              <h3 className="text-2xl font-semibold mb-4">My Portfolio Website</h3>
              <p className="text-lg mb-6 opacity-90">See my example Data Visualization, Certificates, and Artwork</p>
              <motion.a
                href="https://kangsomsupitcha.wordpress.com/my-portfolio/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-2xl font-medium liquid-glass-hover"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  color: 'white',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  backdropFilter: 'blur(10px)',
                }}
                whileHover={{
                  scale: 1.1,
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                <span>Visit my website</span>
                <ExternalLink size={20} />
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
