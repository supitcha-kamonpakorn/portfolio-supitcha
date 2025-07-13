'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState, useEffect } from 'react';


function TypewriterText({ text }: { text: string }) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText((prev) => prev + text[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <span>
      {displayText}
      <motion.span
        className="inline-block ml-1"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
      >
        |
      </motion.span>
    </span>
  );
}

const skills = [
  { name: 'Excel', category: 'office' },
  { name: 'SQL', category: 'programming' },
  { name: 'Python', category: 'programming' },
  { name: 'R programming', category: 'programming' },
  { name: 'Power BI', category: 'visualization' },
  { name: 'Tableau', category: 'visualization' },
  { name: 'Looker Studio', category: 'visualization' },
  { name: 'Canva', category: 'design' },
  { name: 'WordPress', category: 'web' },
  { name: 'Wix', category: 'web' },
];

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-8 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/10 via-purple-400/10 to-pink-400/10 animate-pulse"></div>
      <motion.div
        className="container mx-auto text-center relative z-10"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.6,
          ease: [0.6, -0.05, 0.01, 0.99],
          type: 'spring',
          stiffness: 100,
          damping: 15,
        }}
      >
        <motion.div className="mb-8">
          <motion.div
            className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 liquid-glass-strong"
            style={{
              borderColor: 'rgba(255, 255, 255, 0.5)',
            }}
            whileHover={{
              scale: 1.1,
              rotate: 10,
              boxShadow: '0 25px 50px -12px rgba(31, 38, 135, 0.6)',
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"></div>
            <Image src="/Kangsom_Supitcha.png" alt="Supitcha Kamonpakorn" fill className="object-cover" priority />
          </motion.div>
        </motion.div>

        <motion.p className="text-lg mb-2 font-poppins" style={{ color: 'var(--muted-foreground)' }}>
          Hello, I am
        </motion.p>

        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-8 font-poppins min-h-[1.2em] liquid-glass-card rounded-3xl p-6"
          style={{ color: 'var(--foreground)' }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <TypewriterText text="Project Manager & Data Analyst" />
        </motion.h1>

        <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto p-6 liquid-glass rounded-3xl">
          {skills.map((skill, index) => (
            <motion.span
              key={skill.name}
              className="px-4 py-2 rounded-full text-sm font-medium liquid-glass-hover"
              style={{
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.1))',
                borderColor: 'rgba(255, 255, 255, 0.4)',
                color: 'var(--foreground)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                backdropFilter: 'blur(15px)',
                boxShadow: '0 8px 25px rgba(31, 38, 135, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.4)',
              }}
              whileHover={{
                scale: 1.1,
                y: -5,
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.2))',
                boxShadow: '0 15px 35px rgba(31, 38, 135, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.6)',
              }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.1,
                type: 'spring',
                stiffness: 300,
                damping: 20,
              }}
            >
              {skill.name}
            </motion.span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
