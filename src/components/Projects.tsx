'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="py-20" style={{ backgroundColor: 'var(--background)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.h2
            className="text-4xl font-bold mb-12 font-poppins"
            style={{ color: 'var(--foreground)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            Projects
          </motion.h2>

          <motion.div
            className="p-8 rounded-lg shadow-xl text-white"
            style={{
              background: 'linear-gradient(to right, var(--primary), var(--chart-2))',
            }}
            whileHover={{
              scale: 1.02,
              y: -5,
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <h3 className="text-2xl font-semibold mb-4">My Portfolio Website</h3>
            <p className="text-lg mb-6 opacity-90">See my example Data Visualization, Certificates, and Artwork</p>
            <motion.a
              href="https://kangsomsupitcha.wordpress.com/my-portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-6 py-3 rounded-lg font-medium"
              style={{
                backgroundColor: 'var(--background)',
                color: 'var(--primary)',
              }}
              whileHover={{
                scale: 1.05,
                backgroundColor: 'var(--muted)',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <span>Visit my website</span>
              <ExternalLink size={20} />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
