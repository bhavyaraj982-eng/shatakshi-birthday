'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { GalleryImage } from '@/lib/gallery';

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: GalleryImage[];
  initialIndex: number;
  onNavigate: (index: number) => void;
}

export function Lightbox({ isOpen, onClose, images, initialIndex, onNavigate }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = React.useState(initialIndex);

  React.useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex, isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return;
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') navigate(-1);
    if (e.key === 'ArrowRight') navigate(1);
  };

  const navigate = (direction: number) => {
    const newIndex = (currentIndex + direction + images.length) % images.length;
    setCurrentIndex(newIndex);
    onNavigate(newIndex);
  };

  if (!isOpen) return null;

  const currentImage = images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-primary/95 backdrop-blur-sm"
        onClick={onClose}
        onKeyDown={handleKeyDown}
        role="dialog"
        aria-modal="true"
        aria-label="Image lightbox"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: -20 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative max-w-[90vw] max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="max-w-[80vw] max-h-[80vh] object-contain rounded-lg shadow-lift"
            />
            <motion.button
              className={cn(
                'absolute top-6 right-6 p-2 rounded-full bg-white/10 backdrop-blur-sm',
                'text-white hover:bg-white/20 transition-colors',
                'focus:outline-none focus-visible:ring-2 focus-visible:ring-gold'
              )}
              onClick={onClose}
              aria-label="Close lightbox"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="w-6 h-6" />
            </motion.button>

            {images.length > 1 && (
              <>
                <motion.button
                  className={cn(
                    'absolute left-6 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-sm',
                    'text-white hover:bg-white/20 transition-colors',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-gold'
                  )}
                  onClick={() => navigate(-1)}
                  aria-label="Previous image"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>
                <motion.button
                  className={cn(
                    'absolute right-6 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/10 backdrop-blur-sm',
                    'text-white hover:bg-white/20 transition-colors',
                    'focus:outline-none focus-visible:ring-2 focus-visible:ring-gold'
                  )}
                  onClick={() => navigate(1)}
                  aria-label="Next image"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              </>
            )}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center text-white/70 font-body text-sm"
            >
              {currentIndex + 1} / {images.length}
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </AnimatePresence>
  );
}

import React from 'react';