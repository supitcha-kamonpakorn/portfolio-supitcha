'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, Globe } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-10 relative" style={{ backgroundColor: 'var(--background)' }}>
      <div className="absolute inset-0 bg-gradient-to-r from-purple-400/5 via-blue-400/5 to-pink-400/5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto p-8 rounded-3xl liquid-glass-strong shadow-2xl"
        >
          <motion.h2
            className="text-4xl font-bold mb-8 font-poppins"
            style={{ color: 'var(--foreground)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            About Me
          </motion.h2>
          <p className="text-lg leading-relaxed mb-8" style={{ color: 'var(--muted-foreground)' }}>
            Hello! My name is Supitcha Kamonpakorn. Being a dedicated employee with team player, fast learner and time
            management skills
          </p>

          <div className="flex justify-center space-x-8">
            <motion.a
              href="tel:0815516915"
              className="flex flex-col items-center p-4 rounded-2xl liquid-glass-hover border"
              style={{
                borderColor: 'rgba(255, 255, 255, 0.3)',
              }}
              whileHover={{
                y: -5,
                scale: 1.1,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Phone className="w-8 h-8 mb-2" style={{ color: 'var(--primary)' }} />
              <span className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                Phone
              </span>
            </motion.a>
            <motion.a
              href="mailto:supitcha.kamo@gmail.com"
              className="flex flex-col items-center p-4 rounded-2xl liquid-glass-hover border"
              style={{
                borderColor: 'rgba(255, 255, 255, 0.3)',
              }}
              whileHover={{
                y: -5,
                scale: 1.1,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Mail className="w-8 h-8 mb-2" style={{ color: 'var(--primary)' }} />
              <span className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                Email
              </span>
            </motion.a>
            <motion.a
              href="https://kangsomsupitcha.wordpress.com/my-portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-4 rounded-2xl liquid-glass-hover border"
              style={{
                borderColor: 'rgba(255, 255, 255, 0.3)',
              }}
              whileHover={{
                y: -5,
                scale: 1.1,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Globe className="w-8 h-8 mb-2" style={{ color: 'var(--primary)' }} />
              <span className="text-sm" style={{ color: 'var(--muted-foreground)' }}>
                Website
              </span>
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
