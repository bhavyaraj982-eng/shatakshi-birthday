'use client';

import { motion } from 'framer-motion';
import { galleryImages } from '@/lib/gallery';
import { Lightbox } from './Lightbox';
import { cn } from '@/lib/utils';

const masonryLayout = [
  { span: 2, height: 'h-64' }, // spans 2 rows
  { span: 1, height: 'h-48' },
  { span: 1, height: 'h-56' },
  { span: 2, height: 'h-72' },
  { span: 1, height: 'h-48' },
  { span: 1, height: 'h-52' },
  { span: 2, height: 'h-68' },
  { span: 1, height: 'h-56' },
  { span: 1, height: 'h-48' },
  { span: 2, height: 'h-72' },
  { span: 1, height: 'h-52' },
  { span: 1, height: 'h-56' },
];

export function MasonryGallery() {
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const [lightboxIndex, setLightboxIndex] = React.useState(0);
  const images = galleryImages.filter((img) => img.category === 'favourite' || img.category === 'beautiful');

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const navigateLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  return (
    <section id="gallery" className="relative py-24 sm:py-32 lg:py-40" aria-labelledby="gallery-heading">
      <div className="section-container">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 id="gallery-heading" className="heading-lg text-primary mb-4">
            Our Wall
          </h2>
          <p className="handwritten-lg">Moments frozen in time</p>
        </motion.div>

        <div
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6"
          role="list"
          aria-label="Photo gallery"
        >
          {images.map((image, index) => {
            const layout = masonryLayout[index % masonryLayout.length];
            const rotation = (Math.random() - 0.5) * 4;

            return (
              <motion.div
                key={image.id}
                className={cn(
                  'relative group',
                  layout.height,
                  'lg:h-auto lg:aspect-[4/5]',
                  layout.span === 2 && 'lg:row-span-2'
                )}
                style={{
                  transform: `rotate(${rotation}deg)`,
                }}
                initial={{ opacity: 0, scale: 0.9, rotate: rotation + (Math.random() - 0.5) * 10 }}
                whileInView={{ opacity: 1, scale: 1, rotate: rotation }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ delay: index * 0.05, duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
                whileHover={{ zIndex: 10, rotate: rotation, scale: 1.02 }}
              >
                <article className="relative h-full">
                  <button
                    onClick={() => openLightbox(index)}
                    className="absolute inset-0 w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    aria-label={`View ${image.alt} in fullscreen`}
                  >
                    <div className="polaroid-frame h-full">
                      <div className="aspect-[4/5] overflow-hidden rounded-t-card">
                        <motion.img
                          src={image.src}
                          alt={image.alt}
                          className="w-full h-full object-cover transition-transform duration-700"
                          initial={{ scale: 1.05 }}
                          animate={{ scale: 1 }}
                          whileHover={{ scale: 1.08 }}
                        />
                      </div>
                    </div>
                  </button>

                  {/* View indicator */}
                  <motion.div
                    className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1 px-3 py-1.5 rounded-full bg-white/90 backdrop-blur-sm text-text text-xs font-medium opacity-0"
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7" />
                      <path d="M21 3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V3" />
                      <path d="M3 9l9-7 9 7" />
                      <path d="M9 21v-7" />
                      <path d="M15 21v-7" />
                    </svg>
                    <span>View</span>
                  </motion.div>
                </article>
              </motion.div>
            );
          })}
        </div>
      </div>

      <Lightbox
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        images={images}
        initialIndex={lightboxIndex}
        onNavigate={navigateLightbox}
      />
    </section>
  );
}

import React from 'react';