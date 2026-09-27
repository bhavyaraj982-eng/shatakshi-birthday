'use client';

import Link from 'next/link';
import { ArrowRight, Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

export function WelcomePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative" aria-labelledby="welcome-heading">
      <div className="absolute inset-0 bg-background" aria-hidden="true">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 text-center max-w-3xl px-4">
        <div className="mb-10 flex items-center justify-center gap-3">
          <div className="w-16 h-px bg-gold/50" />
          <Heart className="w-6 h-6 text-accent" aria-hidden="true" />
          <div className="w-16 h-px bg-gold/50" />
        </div>

        <h1 id="welcome-heading" className="heading-xl text-primary mb-6 leading-tight">
          For Shatakshi
        </h1>

        <p className="handwritten-xl text-accent mb-6">
          A little corner of the internet made just for you
        </p>

        <p className="body-lg text-text-light mb-10 max-w-xl mx-auto text-balance">
          This isn&apos;t just a birthday wish. It&apos;s a collection of moments, memories,
          and messages from the people who love you.
        </p>

        <Link
          href="/journey"
          className={cn(
            'btn-primary group inline-flex items-center gap-3',
            'relative overflow-hidden'
          )}
        >
          <span>Begin the Journey</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Link>

        <p className="mt-8 text-sm text-text-light/50 font-handwritten text-accent/70">
          Made with love, chaos, and too many coffee runs ☕
        </p>
      </div>
    </main>
  );
}