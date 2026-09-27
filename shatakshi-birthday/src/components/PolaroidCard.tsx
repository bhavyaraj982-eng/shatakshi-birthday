'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';

interface PolaroidCardProps extends Omit<HTMLMotionProps<'figure'>, 'children'> {
  imageSrc: string;
  alt: string;
  caption?: string;
  rotation?: number;
  isLightboxTrigger?: boolean;
  onClick?: () => void;
}

export function PolaroidCard({
  imageSrc,
  alt,
  caption,
  rotation = 0,
  isLightboxTrigger = false,
  onClick,
  className,
  style,
  ...props
}: PolaroidCardProps) {
  const rotate = rotation || (Math.random() - 0.5) * 6;

  return (
    <motion.figure
      className={cn(
        'polaroid-frame cursor-pointer',
        isLightboxTrigger && 'transition-all duration-slow',
        className
      )}
      style={{
        ...style,
        transform: `rotate(${rotate}deg)`,
      } as React.CSSProperties}
      initial={{ opacity: 0, y: 40, rotate: rotate + (Math.random() - 0.5) * 4 }}
      animate={{ opacity: 1, y: 0, rotate }}
      whileHover={{ y: -8, scale: 1.02, boxShadow: '0 20px 50px rgba(15, 23, 42, 0.15)', rotate }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
      onClick={onClick}
      role={isLightboxTrigger ? 'button' : undefined}
      tabIndex={isLightboxTrigger ? 0 : undefined}
      onKeyDown={(e) => {
        if (isLightboxTrigger && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick?.();
        }
      }}
      {...props}
    >
      <div className="aspect-[4/5] overflow-hidden rounded-t-card">
        <motion.img
          src={imageSrc}
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-700"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.05 }}
        />
      </div>
      {caption && (
        <figcaption className="p-4 text-center font-handwritten text-accent text-base">
          {caption}
        </figcaption>
      )}
      <motion.div
        className="absolute bottom-2 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-gold/60 opacity-0"
        initial={{ scale: 0 }}
        animate={{ opacity: 0.6, scale: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      />
    </motion.figure>
  );
}