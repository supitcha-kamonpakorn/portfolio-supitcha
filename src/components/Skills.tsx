'use client';

import { motion } from 'framer-motion';
import {
  BarChart3,
  Palette,
  Code,
  Database,
  Globe2,
  Settings,
  FileSpreadsheet,
  Presentation,
  BarChart,
  BookOpen,
  CheckSquare,
} from 'lucide-react';

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
  { icon: FileSpreadsheet, name: 'Google Sheets', color: '#0F9D58' },
  { icon: Presentation, name: 'Keynote', color: '#007AFF' },
  { icon: BarChart, name: 'Looker Studio', color: '#4285F4' },
  { icon: BookOpen, name: 'Notion', color: '#000000' },
  { icon: BarChart3, name: 'Power BI', color: '#F2C811' },
  { icon: Code, name: 'Python', color: '#3776AB' },
  { icon: Code, name: 'R Programming', color: '#276DC3' },
  { icon: Database, name: 'RedCap', color: '#CC0000' },
  { icon: Database, name: 'SQLite', color: '#003B57' },
  { icon: CheckSquare, name: 'Trello', color: '#0079BF' },
  { icon: Globe2, name: 'Wix', color: '#0C6EFC' },
  { icon: Globe2, name: 'WordPress', color: '#21759B' },
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
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-8 sm:mb-12 text-center font-poppins px-2 sm:px-0"
            style={{ color: 'var(--foreground)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
          >
            Technical Skills
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16">
            {skillCategories.map((skill, index) => (
              <motion.div
                key={index}
                className="px-6 py-4 sm:px-8 sm:py-6 rounded-lg shadow-lg"
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
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <skill.icon
                    className="w-5 h-5 sm:w-6 sm:h-6 mt-1 flex-shrink-0"
                    style={{ color: 'var(--primary)' }}
                  />
                  <div className="min-w-0">
                    <h3
                      className="text-base sm:text-lg font-semibold mb-1 sm:mb-2"
                      style={{ color: 'var(--card-foreground)' }}
                    >
                      {skill.category}
                    </h3>
                    <p className="text-sm sm:text-base" style={{ color: 'var(--muted-foreground)' }}>
                      {skill.skills}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Skills Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-12 gap-3 sm:gap-4 lg:gap-6">
            {skillIcons.map((skillIcon, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center px-2 py-4 sm:px-3 sm:py-5 rounded-lg shadow-lg"
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
                <motion.div className="relative w-10 h-10 sm:w-12 sm:h-12 mb-2 flex items-center justify-center">
                  <motion.div animate={index % 3 === 0 ? floatingAnimation.animate : {}}>
                    <skillIcon.icon className="w-6 h-6 sm:w-8 sm:h-8" style={{ color: skillIcon.color }} />
                  </motion.div>
                </motion.div>
                <span className="text-xs text-center leading-tight" style={{ color: 'var(--muted-foreground)' }}>
                  {skillIcon.name}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
