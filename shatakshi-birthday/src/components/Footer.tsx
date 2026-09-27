'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Footer() {
  return (
    <footer id="ending" className="relative min-h-screen flex items-center justify-center overflow-hidden" role="contentinfo">
      {/* Night sky background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-primary via-[#0F172A] to-[#050A12]"
        aria-hidden="true"
      />

      {/* Stars */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-white"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.3 + Math.random() * 0.7,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [0.5, 1.5, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Constellation lines */}
      <svg className="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
        {[...Array(15)].map((_, i) => (
          <line
            key={i}
            x1={Math.random() * 100}
            y1={Math.random() * 100}
            x2={Math.random() * 100}
            y2={Math.random() * 100}
            stroke="currentColor"
            strokeWidth="0.3"
          />
        ))}
      </svg>

      {/* Floating cherry blossom */}
      <motion.div
        className="absolute pointer-events-none"
        style={{ left: '50%', top: '20%' }}
        animate={{
          x: [-50, 50, -50],
          y: [0, -30, 0],
          rotate: [-10, 10, -10],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        aria-hidden="true"
      >
        <svg className="w-16 h-16 text-accent/60 drop-shadow-[0_0_20px_rgba(166,30,77,0.3)]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2C12 2 8 8 8 12c0 4 4 8 4 8s4-4 4-8c0-4-4-10-4-10z" />
          <path d="M12 22v-8" />
          <path d="M8 12l4-4" />
          <path d="M16 12l-4-4" />
          <circle cx="12" cy="12" r="3" fill="currentColor" opacity="0.3" />
        </svg>
      </motion.div>

      <motion.div
        className="relative z-10 text-center px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
      >
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <svg className="w-20 h-20 mx-auto text-gold/30" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="0.5" aria-hidden="true">
            <circle cx="50" cy="50" r="40" />
            <circle cx="50" cy="50" r="25" />
            <circle cx="50" cy="50" r="10" fill="currentColor" opacity="0.2" />
            <path d="M50 10v80M10 50h80" strokeDasharray="5,10" />
          </svg>
        </motion.div>

        <motion.h2
          className="heading-lg text-white mb-6 font-light"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          Here&apos;s to more memories.
        </motion.h2>

        <motion.p
          className="handwritten-lg text-gold/80 mb-12 max-w-md mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
        >
          The story doesn't end here. It's just getting started.
        </motion.p>

        <Link
          href="/"
          className="btn-secondary group inline-flex items-center gap-3"
        >
          <motion.svg
            className="w-5 h-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            animate={{ rotate: [0, -360] }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            aria-hidden="true"
          >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
            <path d="M12 2v4" />
            <path d="M12 2l4 4-4 4" />
          </motion.svg>
          <span>Replay the story</span>
        </Link>

        {/* Credits */}
        <motion.div
          className="mt-16 pt-8 border-t border-white/10 text-white/40 font-body text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <p>Made with love, chaos, and too many coffee runs</p>
          <p className="mt-2 font-handwritten text-accent/60">For Shatakshi • Always</p>
        </motion.div>
      </motion.div>

      {/* Scroll indicator at bottom */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 font-body text-sm"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        aria-hidden="true"
      >
        <span>Scroll up to begin again</span>
        <motion.svg
          className="w-5 h-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          aria-hidden="true"
        >
          <path d="M18 15l-6-6-6 6" />
        </motion.svg>
      </motion.div>
    </footer>
  );
}