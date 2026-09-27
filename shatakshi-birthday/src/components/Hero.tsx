'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

interface HeroProps {
  onScrollToNext: () => void;
}

export function Hero({ onScrollToNext }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" aria-labelledby="hero-heading">
      {/* Background dust particles */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
              scale: [0.5, 1, 0.5],
              x: [(Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100],
              y: [(Math.random() - 0.5) * 100, (Math.random() - 0.5) * 100],
            }}
            transition={{
              duration: 8 + Math.random() * 8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 4,
            }}
          />
        ))}
      </motion.div>

      {/* Floating polaroid */}
      <motion.div
        className="absolute pointer-events-none"
        style={{ top: '15%', right: '10%' }}
        animate={{
          y: [0, -30, 0],
          x: [0, 20, 0],
          rotate: [-3, 2, -3],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <div className="polaroid-frame w-48" style={{ aspectRatio: '4/5' }}>
          <div className="aspect-[4/5] bg-gradient-to-br from-gold/20 to-accent/10 flex items-center justify-center">
            <span className="font-handwritten text-accent text-lg opacity-50">📷</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.h1
          id="hero-heading"
          className="heading-xl text-primary mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Happy Birthday, Shatakshi.
        </motion.h1>

        <motion.p
          className="handwritten-xl max-w-xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Made with love by the people who make your life a little more chaotic.
        </motion.p>

        <motion.button
          onClick={onScrollToNext}
          className="btn-primary group"
          whileHover={{ y: -4, scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          aria-label="Open your gift - scroll to memories"
        >
          <span>Open your gift</span>
          <motion.span
            className="inline-block"
            animate={{ x: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            ✨
          </motion.span>
        </motion.button>

        {/* Scroll indicator - positioned relative to content container for alignment */}
        <motion.div
          className="mt-12 flex flex-col items-center gap-2 text-text-light font-body text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 10, 0] }}
          transition={{
            opacity: { delay: 1.2, duration: 0.8 },
            y: { duration: 2, repeat: Infinity },
          }}
          aria-hidden="true"
        >
          <span>Scroll to begin</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}