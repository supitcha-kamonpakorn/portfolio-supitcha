'use client';

import { motion } from 'framer-motion';
import { Mail, Globe, Download } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20" style={{ backgroundColor: 'var(--muted)' }}>
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
            Contact Me
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="p-8 rounded-lg shadow-lg min-h-[200px] flex flex-col justify-center"
              style={{ backgroundColor: 'var(--card)' }}
              whileHover={{
                y: -5,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                scale: 1.02,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Mail className="w-8 h-8 mx-auto mb-4" style={{ color: 'var(--primary)' }} />
              <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--card-foreground)' }}>
                Email
              </h3>
              <motion.a
                href="mailto:supitcha.kamo@gmail.com"
                className="text-center break-words px-2"
                style={{ color: 'var(--primary)' }}
                whileHover={{ color: 'var(--primary)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                supitcha.kamo@gmail.com
              </motion.a>
            </motion.div>

            <motion.div
              className="p-8 rounded-lg shadow-lg min-h-[200px] flex flex-col justify-center"
              style={{ backgroundColor: 'var(--card)' }}
              whileHover={{
                y: -5,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                scale: 1.02,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Globe className="w-8 h-8 mx-auto mb-4" style={{ color: 'var(--primary)' }} />
              <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--card-foreground)' }}>
                Website
              </h3>
              <motion.a
                href="https://kangsomsupitcha.wordpress.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-center break-words px-2"
                style={{ color: 'var(--primary)' }}
                whileHover={{ color: 'var(--primary)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                kangsomsupitcha.wordpress.com
              </motion.a>
            </motion.div>

            <motion.div
              className="p-8 rounded-lg shadow-lg min-h-[200px] flex flex-col justify-center"
              style={{ backgroundColor: 'var(--card)' }}
              whileHover={{
                y: -5,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                scale: 1.02,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Download className="w-8 h-8 mx-auto mb-4" style={{ color: 'var(--primary)' }} />
              <h3 className="text-lg font-semibold mb-4" style={{ color: 'var(--card-foreground)' }}>
                Resume
              </h3>
              <motion.a
                href="/CV_Supitcha_2025.pdf"
                target="_blank"
                download="CV_Supitcha_2025.pdf"
                className="text-center break-words px-2"
                style={{ color: 'var(--primary)' }}
                whileHover={{ color: 'var(--primary)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                Download PDF
              </motion.a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
