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
          className="fixed bottom-8 right-8 p-3 text-white rounded-full liquid-glass-strong z-40 border-2"
          style={{
            backgroundColor: 'var(--primary)',
            borderColor: 'rgba(255, 255, 255, 0.4)',
          }}
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0 }}
          whileHover={{
            scale: 1.2,
            rotate: 360,
          }}
          whileTap={{ scale: 0.8 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        >
          <ArrowUp size={24} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
