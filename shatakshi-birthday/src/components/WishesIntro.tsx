'use client';

import { motion } from 'framer-motion';
import { Mail, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface WishesIntroProps {
  onClick: () => void;
}

export function WishesIntro({ onClick }: WishesIntroProps) {
  return (
    <section id="wishes-intro" className="relative py-24 sm:py-32 lg:py-40" aria-labelledby="wishes-intro-heading">
      <div className="section-container">
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-accent/10 text-accent mb-8"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <Mail className="w-5 h-5" aria-hidden="true" />
            <span className="font-handwritten text-lg">Letters for You</span>
          </motion.div>

          <motion.h2
            id="wishes-intro-heading"
            className="heading-lg text-primary mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7 }}
          >
            Letters for You
          </motion.h2>

          <motion.p
            className="body-lg text-text-light mb-10 text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            Everyone wanted to leave you something they&apos;ll probably never say this dramatically in person.
          </motion.p>

          <motion.button
            onClick={onClick}
            className="btn-primary group inline-flex items-center gap-3"
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            aria-label="Read the letters - scroll to wishes"
          >
            <Mail className="w-5 h-5" aria-hidden="true" />
            <span>Read the letters</span>
            <motion.span
              className="inline-block"
              animate={{ x: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-5 h-5 text-gold" aria-hidden="true" />
            </motion.span>
          </motion.button>

          {/* Decorative elements */}
          <motion.div
            className="absolute top-20 right-0 w-32 h-32 opacity-20"
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            aria-hidden="true"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full text-accent">
              <path d="M50 10 L60 40 L90 40 L65 60 L75 90 L50 75 L25 90 L35 60 L10 40 L40 40 Z" fill="none" stroke="currentColor" strokeWidth="1" />
            </svg>
          </motion.div>

          <motion.div
            className="absolute bottom-20 left-0 w-24 h-24 opacity-15"
            animate={{ rotate: -360 }}
            transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
            aria-hidden="true"
          >
            <svg viewBox="0 0 100 100" className="w-full h-full text-gold">
              <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="0.5" />
              <circle cx="50" cy="50" r="10" fill="currentColor" opacity="0.3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}