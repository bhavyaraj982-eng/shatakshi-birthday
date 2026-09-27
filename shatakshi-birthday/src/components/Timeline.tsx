'use client';

import { motion } from 'framer-motion';
import { PolaroidCard } from './PolaroidCard';
import { galleryImages, categoryLabels, categoryOrder } from '@/lib/gallery';
import { cn } from '@/lib/utils';

const categoryColors: Record<string, string> = {
  childhood: '#A61E4D',
  goofy: '#D6B98C',
  beautiful: '#0F172A',
  favourite: '#A61E4D',
};

export function Timeline() {
  const categories = categoryOrder;

  return (
    <section id="timeline" className="relative py-24 sm:py-32 lg:py-40" aria-labelledby="timeline-heading">
      <div className="section-container">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 id="timeline-heading" className="heading-lg text-primary mb-4">
            Memory Timeline
          </h2>
          <p className="handwritten-lg">A journey through the years</p>
        </motion.div>

        {/* Timeline container */}
        <div className="relative">
          {/* Gold connecting line */}
          <motion.div
            className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              background: 'linear-gradient(to bottom, transparent, #D6B98C, transparent)',
            }}
            aria-hidden="true"
          />

          <div className="space-y-16 lg:space-y-24">
            {categories.map((category, catIndex) => {
              const categoryImages = galleryImages.filter((img) => img.category === category);
              const color = categoryColors[category];

              return (
                <motion.div
                  key={category}
                  className="relative"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ delay: catIndex * 0.2, duration: 0.8 }}
                >
                  {/* Category label */}
                  <motion.div
                    className={cn(
                      'absolute lg:left-1/2 lg:-translate-x-1/2 lg:top-0',
                      'flex items-center gap-3'
                    )}
                    style={{
                      left: '50%',
                      transform: 'translateX(-50%)',
                    }}
                  >
                    <motion.div
                      className="hidden lg:block w-24 h-[2px]"
                      style={{ background: color }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    />
                    <span
                      className={cn(
                        'px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wider',
                        'bg-white shadow-soft border',
                        `border-l-4`
                      )}
                      style={{ borderLeftColor: color }}
                    >
                      {categoryLabels[category]}
                    </span>
                    <motion.div
                      className="hidden lg:block w-24 h-[2px]"
                      style={{ background: color }}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ delay: 0.3, duration: 0.5 }}
                    />
                  </motion.div>

                  {/* Mobile category label */}
                  <motion.div className="lg:hidden text-center mb-8">
                    <span
                      className={cn(
                        'inline-block px-4 py-2 rounded-full text-sm font-medium uppercase tracking-wider',
                        'bg-white shadow-soft border',
                        `border-l-4`
                      )}
                      style={{ borderLeftColor: color }}
                    >
                      {categoryLabels[category]}
                    </span>
                  </motion.div>

                  {/* Images grid */}
                  <div className={cn('space-y-8 lg:space-y-12', 'lg:pl-20 lg:pr-20')}>
                    {categoryImages.map((image, imgIndex) => {
                      const isLeft = image.position === 'left';
                      const delay = catIndex * 0.15 + imgIndex * 0.1;

                      return (
                        <motion.div
                          key={image.id}
                          className={cn(
                            'relative',
                            'lg:flex lg:items-center',
                            isLeft ? 'lg:justify-start' : 'lg:justify-end'
                          )}
                          style={{
                            // Alternate on mobile too for visual interest
                            transform: `rotate(${image.rotation || 0}deg)`,
                          }}
                          initial={{ opacity: 0, y: 40 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: '-50px' }}
                          transition={{ delay, duration: 0.7 }}
                        >
                          {/* Gold dot on timeline */}
                          <motion.div
                            className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full"
                            style={{
                              background: color,
                              boxShadow: `0 0 0 4px #F8F4EF, 0 0 0 6px ${color}`,
                            }}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: delay + 0.2, duration: 0.4 }}
                          />

                          <PolaroidCard
                            imageSrc={image.src}
                            alt={image.alt}
                            caption={image.alt}
                            rotation={image.rotation}
                            isLightboxTrigger={true}
                          />
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}