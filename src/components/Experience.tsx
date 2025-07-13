'use client';

import { motion } from 'framer-motion';
import { Download, Calendar, Briefcase } from 'lucide-react';

const jobExperiences = [
  {
    title: 'Freelance Tutor (Part-time)',
    company: 'Self-employed',
    period: '2017 - Present',
  },
  {
    title: 'Product Consultant and Operation',
    company: 'GENEUS CARE CO., LTD.',
    period: 'September - November 2022',
  },
  {
    title: 'Research Assistant (Part-time)',
    company: 'Mahidol University',
    period: 'January - May 2022',
  },
  {
    title: 'Botanic Garden Staff (Internship)',
    company: 'Queen Sirikit Botanic Garden, Mae Rim, Chiang Mai',
    period: 'May - July 2018',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20" style={{ backgroundColor: 'var(--muted)' }}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.h2
              className="text-4xl font-bold mb-6 font-poppins"
              style={{ color: 'var(--foreground)' }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              Experience
            </motion.h2>
            <motion.a
              href="/CV_Supitcha_2025.pdf"
              target="_blank"
              download
              className="inline-flex items-center space-x-2 px-6 py-3 text-white rounded-lg shadow-lg"
              style={{ backgroundColor: 'var(--chart-3)' }}
              whileHover={{
                scale: 1.05,
                backgroundColor: 'var(--chart-3)',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <Download size={20} />
              <span>Download CV</span>
            </motion.a>
          </div>

          <div className="space-y-8">
            <motion.div
              className="p-6 rounded-lg shadow-lg border-l-4"
              style={{
                backgroundColor: 'var(--card)',
                borderColor: 'var(--primary)',
              }}
              whileHover={{
                y: -5,
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
                scale: 1.02,
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <div className="flex items-start space-x-4">
                <Briefcase className="w-6 h-6 mt-1" style={{ color: 'var(--primary)' }} />
                <div>
                  <h3 className="text-xl font-semibold mb-2" style={{ color: 'var(--card-foreground)' }}>
                    Clinical Data Associate (Jr. CDA)
                  </h3>
                  <p className="mb-2" style={{ color: 'var(--muted-foreground)' }}>
                    The HIV Netherlands Australia Thailand Research Collaboration (HIV-NAT), IT and Data Department
                  </p>
                  <div className="flex items-center text-sm" style={{ color: 'var(--muted-foreground)' }}>
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>January 2023 - Present</span>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.h3
              className="text-2xl font-semibold mb-6 font-poppins"
              style={{ color: 'var(--foreground)' }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Pre-Career Experience
            </motion.h3>

            {jobExperiences.map((job, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-lg shadow-lg"
                style={{ backgroundColor: 'var(--card)' }}
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
                  <Briefcase className="w-6 h-6 mt-1" style={{ color: 'var(--muted-foreground)' }} />
                  <div>
                    <h4 className="text-lg font-semibold mb-2" style={{ color: 'var(--card-foreground)' }}>
                      {job.title}
                    </h4>
                    <p className="mb-2" style={{ color: 'var(--muted-foreground)' }}>
                      {job.company}
                    </p>
                    <div className="flex items-center text-sm" style={{ color: 'var(--muted-foreground)' }}>
                      <Calendar className="w-4 h-4 mr-1" />
                      <span>{job.period}</span>
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
