'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ScrapbookItemProps {
  children: React.ReactNode;
  rotation?: number;
  x?: number;
  y?: number;
  scale?: number;
  delay?: number;
  className?: string;
}

function ScrapbookItem({ children, rotation = 0, x = 0, y = 0, scale = 1, delay = 0, className }: ScrapbookItemProps) {
  return (
    <motion.div
      className={cn('absolute', className)}
      style={{
        transform: `translate(${x}px, ${y}px) rotate(${rotation}deg) scale(${scale})`,
        transformOrigin: 'center center',
      }}
      initial={{ opacity: 0, scale: 0.5, rotate: rotation + (Math.random() - 0.5) * 20 }}
      animate={{ opacity: 1, scale: 1, rotate: rotation }}
      transition={{
        default: { delay, duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] },
        scale: { duration: 0.3 },
      }}
      whileHover={{ scale: scale * 1.05, zIndex: 10 }}
    >
      {children}
    </motion.div>
  );
}

export function Scrapbook() {
  const items = [
    // Polaroids
    {
      type: 'polaroid',
      rotation: -8,
      x: -120,
      y: -80,
      scale: 0.9,
      delay: 0.1,
      content: (
        <div className="polaroid-frame w-40">
          <div className="aspect-[4/5] bg-gradient-to-br from-accent/10 to-gold/10 flex items-center justify-center">
            <span className="font-handwritten text-accent/40 text-sm">📸</span>
          </div>
        </div>
      ),
    },
    {
      type: 'polaroid',
      rotation: 5,
      x: 100,
      y: -100,
      scale: 0.85,
      delay: 0.2,
      content: (
        <div className="polaroid-frame w-36">
          <div className="aspect-[4/5] bg-gradient-to-br from-gold/10 to-accent/10 flex items-center justify-center">
            <span className="font-handwritten text-accent/40 text-sm">📸</span>
          </div>
        </div>
      ),
    },
    {
      type: 'polaroid',
      rotation: -3,
      x: -80,
      y: 60,
      scale: 0.8,
      delay: 0.3,
      content: (
        <div className="polaroid-frame w-32">
          <div className="aspect-[4/5] bg-gradient-to-br from-accent/10 to-gold/10 flex items-center justify-center">
            <span className="font-handwritten text-accent/40 text-sm">📸</span>
          </div>
        </div>
      ),
    },
    {
      type: 'polaroid',
      rotation: 7,
      x: 140,
      y: 40,
      scale: 0.95,
      delay: 0.4,
      content: (
        <div className="polaroid-frame w-44">
          <div className="aspect-[4/5] bg-gradient-to-br from-gold/10 to-accent/10 flex items-center justify-center">
            <span className="font-handwritten text-accent/40 text-sm">📸</span>
          </div>
        </div>
      ),
    },
    // Sticky notes
    {
      type: 'sticky',
      rotation: -4,
      x: -160,
      y: 20,
      scale: 0.7,
      delay: 0.15,
      content: (
        <div className="w-28 h-28 bg-yellow-100/80 rounded-lg shadow-soft rotate-1 p-3">
          <p className="font-handwritten text-accent text-xs leading-relaxed">"You're my favorite notification"</p>
        </div>
      ),
    },
    {
      type: 'sticky',
      rotation: 3,
      x: 160,
      y: -40,
      scale: 0.65,
      delay: 0.25,
      content: (
        <div className="w-24 h-24 bg-pink-50/80 rounded-lg shadow-soft -rotate-1 p-3">
          <p className="font-handwritten text-accent text-xs leading-relaxed">"Chaos coordinator"</p>
        </div>
      ),
    },
    {
      type: 'sticky',
      rotation: -2,
      x: 20,
      y: 100,
      scale: 0.6,
      delay: 0.35,
      content: (
        <div className="w-26 h-26 bg-green-50/80 rounded-lg shadow-soft rotate-2 p-3">
          <p className="font-handwritten text-accent text-xs leading-relaxed">{"Coffee > Adulting"}</p>
        </div>
      ),
    },
    // Dried flower
    {
      type: 'flower',
      rotation: 12,
      x: -180,
      y: -20,
      scale: 0.8,
      delay: 0.2,
      content: (
        <svg className="w-16 h-16 text-gold/60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2C12 2 8 8 8 12c0 4 4 8 4 8s4-4 4-8c0-4-4-10-4-10z" />
          <path d="M12 22v-8" />
          <path d="M8 12l4-4" />
          <path d="M16 12l-4-4" />
        </svg>
      ),
    },
    {
      type: 'flower',
      rotation: -15,
      x: 180,
      y: 80,
      scale: 0.7,
      delay: 0.3,
      content: (
        <svg className="w-12 h-12 text-accent/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 2C12 2 8 8 8 12c0 4 4 8 4 8s4-4 4-8c0-4-4-10-4-10z" />
          <path d="M12 22v-8" />
          <path d="M8 12l4-4" />
          <path d="M16 12l-4-4" />
        </svg>
      ),
    },
    // Ticket stub
    {
      type: 'ticket',
      rotation: 2,
      x: 60,
      y: -60,
      scale: 0.75,
      delay: 0.25,
      content: (
        <div className="w-28 h-16 bg-gray-100/80 rounded-lg shadow-soft border border-gray-200 p-2 flex items-center justify-between">
          <div>
            <p className="font-body text-xs text-text-light">ADMIT ONE</p>
            <p className="font-handwritten text-accent text-xs">Shats' Birthday Tour</p>
          </div>
          <div className="flex items-center gap-1">
            <span className="font-body text-xs text-text-light">🎫</span>
          </div>
        </div>
      ),
    },
    // Stars
    {
      type: 'star',
      rotation: 0,
      x: -200,
      y: 120,
      scale: 0.5,
      delay: 0.1,
      content: (
        <motion.span
          className="text-gold/40"
          animate={{ rotate: [0, 360], scale: [1, 1.2, 1] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
        >
          ✦
        </motion.span>
      ),
    },
    {
      type: 'star',
      rotation: 0,
      x: 200,
      y: -120,
      scale: 0.4,
      delay: 0.4,
      content: (
        <motion.span
          className="text-accent/30"
          animate={{ rotate: [0, -360], scale: [1, 1.3, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
        >
          ✧
        </motion.span>
      ),
    },
    {
      type: 'star',
      rotation: 0,
      x: -40,
      y: -140,
      scale: 0.6,
      delay: 0.5,
      content: (
        <motion.span
          className="text-gold/50"
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 4, repeat: Infinity }}
        >
          ★
        </motion.span>
      ),
    },
    {
      type: 'star',
      rotation: 0,
      x: 180,
      y: 120,
      scale: 0.5,
      delay: 0.6,
      content: (
        <motion.span
          className="text-accent/40"
          animate={{ scale: [1, 1.4, 1], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          ✦
        </motion.span>
      ),
    },
  ];

  return (
    <section id="scrapbook" className="relative py-24 sm:py-32 lg:py-40 overflow-hidden" aria-labelledby="scrapbook-heading">
      <div className="section-container relative">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          <h2 id="scrapbook-heading" className="heading-lg text-primary mb-4">
            Scrapbook Break
          </h2>
          <p className="handwritten-lg">A desk of memories</p>
        </motion.div>

        {/* Desk surface */}
        <div className="relative min-h-[500px] lg:min-h-[600px]">
          {/* Desk texture background */}
          <div
            className="absolute inset-0 rounded-card-lg"
            style={{
              backgroundImage: `
                radial-gradient(ellipse at 20% 30%, #D6B98C10 0%, transparent 50%),
                radial-gradient(ellipse at 80% 70%, #A61E4D10 0%, transparent 50%),
                url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.02'/%3E%3C/svg%3E")
              `,
            }}
            aria-hidden="true"
          />

          {/* Coffee ring stain */}
          <div
            className="absolute bottom-20 left-20 w-16 h-16 border-2 border-gold/20 rounded-full"
            style={{ borderTopColor: 'transparent', borderRightColor: 'transparent' }}
            aria-hidden="true"
          />

          {/* Scattered items */}
          {items.map((item, index) => (
            <ScrapbookItem
              key={index}
              rotation={item.rotation}
              x={item.x}
              y={item.y}
              scale={item.scale}
              delay={item.delay}
            >
              {item.content}
            </ScrapbookItem>
          ))}

          {/* Floating dust */}
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={`dust-${i}`}
              className="absolute w-0.5 h-0.5 rounded-full bg-gold/40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: [0.2, 0.5, 0.2],
                scale: [0.5, 1, 0.5],
                x: [(Math.random() - 0.5) * 60, (Math.random() - 0.5) * 60],
                y: [(Math.random() - 0.5) * 60, (Math.random() - 0.5) * 60],
              }}
              transition={{
                duration: 6 + Math.random() * 6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: Math.random() * 3,
              }}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>
    </section>
  );
}