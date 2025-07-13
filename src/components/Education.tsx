'use client';

import { motion } from 'framer-motion';
import { Calendar, GraduationCap } from 'lucide-react';

const educationData = [
  {
    degree: 'Master of Science in toxicology and nutrition for food safety',
    school: 'Mahidol University',
    period: '2019 - 2023',
    type: '(M.Sc.)',
  },
  {
    degree: "Bachelor's Degree, Faculty of Science",
    school: 'Mahidol University',
    period: '2016 - 2019',
    type: '(B.Sc.)',
  },
];

export default function Education() {
  return (
    <section id="education" className="py-20 relative" style={{ backgroundColor: 'var(--background)' }}>
      <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 via-rose-400/5 to-indigo-400/5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            className="text-4xl font-bold mb-12 text-center font-poppins p-6 liquid-glass-strong rounded-3xl"
            style={{ color: 'var(--foreground)' }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
          >
            Education
          </motion.h2>

          <div className="space-y-6">
            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-3xl border-l-4 liquid-glass-card"
                style={{
                  borderColor: 'var(--chart-2)',
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                  rotate: 1,
                }}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  delay: index * 0.2,
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                }}
                viewport={{ once: true }}
              >
                <div className="flex items-start space-x-4">
                  <GraduationCap className="w-6 h-6 mt-1" style={{ color: 'var(--chart-2)' }} />
                  <div>
                    <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--foreground)' }}>
                      {edu.school}
                    </h3>
                    <p className="mb-2" style={{ color: 'var(--muted-foreground)' }}>
                      {edu.type} {edu.degree}
                    </p>
                    <div className="flex items-center text-sm" style={{ color: 'var(--muted-foreground)' }}>
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{edu.period}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
