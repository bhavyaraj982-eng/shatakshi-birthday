'use client';
import { NavLink } from '@/components/NavLink';

import Link from 'next/link';
import { ArrowLeft, Sparkles, Film, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function TimelinePage() {
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
                  Chapter 1: Memory Film
                </h1>
                <p className="handwritten-lg text-accent mt-1">Where the story begins</p>
              </div>

              <div className="w-32" />
            </div>
          </div>
        </header>

        <main className="flex-1">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="text-center mb-12 fade-in" style={{ opacity: 0 }}>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full mb-4" style={{ background: 'linear-gradient(145deg, #A61E4D15, #A61E4D05)', border: '1px solid #A61E4D30' }}>
                <svg className="w-5 h-5" style={{ color: '#A61E4D' }} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M3 7.5h4"/><path d="M3 12h18"/><path d="M3 16.5h4"/><path d="M17 3v18"/><path d="M17 7.5h4"/></svg>
                <span className="font-handwritten text-accent">Chapter 1 Unlocked</span>
                <svg className="w-4 h-4 fill-green-500 text-green-500" viewBox="0 0 24 24"><path d="M20 6L9 17l-5-5"/></svg>
              </div>
              <p className="body-lg text-text-light max-w-2xl mx-auto">
                Roll the film. Watch the years unfold. From first steps to favorite moments — every frame a memory.
              </p>
            </div>

            <div className="space-y-8">
              <div className="relative fade-in" style={{ opacity: 0 }}>
                <div className="absolute left-8 top-0 bottom-0 w-px -translate-x-1/2" style={{ background: 'linear-gradient(to bottom, transparent, #D6B98C, transparent)' }} />
                <div className="pl-20 space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(145deg, #A61E4D, #A61E4Ddd)', boxShadow: '0 4px 20px #A61E4D30' }}>
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M3 7.5h4"/><path d="M3 12h18"/><path d="M3 16.5h4"/><path d="M17 3v18"/><path d="M17 7.5h4"/></svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="heading-sm text-primary font-medium mb-2">Childhood</h3>
                      <p className="body-md text-text-light">First steps, first words, first everything. The years when everything was magic.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(145deg, #A61E4D, #A61E4Ddd)', boxShadow: '0 4px 20px #A61E4D30' }}>
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M3 7.5h4"/><path d="M3 12h18"/><path d="M3 16.5h4"/><path d="M17 3v18"/><path d="M17 7.5h4"/></svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="heading-sm text-primary font-medium mb-2">Goofy</h3>
                      <p className="body-md text-text-light">Making faces, caught mid-laugh, silly selfies. The moments you couldn't plan.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(145deg, #A61E4D, #A61E4Ddd)', boxShadow: '0 4px 20px #A61E4D30' }}>
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M3 7.5h4"/><path d="M3 12h18"/><path d="M3 16.5h4"/><path d="M17 3v18"/><path d="M17 7.5h4"/></svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="heading-sm text-primary font-medium mb-2">Beautiful You</h3>
                      <p className="body-md text-text-light">Golden hour portraits, candid smiles, thoughtful gazes. You, simply being you.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'linear-gradient(145deg, #A61E4D, #A61E4Ddd)', boxShadow: '0 4px 20px #A61E4D30' }}>
                      <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M7 3v18"/><path d="M3 7.5h4"/><path d="M3 12h18"/><path d="M3 16.5h4"/><path d="M17 3v18"/><path d="M17 7.5h4"/></svg>
                    </div>
                    <div className="flex-1">
                      <h3 className="heading-sm text-primary font-medium mb-2">Our Favourite Moments</h3>
                      <p className="body-md text-text-light">Trips together, celebrations, quiet moments. The memories we'll keep forever.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center fade-in" style={{ opacity: 0 }}>
              <div className="inline-flex items-center gap-4 p-4 rounded-2xl mb-4" style={{ background: 'linear-gradient(145deg, #A61E4D15, #D6B98C15)', border: '1px solid #A61E4D30' }}>
                <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: 'linear-gradient(145deg, #A61E4D, #D6B98C)' }}>
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/></svg>
                </div>
                <div className="text-left">
                  <div className="font-heading text-lg font-light">Film Complete</div>
                  <div className="handwritten-lg text-accent mt-1">The reel remembers every frame</div>
                </div>
              </div>
              <NavLink href="/journey" className="btn-secondary inline-flex items-center gap-2">
                <span>Return to Storybook</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </NavLink>
            </div>
          </div>
        </main>

        <footer className="px-4 py-4 border-t border-primary/5 bg-background/50">
          <div className="max-w-7xl mx-auto">
            <nav className="flex items-center justify-center gap-4 flex-wrap" aria-label="Chapter navigation">
              <NavLink href="/journey" className="btn-secondary text-sm">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M19 12H5M12 19l-7-7 7-7" strokeLinecap="round" strokeLinejoin="round"/></svg>
                Storybook
              </NavLink>
              <NavLink href="/videos" className="btn-primary text-sm">
                Next: Video Letters
                <svg className="w-4 h-4 ml-1 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2"><path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"/><path d="M20 3v4"/><path d="M22 5h-4"/></svg>
              </NavLink>
            </nav>
          </div>
        </footer>
      </div>
    </main>
  );
}

