'use client';

import { motion } from 'framer-motion';
import { ReviewCard } from './ReviewCard';
import { wishes } from '@/lib/wishes';
import { cn } from '@/lib/utils';

export function Wishes() {
  return (
    <section id="wishes" className="relative py-24 sm:py-32 lg:py-40 bg-background" aria-labelledby="wishes-heading">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 id="wishes-heading" className="heading-lg text-primary mb-4">
            Google Review Style Wishes
          </h2>
          <p className="handwritten-lg">Five stars, infinite love</p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6 lg:space-y-8">
          {wishes.map((wish, index) => (
            <ReviewCard key={wish.id} wish={wish} index={index} />
          ))}
        </div>

        {/* Decorative floating elements */}
        <motion.div
          className="absolute top-20 right-10 w-16 h-16 opacity-10"
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" className="w-full h-full text-accent" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        </motion.div>

        <motion.div
          className="absolute bottom-20 left-10 w-12 h-12 opacity-10"
          animate={{ rotate: -360, scale: [1, 1.15, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" className="w-full h-full text-gold" fill="none" stroke="currentColor" strokeWidth="1">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 6v6l4 2" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}