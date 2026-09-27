'use client';
import { NavLink } from '@/components/NavLink';

import Link from 'next/link';
import { ArrowLeft, ArrowRight, Sparkles, Music, Check, Film } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function VideosPage() {
  return (
    <main className="min-h-screen relative" aria-labelledby="page-heading">
      <div className="absolute inset-0 bg-primary" aria-hidden="true" />

      <div className="relative z-10 min-h-screen flex flex-col">
        <header className="px-4 py-4 sm:py-6 border-b border-white/10 sticky top-0 z-20 bg-primary/80 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <NavLink href="/journey" className="btn-secondary flex-shrink-0 bg-white/10 text-white border-white/20 hover:border-white/40 hover:bg-white/20">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                <span>Storybook</span>
              </NavLink>

              <div className="flex-1 text-center">
                <h1 id="page-heading" className="heading-md text-white font-light">
                  Chapter 2: Video Letters
                </h1>
                <p className="handwritten-lg text-gold mt-1">Some moments were better moving</p>
              </div>

              <div className="w-32" />
            </div>
          </div>
        </header>

        <main className="flex-1">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="text-center mb-12 fade-in" style={{ opacity: 0 }}>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-4" style={{ background: 'linear-gradient(145deg, #FFFFFF15, #FFFFFF05)', border: '1px solid #FFFFFF30' }}>
                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
                <span className="font-handwritten text-gold">Chapter 2 Unlocked</span>
              </div>
              <p className="body-lg text-white/80 max-w-2xl mx-auto">
                Press play. Hear the laughter. Feel the moments move. Some memories were meant to be in motion.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="relative group rounded-2xl overflow-hidden" style={{ background: 'linear-gradient(145deg, #0F172A, #0F172Add)', border: '1px solid #FFFFFF20' }}>
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full flex items-center justify-center bg-white/10 backdrop-blur-sm" style={{ boxShadow: '0 8px 30px rgba(0,0,0,0.3)' }}>
                      <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="heading-sm text-white font-medium mb-3">Video {i}</h3>
                    <p className="body-md text-white/70 mb-6">A memory in motion. Tap to watch.</p>
                    <button className="w-full py-2.5 rounded-xl font-medium flex items-center justify-center gap-2" style={{ background: 'linear-gradient(145deg, #0F172A, #0F172Add)', color: 'white', boxShadow: '0 4px 20px #0F172A30' }}>
                      <span>Watch</span>
                      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center fade-in" style={{ opacity: 0 }}>
              <div className="inline-flex items-center gap-4 p-4 rounded-2xl mb-4" style={{ background: 'linear-gradient(145deg, #FFFFFF15, #D6B98C10)', border: '1px solid #D6B98C40' }}>
                <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/></svg>
                <div className="text-left">
                  <div className="font-heading text-lg text-white">Projection Complete</div>
                  <div className="handwritten-lg text-gold mt-1">The projector holds every frame</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-4 flex-wrap mt-4">
                <NavLink href="/timeline" className="btn-secondary text-sm bg-white/10 text-white border-white/20 hover:border-white/40 hover:bg-white/20">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Previous
                </NavLink>
                <NavLink href="/journey" className="btn-secondary text-sm bg-white/10 text-white border-white/20 hover:border-white/40 hover:bg-white/20">
                  Storybook
                </NavLink>
                <NavLink href="/scrapbook" className="btn-primary text-sm">
                  Next: Scrapbook Desk
                  <svg className="w-4 h-4 ml-1 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/></svg>
                </NavLink>
              </div>
            </div>
          </div>
        </main>

        <footer className="px-4 py-4 border-t border-white/10 bg-primary/50">
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center justify-center gap-4 flex-wrap" aria-label="Chapter navigation">
              <NavLink href="/timeline" className="btn-secondary text-sm bg-white/10 text-white border-white/20 hover:border-white/40 hover:bg-white/20">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Memory Film
              </NavLink>
              <NavLink href="/journey" className="btn-secondary text-sm bg-white/10 text-white border-white/20 hover:border-white/40 hover:bg-white/20">
                Storybook
              </NavLink>
              <NavLink href="/scrapbook" className="btn-primary text-sm">
                Next: Scrapbook Desk
                <svg className="w-4 h-4 ml-1 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/></svg>
              </NavLink>
            </nav>
          </div>
        </footer>
      </div>
    </main>
  );
}

