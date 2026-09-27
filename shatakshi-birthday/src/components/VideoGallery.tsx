'use client';

import { motion } from 'framer-motion';
import { Play, Volume2 } from 'lucide-react';
import { videos } from '@/lib/videos';
import { cn } from '@/lib/utils';

interface VideoCardProps {
  video: typeof videos[0];
  index: number;
}

function VideoCard({ video, index }: VideoCardProps) {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ delay: index * 0.15, duration: 0.7 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative aspect-video rounded-card-lg overflow-hidden bg-primary/5">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent z-10" />

        <div className="absolute inset-0 flex items-center justify-center z-20">
          <motion.button
            className={cn(
              'p-4 rounded-full bg-white/10 backdrop-blur-sm text-white',
              'transition-all duration-300',
              'hover:bg-white/20 hover:scale-110',
              'focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-primary'
            )}
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? `Pause ${video.title}` : `Play ${video.title}`}
            whileTap={{ scale: 0.9 }}
          >
            {isPlaying ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-8 h-8 flex items-center justify-center"
              >
                <Volume2 className="w-5 h-5" />
              </motion.div>
            ) : (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-8 h-8 flex items-center justify-center pl-1"
              >
                <Play className="w-5 h-5" />
              </motion.div>
            )}
          </motion.button>
        </div>

        {/* Placeholder thumbnail */}
        <div className="absolute inset-0 bg-gradient-to-br from-gold/10 to-accent/5 flex items-center justify-center">
          <span className="font-handwritten text-accent/50 text-xl">🎬</span>
        </div>

        {/* Duration badge */}
        <div className="absolute bottom-4 right-4 bg-primary/90 text-white px-3 py-1 rounded-full text-sm font-medium z-20">
          {video.duration}
        </div>
      </div>

      <div className="mt-4 text-left">
        <motion.h3
          className="heading-sm text-primary"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
        >
          {video.title}
        </motion.h3>
        <motion.p
          className="body-sm text-text-light mt-1"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.15 + 0.4, duration: 0.5 }}
        >
          {video.description}
        </motion.p>
      </div>

      {/* Hover glow effect */}
      <motion.div
        className="absolute -inset-4 rounded-[32px] bg-gold/20 blur-2xl opacity-0"
        animate={{ opacity: isHovered ? 0.5 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ zIndex: -1 }}
      />
    </motion.div>
  );
}

export function VideoGallery() {
  return (
    <section id="videos" className="relative py-24 sm:py-32 lg:py-40 bg-primary" aria-labelledby="videos-heading">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5" aria-hidden="true">
        <svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg">
          <path d="M30 0L60 30L30 60L0 30Z" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="section-container relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 id="videos-heading" className="heading-lg text-white mb-4">
            Some moments were better moving.
          </h2>
          <p className="handwritten-lg text-gold">Press play to relive them</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {videos.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

import React from 'react';