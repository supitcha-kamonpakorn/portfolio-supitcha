'use client';

import { motion } from 'framer-motion';
import { Phone, Mail } from 'lucide-react';
import Image from 'next/image';

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
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
      type: 'spring',
      stiffness: 100,
      damping: 15,
    },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <motion.div
        className="container mx-auto text-center"
        variants={staggerContainer}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={fadeInUp} className="mb-8">
          <motion.div
            className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden border-4 border-white shadow-xl"
            whileHover={{
              scale: 1.05,
              rotate: 5,
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Image src="/Kangsom_Supitcha.png" alt="Supitcha Kamonpakorn" fill className="object-cover" priority />
          </motion.div>
        </motion.div>

        <motion.p
          variants={fadeInUp}
          className="text-lg mb-2 font-poppins"
          style={{ color: 'var(--muted-foreground)' }}
        >
          Hello, I am
        </motion.p>

        <motion.h1
          variants={fadeInUp}
          className="text-5xl md:text-7xl font-bold mb-8 font-poppins"
          style={{ color: 'var(--foreground)' }}
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          Data Analyst
        </motion.h1>

        <motion.div variants={fadeInUp} className="flex flex-wrap justify-center gap-3 mb-12 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <motion.span
              key={skill.name}
              className="px-4 py-2 text-white rounded-full text-sm font-medium shadow-lg"
              style={{
                background: 'linear-gradient(to right, var(--primary), var(--chart-2))',
              }}
              whileHover={{
                scale: 1.05,
                y: -2,
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.2)',
              }}
              whileTap={{ scale: 0.98 }}
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
        </motion.div>

        <motion.div variants={fadeInUp} className="flex justify-center space-x-6">
          <motion.a
            href="tel:0815516915"
            className="flex items-center space-x-2 px-6 py-3 text-white rounded-lg shadow-lg"
            style={{ backgroundColor: 'var(--primary)' }}
            whileHover={{
              scale: 1.05,
              backgroundColor: 'var(--primary)',
              boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Phone size={20} />
            <span>Call</span>
          </motion.a>
          <motion.a
            href="mailto:supitcha.kamo@gmail.com"
            className="flex items-center space-x-2 px-6 py-3 border-2 rounded-lg"
            style={{
              borderColor: 'var(--primary)',
              color: 'var(--primary)',
            }}
            whileHover={{
              scale: 1.05,
              backgroundColor: 'var(--primary)',
              color: '#ffffff',
              borderColor: 'var(--primary)',
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Mail size={20} />
            <span>Email</span>
          </motion.a>
        </motion.div>
      </motion.div>
    </section>
  );
}
