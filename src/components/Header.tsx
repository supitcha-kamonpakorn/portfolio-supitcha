'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

interface HeaderProps {
  isMenuOpen: boolean;
  setIsMenuOpen: (isOpen: boolean) => void;
  activeSection: string;
}

export default function Header({ isMenuOpen, setIsMenuOpen, activeSection }: HeaderProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b"
      style={{
        backgroundColor: 'var(--background)/80',
        borderColor: 'var(--border)',
      }}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <motion.h1
            className="text-xl font-bold font-poppins"
            style={{ color: 'var(--foreground)' }}
            whileHover={{ scale: 1.05 }}
          >
            Portfolio - Supitcha
          </motion.h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {['about', 'experience', 'education', 'skills', 'projects', 'contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item}`}
                className="capitalize"
                style={{
                  color: activeSection === item ? 'var(--primary)' : 'var(--muted-foreground)',
                  fontWeight: activeSection === item ? '500' : 'normal',
                }}
                whileHover={{
                  color: 'var(--primary)',
                  scale: 1.05,
                  y: -2,
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              >
                {item === 'about' ? 'About me' : item === 'contact' ? 'Contact me' : item}
              </motion.a>
            ))}
          </nav>

          {/* Theme Toggle */}
          <motion.button
            onClick={toggleTheme}
            className="p-2 rounded-lg"
            style={{ color: 'var(--foreground)' }}
            whileHover={{
              backgroundColor: 'var(--muted)',
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
          </motion.button>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            whileHover={{
              backgroundColor: 'var(--muted)',
              scale: 1.05,
            }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden border-t"
            style={{
              backgroundColor: 'var(--card)',
              borderColor: 'var(--border)',
            }}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4 space-y-4">
              {['about', 'experience', 'education', 'skills', 'projects', 'contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item}`}
                  className="block capitalize"
                  style={{ color: 'var(--muted-foreground)' }}
                  onClick={() => setIsMenuOpen(false)}
                  whileHover={{
                    color: 'var(--primary)',
                    x: 10,
                    scale: 1.05,
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    delay: index * 0.1,
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                  }}
                >
                  {item === 'about' ? 'About me' : item === 'contact' ? 'Contact me' : item}
                </motion.a>
              ))}

              {/* Theme Toggle for Mobile */}
              <motion.button
                onClick={toggleTheme}
                className="flex items-center space-x-2 p-2 rounded-lg w-full text-left"
                style={{ color: 'var(--muted-foreground)' }}
                whileHover={{
                  color: 'var(--primary)',
                  backgroundColor: 'var(--muted)',
                  x: 10,
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  delay: 0.6,
                  type: 'spring',
                  stiffness: 300,
                  damping: 20,
                }}
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
