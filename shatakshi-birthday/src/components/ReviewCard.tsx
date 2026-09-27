'use client';

import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { Wish } from '@/lib/wishes';
import { cn } from '@/lib/utils';

interface ReviewCardProps {
  wish: Wish;
  index: number;
}

export function ReviewCard({ wish, index }: ReviewCardProps) {
  const getInitialsColor = (color: string) => {
    return color;
  };

  return (
    <motion.article
      className="relative bg-card rounded-card-lg shadow-soft p-6 sm:p-8 transition-all duration-300 hover:shadow-lift"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
    >
      {/* Top row: avatar, name, date */}
      <div className="flex items-start gap-4 mb-4">
        <div
          className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-white font-heading font-medium text-xl"
          style={{ backgroundColor: wish.authorColor }}
          aria-hidden="true"
        >
          {wish.authorInitial}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-1">
            <h3 className="font-heading text-lg font-medium text-primary">{wish.authorName}</h3>
            <div className="flex items-center gap-1" aria-label="5 out of 5 stars">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-gold text-gold" aria-hidden="true" />
              ))}
            </div>
          </div>
          <time className="font-body text-sm text-text-light" dateTime={wish.date}>
            {wish.date}
          </time>
        </div>
      </div>

      {/* Message */}
      <motion.div
        className="prose prose-sm max-w-none text-text leading-relaxed"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
      >
        <p className="whitespace-pre-wrap font-body">{wish.message}</p>
      </motion.div>

      {/* Decorative corner */}
      <div className="absolute top-4 right-4 w-8 h-8 opacity-5" aria-hidden="true">
        <svg viewBox="0 0 24 24" className="w-full h-full text-accent">
          <path d="M12 2L22 12L12 22L2 12Z" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      </div>
    </motion.article>
  );
}