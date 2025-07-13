'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

interface BackToTopProps {
  showBackToTop: boolean;
  scrollToTop: () => void;
}

export default function BackToTop({ showBackToTop, scrollToTop }: BackToTopProps) {
  return (
    <AnimatePresence>
      {showBackToTop && (
        <motion.button
          className="fixed bottom-8 right-8 p-3 text-white rounded-full shadow-lg z-40"
          style={{ backgroundColor: 'var(--primary)' }}
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{
            scale: 1.1,
            backgroundColor: 'var(--primary)',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
          }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
