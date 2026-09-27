'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

export function FinalLetter() {
  const letterContent = `Dearest Shatakshi,

As this birthday chapter comes to a close, we wanted you to know something that no review, no photo, no video can quite capture.

You are the kind of person who makes the world softer just by being in it. The way you remember how everyone takes their coffee. The way you send voice notes at midnight just to say "thinking of you." The way you celebrate other people's wins like they're your own. The way you hold space for the messy, complicated, beautiful parts of life — both yours and everyone else's.

We've watched you navigate this year with a grace that takes our breath away. Through the uncertainties, the transitions, the moments that asked more of you than you thought you had to give — you kept showing up. For yourself. For us. For the life you're building.

Your laughter has been the soundtrack to so many of our best memories. Your tears have reminded us it's okay to not be okay. Your dreams have inspired us to dream bigger. Your love — fierce, loyal, unconditional — has been the anchor for all of us.

So here's what we wish for you this year:

Nights where you sleep peacefully.
Mornings where coffee tastes like possibility.
Moments of quiet where you hear your own voice.
Adventures that make your heart race.
People who love you as loudly as you love them.
The courage to say yes to what scares you.
The wisdom to say no to what drains you.
And always, always — the knowing that you are deeply, irrevocably, messily loved.

Not for what you do. Not for what you achieve. Just for who you are.

Thank you for letting us be part of your story. We can't wait to see what you write next.

With all our hearts,

— Your people ♡`;

  return (
    <section id="final-letter" className="relative py-24 sm:py-32 lg:py-40" aria-labelledby="letter-heading">
      {/* Paper texture background */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(ellipse at 50% 50%, #F8F4EF 0%, #F0E6DC 100%),
            url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='paper'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.05' numOctaves='5'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23paper)' opacity='0.03'/%3E%3C/svg%3E")
          `,
        }}
        aria-hidden="true"
      />

      <div className="section-container relative">
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
        >
          {/* Header */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-12 h-[2px] bg-gold/50" />
              <Heart className="w-6 h-6 text-accent" aria-hidden="true" />
              <div className="w-12 h-[2px] bg-gold/50" />
            </div>
            <h2 id="letter-heading" className="heading-md text-primary font-medium">
              Before you go...
            </h2>
          </motion.div>

          {/* Letter paper */}
          <motion.div
            className="relative bg-white/80 backdrop-blur-sm rounded-card-lg shadow-soft p-8 sm:p-12 lg:p-16 border border-gold/20"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ delay: 0.4, duration: 0.7 }}
          >
            {/* Paper lines decoration */}
            <div className="absolute inset-0 pointer-events-none opacity-20" aria-hidden="true">
              {[...Array(25)].map((_, i) => (
                <div
                  key={i}
                  className="absolute left-8 right-8 h-[1px]"
                  style={{
                    top: `${60 + i * 28}px`,
                    background: 'linear-gradient(90deg, transparent, #D6B98C, transparent)',
                  }}
                />
              ))}
            </div>

            <div className="relative z-10 font-body text-text leading-relaxed whitespace-pre-wrap text-base sm:text-lg">
              {letterContent.split('\n').map((line, i) => (
                <motion.p
                  key={i}
                  className={cn(
                    'mb-4 last:mb-0',
                    i === 0 && 'handwritten-xl text-center mb-8',
                    i >= letterContent.split('\n').length - 3 && 'text-center',
                    line.includes('— Your people') && 'handwritten-xl mt-10'
                  )}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ delay: 0.6 + i * 0.03, duration: 0.5 }}
                >
                  {line.trim() || <br />}
                </motion.p>
              ))}
            </div>

            {/* Signature decoration */}
            <motion.div
              className="absolute bottom-8 right-8 flex items-center gap-2 opacity-30"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.5, duration: 0.5 }}
              aria-hidden="true"
            >
              <Heart className="w-5 h-5 text-accent" />
              <Heart className="w-4 h-4 text-gold" />
              <Heart className="w-3 h-3 text-accent/50" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}