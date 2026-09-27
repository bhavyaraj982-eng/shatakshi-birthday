'use client';
import { NavLink } from '@/components/NavLink';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, Sparkles, GalleryThumbnails, Check, Image } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function GalleryPage() {
  return (
    <main className="min-h-screen relative" aria-labelledby="page-heading">
      <div className="absolute inset-0 bg-background" aria-hidden="true">
        <div className="absolute inset-0 opacity-[0.015]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 min-h-screen flex flex-col">
        <header className="px-4 py-4 sm:py-6 border-b border-primary/5 sticky top-0 z-20 bg-background/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <NavLink href="/journey" className="btn-secondary flex-shrink-0">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>Storybook</span>
              </NavLink>

              <div className="flex-1 text-center">
                <h1 id="page-heading" className="heading-md text-primary font-light">
                  Chapter 5: Photo Wall
                </h1>
                <p className="handwritten-lg text-accent mt-1">Moments frozen in time</p>
              </div>

              <div className="w-32" />
            </div>
          </div>
        </header>

        <main className="flex-1">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="text-center mb-12 fade-in" style={{ opacity: 0 }}>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-4" style={{ background: 'linear-gradient(145deg, #0F172A15, #0F172A05)', border: '1px solid #0F172A20' }}>
                <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><rect width="18" height="14" x="3" y="3" rx="2"/><path d="M4 21h1"/><path d="M9 21h1"/><path d="M14 21h1"/><path d="M19 21h1"/></svg>
                <span className="font-handwritten text-primary">Chapter 5 Unlocked</span>
                <svg className="w-4 h-4 fill-green-500 text-green-500" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>
              </div>
              <p className="body-lg text-text-light max-w-2xl mx-auto">
                Step into the frames. Walk through the gallery where every photo is a portal to a memory.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 fade-in" style={{ opacity: 0 }}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                <div key={i} className="relative aspect-[4/5] rounded-xl overflow-hidden cursor-pointer fade-in" style={{ opacity: 0, transitionDelay: `${0.05 + i * 0.03}s` }}>
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-gold/10 flex items-center justify-center">
                    <svg className="w-12 h-12 opacity-50" style={{ color: i % 2 === 0 ? '#A61E4D' : '#D6B98C' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><rect width="18" height="14" x="3" y="3" rx="2"/><path d="M4 21h1"/><path d="M9 21h1"/><path d="M14 21h1"/><path d="M19 21h1"/></svg>
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-primary/80">
                    <span className="text-white font-medium">View</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center fade-in" style={{ opacity: 0 }}>
              <div className="inline-flex items-center gap-4 p-4 rounded-2xl mb-4" style={{ background: 'linear-gradient(145deg, #0F172A15, #D6B98C10)', border: '1px solid #0F172A20' }}>
                <span className="font-handwritten text-primary">Gallery Complete</span>
                <span className="handwritten-lg text-accent ml-2">Every frame preserved in light</span>
              </div>
              <div className="flex items-center justify-center gap-4 flex-wrap mt-4">
                <NavLink href="/wishes" className="btn-secondary text-sm">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Previous
                </NavLink>
                <NavLink href="/journey" className="btn-secondary text-sm">
                  Storybook
                </NavLink>
                <NavLink href="/letter" className="btn-primary text-sm">
                  Next: Final Letter
                  <span className="text-gold">✦</span>
                </NavLink>
              </div>
            </div>
          </div>
        </main>

        <footer className="px-4 py-4 border-t border-primary/5 bg-background/50">
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center justify-center gap-4 flex-wrap" aria-label="Chapter navigation">
              <NavLink href="/wishes" className="btn-secondary text-sm">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Love Letters
              </NavLink>
              <NavLink href="/journey" className="btn-secondary text-sm">
                Storybook
              </NavLink>
              <NavLink href="/letter" className="btn-primary text-sm">
                Next: Final Letter
                <span className="text-gold">✦</span>
              </NavLink>
            </nav>
          </div>
        </footer>
      </div>
    </main>
  );
}

