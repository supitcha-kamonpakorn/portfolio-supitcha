'use client';

import { motion } from 'framer-motion';
import { BarChart3, Palette, Code, Database, Globe2, Settings } from 'lucide-react';
import Image from 'next/image';

const skillCategories = [
  {
    category: 'Office Tools',
    skills: 'Microsoft Office (Excel - Pivot Tables, VLOOKUP), Google Sheets',
    icon: BarChart3,
  },
  {
    category: 'Data Visualization',
    skills: 'Power BI, Looker Studio, Tableau',
    icon: BarChart3,
  },
  {
    category: 'Design',
    skills: 'Canva, Keynote',
    icon: Palette,
  },
  {
    category: 'Programming & Databases',
    skills: 'SQL (SQLite), R Programming (basic), Python Programming (basic)',
    icon: Code,
  },
  {
    category: 'Data Management',
    skills: 'Redcap',
    icon: Database,
  },
  {
    category: 'Website Building',
    skills: 'WordPress, Wix',
    icon: Globe2,
  },
  {
    category: 'Project Management Tools',
    skills: 'Trello, Notion',
    icon: Settings,
  },
];

const skillIcons = [
  { src: '/image/Google sheet-logo.png', alt: 'Google Sheets', name: 'Google Sheets' },
  { src: '/image/Keynote-logo.png', alt: 'Keynote', name: 'Keynote' },
  { src: '/image/Looker_studio-logo.png', alt: 'Looker Studio', name: 'Looker Studio' },
  { src: '/image/Notion-logo.png', alt: 'Notion', name: 'Notion' },
  { src: '/image/PowerBI-logo.png', alt: 'Power BI', name: 'Power BI' },
  { src: '/image/Python-logo.png', alt: 'Python', name: 'Python' },
  { src: '/image/R-logo.png', alt: 'R Programming', name: 'R Programming' },
  { src: '/image/Redcap-logo.png', alt: 'RedCap', name: 'RedCap' },
  { src: '/image/SQLite-logo.png', alt: 'SQLite', name: 'SQLite' },
  { src: '/image/Trello-logo.png', alt: 'Trello', name: 'Trello' },
  { src: '/image/WIX-Logo.png', alt: 'Wix', name: 'Wix' },
  { src: '/image/Wordpress-logo.png', alt: 'WordPress', name: 'WordPress' },
];

export default function Skills() {
  const floatingAnimation = {
    animate: {
      y: [0, -10, 0],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut' as const,
      },
    },
  };

  return (
    <section id="skills" className="py-20" style={{ backgroundColor: 'var(--muted)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            className="text-4xl font-bold mb-12 text-center font-poppins"
            style={{ color: 'var(--foreground)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            Technical Skills
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {skillCategories.map((skill, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-lg shadow-lg"
                style={{
                  backgroundColor: 'var(--card)',
                  borderColor: 'var(--border)',
                }}
                whileHover={{
                  y: -5,
                  boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                  scale: 1.02,
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-4">
                  <skill.icon className="w-6 h-6 mt-1" style={{ color: 'var(--primary)' }} />
                  <div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: 'var(--card-foreground)' }}>
                      {skill.category}
                    </h3>
                    <p style={{ color: 'var(--muted-foreground)' }}>{skill.skills}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills Icons */}
          <div className="grid grid-cols-3 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-6">
            {skillIcons.map((icon, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center p-4 rounded-lg shadow-lg"
                style={{
                  backgroundColor: 'var(--card)',
                  borderColor: 'var(--border)',
                }}
                whileHover={{
                  scale: 1.1,
                  y: -5,
                  boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
                }}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: index * 0.05,
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                }}
                viewport={{ once: true }}
              >
                <motion.div className="relative w-12 h-12 mb-2">
                  <motion.div animate={index % 3 === 0 ? floatingAnimation.animate : {}}>
                    <Image src={icon.src} alt={icon.alt} fill className="object-contain" />
                  </motion.div>
                </motion.div>
                <span className="text-xs text-center" style={{ color: 'var(--muted-foreground)' }}>
                  {icon.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
